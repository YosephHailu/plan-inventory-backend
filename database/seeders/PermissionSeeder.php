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
        Permission::firstOrCreate(['name' => 'Order'], [ 'code' => 'Order', 'resource' => 'Order']);
        Permission::firstOrCreate(['name' => 'Production'], [ 'code' => 'Production', 'resource' => 'Production']);
        Permission::firstOrCreate(['name' => 'Dispatch'], [ 'code' => 'Dispatch', 'resource' => 'Dispatch']);
        Permission::firstOrCreate(['name' => 'Item'], [ 'code' => 'Item', 'resource' => 'Item']);
        Permission::firstOrCreate(['name' => 'GoodReceive'], [ 'code' => 'GoodReceive', 'resource' => 'GoodReceive']);
        Permission::firstOrCreate(['name' => 'GoodReceiveItem'], [ 'code' => 'GoodReceiveItem', 'resource' => 'GoodReceiveItem']);
        Permission::firstOrCreate(['name' => 'User'], [ 'code' => 'User', 'resource' => 'User']);
        Permission::firstOrCreate(['name' => 'Role'], [ 'code' => 'Role', 'resource' => 'Role']);
        Permission::firstOrCreate(['name' => 'Permission'], [ 'code' => 'Permission', 'resource' => 'Permission']);
        Permission::firstOrCreate(['name' => 'PermissionType'], [ 'code' => 'PermissionType', 'resource' => 'PermissionType']);
        Permission::firstOrCreate(['name' => 'ConcreteType'], [ 'code' => 'ConcreteType', 'resource' => 'ConcreteType']);
        Permission::firstOrCreate(['name' => 'ConcreteIngredient'], [ 'code' => 'ConcreteIngredient', 'resource' => 'ConcreteIngredient']);
        Permission::firstOrCreate(['name' => 'MeasurementUnit'], [ 'code' => 'MeasurementUnit', 'resource' => 'MeasurementUnit']);
        Permission::firstOrCreate(['name' => 'Vehicle'], [ 'code' => 'Vehicle', 'resource' => 'Vehicle']);
        Permission::firstOrCreate(['name' => 'Report'], [ 'code' => 'Report', 'resource' => 'Report']);
        Permission::firstOrCreate(['name' => 'configuration'], [ 'code' => 'configuration', 'resource' => 'configuration']);

    }
}
