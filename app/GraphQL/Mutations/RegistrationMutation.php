<?php

declare(strict_types=1);

namespace App\GraphQL\Mutations;

use App\Models\User;
use Carbon\Carbon;
use DanielDeWit\LighthouseSanctum\Contracts\Services\EmailVerificationServiceInterface;
use DanielDeWit\LighthouseSanctum\Exceptions\HasApiTokensException;
use DanielDeWit\LighthouseSanctum\Traits\CreatesUserProvider;
use Exception;
use Illuminate\Auth\AuthManager;
use Illuminate\Auth\EloquentUserProvider;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Contracts\Config\Repository as Config;
use Illuminate\Contracts\Hashing\Hasher;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Artisan;
use Laravel\Sanctum\Contracts\HasApiTokens;

class RegistrationMutation
{
    use CreatesUserProvider;

    public function __construct(
        protected AuthManager $authManager,
        protected Config $config,
        protected Hasher $hash,
        protected EmailVerificationServiceInterface $emailVerificationService,
    ) {
    }

    public function backupDatabase($rootValue, array $args)
    {
        Artisan::call('backup:run');

        return null;
    }

    /**
     * @param  array<string, mixed>  $args
     * @return array<string, string|null>
     *
     * @throws Exception
     */
    public function __invoke(mixed $_, array $args): array
    {
        /** @var EloquentUserProvider $userProvider */
        $userProvider = $this->createUserProvider();

        $user = $this->saveUser(
            $userProvider->createModel(),
            $this->getPropertiesFromArgs($args),
        );

        $user->email_verified_at = Carbon::now();
        $user->roles()->sync($args['roles']);

        if ($user instanceof MustVerifyEmail) {
            if (isset($args['verification_url'])) {
                /** @var array<string, string> $verificationUrl */
                $verificationUrl = $args['verification_url'];

                $this->emailVerificationService->setVerificationUrl($verificationUrl['url']);
            }

            $user->sendEmailVerificationNotification();

            return [
                'token' => null,
                'status' => 'MUST_VERIFY_EMAIL',
            ];
        }

        if (! $user instanceof HasApiTokens) {
            throw new HasApiTokensException($user);
        }

        return [
            'token' => $user->createToken('default')->plainTextToken,
            'status' => 'SUCCESS',
        ];
    }

    /**
     * @param  array<string, mixed>  $attributes
     */
    protected function saveUser(Model $user, array $attributes): Model
    {
        $user
            ->fill($attributes)
            ->save();

        return $user;
    }

    /**
     * @param  array<string, mixed>  $args
     * @return array<string, string>
     */
    protected function getPropertiesFromArgs(array $args): array
    {
        $properties = Arr::except($args, [
            'directive',
            'password_confirmation',
            'verification_url',
        ]);

        $properties['password'] = $this->hash->make($properties['password']);

        return $properties;
    }

    protected function getAuthManager(): AuthManager
    {
        return $this->authManager;
    }

    protected function getConfig(): Config
    {
        return $this->config;
    }

    public function update(mixed $_, array $args)
    {
        if (User::where([['id', '!=', $args['id']], ['email', $args['email']]])->exists()) {
            throw new Exception('EMAIL_ALREADY_EXISTS!');
        }

        $data = collect($args)->only([
            'name',
            'email',
            'username',
            'where_house_id',
            'project_id',
        ]);

        $user = User::find($args['id']);
        $user['password'] = $this->hash->make($args['password']);
        $user->update($data->toArray());

        return $user;
    }

    public function assignRole($rootValue, array $args)
    {
        $user = User::find($args['user_id']);
        $user->roles()->sync($args['role_id']);

        return $user;
    }
}
