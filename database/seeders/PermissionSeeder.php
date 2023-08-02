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
        Permission::firstOrCreate(['name' => 'WhereHouse'], [ 'code' => 'WhereHouse', 'resource' => 'WhereHouse']);
        Permission::firstOrCreate(['name' => 'OfficeLocation'], [ 'code' => 'OfficeLocation', 'resource' => 'OfficeLocation']);
        Permission::firstOrCreate(['name' => 'StockType'], [ 'code' => 'StockType', 'resource' => 'StockType']);
        Permission::firstOrCreate(['name' => 'Department'], [ 'code' => 'Department', 'resource' => 'Department']);
        Permission::firstOrCreate(['name' => 'Donor'], [ 'code' => 'Donor', 'resource' => 'Donor']);
        Permission::firstOrCreate(['name' => 'LotNumber'], [ 'code' => 'LotNumber', 'resource' => 'LotNumber']);
        Permission::firstOrCreate(['name' => 'Condition'], [ 'code' => 'Condition', 'resource' => 'Condition']);
        Permission::firstOrCreate(['name' => 'Item'], [ 'code' => 'Item', 'resource' => 'Item']);
        Permission::firstOrCreate(['name' => 'StockRequest'], [ 'code' => 'StockRequest', 'resource' => 'StockRequest']);
        Permission::firstOrCreate(['name' => 'StockRequestItem'], [ 'code' => 'StockRequestItem', 'resource' => 'StockRequestItem']);
        Permission::firstOrCreate(['name' => 'StockIssue'], [ 'code' => 'StockIssue', 'resource' => 'StockIssue']);
        Permission::firstOrCreate(['name' => 'StockIssueItem'], [ 'code' => 'StockIssueItem', 'resource' => 'StockIssueItem']);
        Permission::firstOrCreate(['name' => 'GoodReceive'], [ 'code' => 'GoodReceive', 'resource' => 'GoodReceive']);
        Permission::firstOrCreate(['name' => 'GoodReceiveItem'], [ 'code' => 'GoodReceiveItem', 'resource' => 'GoodReceiveItem']);

    }
}
