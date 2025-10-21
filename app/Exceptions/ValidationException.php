<?php

namespace App\Exceptions;

use Exception;
use Nuwave\Lighthouse\Exceptions\RendersErrorsExtensions;

/**
 * Class ValidationException.
 */
class ValidationException extends Exception implements RendersErrorsExtensions
{
    public $errors;

    /**
     * ValidationException constructor.
     *
     * @param $validator
     */
    public function __construct($errors, string $message = '')
    {
        parent::__construct($message);

        $this->errors = $errors;
    }

    /**
     * The category.
     *
     * @var string
     */
    protected $category = 'validation';

    /**
     * Returns true when exception message is safe to be displayed to a client.
     *
     * @api
     */
    public function isClientSafe(): bool
    {
        return true;
    }

    public function getCategory(): string
    {
        return 'validation';
    }

    public function extensionsContent(): array
    {
        return ['errors' => $this->errors];
    }
}
