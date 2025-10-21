<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Role extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'code', 'description', 'is_active'];

    /**
     * The permissions that belong to the Role
     */
    public function permissions(): BelongsToMany
    {
        return $this->belongsToMany(Permission::class, RolePermission::class, 'role_id', 'permission_id');
    }

    /**
     * Get all of the rolePermissions   for the Role
     */
    public function rolePermissions(): HasMany
    {
        return $this->hasMany(RolePermission::class);
    }
}
