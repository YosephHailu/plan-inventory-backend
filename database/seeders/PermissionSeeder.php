<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Permission::firstOrCreate(['name' => 'User'], [ 'code' => 'User', 'resource' => 'User']);
        Permission::firstOrCreate(['name' => 'Role'], [ 'code' => 'Role', 'resource' => 'Role']);
        Permission::firstOrCreate(['name' => 'Permission'], [ 'code' => 'Permission', 'resource' => 'Permission']);
        Permission::firstOrCreate(['name' => 'PermissionType'], [ 'code' => 'PermissionType', 'resource' => 'PermissionType']);
        Permission::firstOrCreate(['name' => 'MeasurementUnit'], [ 'code' => 'MeasurementUnit', 'resource' => 'MeasurementUnit']);
        Permission::firstOrCreate(['name' => 'Report'], [ 'code' => 'Report', 'resource' => 'Report']);
        Permission::firstOrCreate(['name' => 'configuration'], [ 'code' => 'configuration', 'resource' => 'configuration']);

        Permission::firstOrCreate(['name' => 'ItemCategory'], [ 'code' => 'ItemCategory', 'resource' => 'ItemCategory']);
        Permission::firstOrCreate(['name' => 'OfficeLocation'], [ 'code' => 'OfficeLocation', 'resource' => 'OfficeLocation']);

    }
}
