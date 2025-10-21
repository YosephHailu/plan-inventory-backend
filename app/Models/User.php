<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Log;
use Laravel\Sanctum\Contracts\HasApiTokens as HasApiTokensContract;
use Laravel\Sanctum\HasApiTokens;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class User extends Authenticatable implements HasApiTokensContract, HasMedia
{
    use HasApiTokens, HasFactory, Notifiable, InteractsWithMedia;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'username',
        'password',
        'phone_number',
        'email',
        'post_code',
        'address',
        'about',
        'last_password_change_date',
        'last_seen',
        'is_active',
        'is_locked',
        'email_verified_at',
        'role',
        'project_id',
        'where_house_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function scopeSearch($query, $search)
    {
        Log::debug($search);

        return $query->where('name', 'LIKE', "$search")
            ->orWhere('phone_number', 'LIKE', "$search")
            ->orWhere('username', 'LIKE', "$search")
            ->orWhere('email', 'LIKE', "$search");
    }

    /**
     * Get the createdBy that owns the User
     */
    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by', 'id');
    }

    /**
     * The roles that belong to the User
     */
    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Role::class, 'user_roles', 'user_id', 'role_id');
    }

    /**
     * Get all of the stockRequests for the User
     */
    public function stockRequests(): HasMany
    {
        return $this->hasMany(StockRequest::class);
    }

    /**
     * Get the project that owns the User
     */
    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class);
    }

    /**
     * Get the whereHouse that owns the User
     */
    public function whereHouse(): BelongsTo
    {
        return $this->belongsTo(WhereHouse::class);
    }
}
