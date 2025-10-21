<?php

namespace Database\Seeders;

use App\Constants\ItemList;
use App\Constants\StaffData;
use App\Models\Item;
use App\Models\Staff;
use Illuminate\Database\Seeder;

class StaffSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        foreach (StaffData::STAFFS as $staff) {
            Staff::firstOrCreate($staff);
        }

        foreach (ItemList::ITEMS as $item) {
            $item['created_by_id'] = 1;
            Item::firstOrCreate($item);
        }
    }
}
