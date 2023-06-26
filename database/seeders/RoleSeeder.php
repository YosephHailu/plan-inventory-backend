<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\PermissionType;
use App\Models\Role;
use App\Models\RolePermission;
use App\Models\RolePermissionType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $role = Role::firstOrCreate([
            'name' => 'admin',
        ],[
            'name' => 'admin',
            'code' => 'admin',
            'description' => 'admin',
        ]);

        $permissions = Permission::all();
        $permissionTypes = PermissionType::all();

        foreach($permissions as $permission) {
            $rolePermission = RolePermission::firstOrCreate([
                'role_id' => $role->id,
                'permission_id' => $permission->id,
            ]);
            foreach($permissionTypes as $permissionType) {
                RolePermissionType::firstOrCreate([
                    'role_permission_id' => $rolePermission->id,
                    'permission_type_id' => $permissionType->id,
                ]);
            }
        }
    }
}
