<?php

namespace Database\Seeders;

use App\Constants\StaffData;
use App\Models\Staff;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StaffSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        foreach(StaffData::STAFFS as $staff) {
            Staff::firstOrCreate($staff);
        }
    }
}
