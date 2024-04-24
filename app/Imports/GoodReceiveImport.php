<?php

namespace App\Imports;

use App\Models\AcquisitionType;
use App\Models\Asset;
use App\Models\CostCenter;
use App\Models\Currency;
use App\Models\Donor;
use App\Models\GoodReceive;
use App\Models\GoodReceiveItem;
use App\Models\Item;
use App\Models\ItemCategory;
use App\Models\ProgramArea;
use App\Models\Project;
use App\Models\StockType;
use App\Models\UnitOfMeasurement;
use App\Models\User;
use App\Models\WhereHouse;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use PhpOffice\PhpSpreadsheet\Shared\Date;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Concerns\ToModel;

class GoodReceiveImport implements ToModel
{
    /**
    * @param Collection $collection
    */
    public function model(array $row)
    {
        if($row[0] == "received_date" || $row[0] == null){
            return null;
        }

        try {

        DB::beginTransaction();
        $whereHouse = WhereHouse::firstOrCreate(['name' => $row[8]], ['address' => $row[8], 'name' => $row[8], 'description' => $row[8], 'capacity' => 0]);
        $itemCategory = ItemCategory::firstOrCreate(['name' => $row[9]], ['name' => $row[9], 'description' => $row[9]]);

        // Convert Excel date to PHP DateTime object and then format it using Carbon
        $receivedDate = Carbon::instance(Date::excelToDateTimeObject($row[0]))->format('Y-m-d');
        // Assuming the reference_number is in the first column of your Excel file
        if(Session::get('reference_number'))
        $referenceNumber = rand();
        
        $goodReceive = GoodReceive::firstOrCreate(['reference_number' => Session::get('reference_number')], [
            'received_date' => $receivedDate,
            'remark' => $row[10],
            'received_by' => $row[1],
            'vendor_name' => $row[2],
            'vendor_id' => $row[3],
            'purchase_order_no' => $row[4],
            'invoice_no' => $row[5],
            'item_category_id' => $itemCategory->id,
            'batch_number' => $row[7],
            'loading_number' => $row[6],
            'reference_number' => Session::get('reference_number'),
            'where_house_id' => $whereHouse->id,
            'created_by_id' => Auth::Id()
        ]);

        $item = Item::firstOrCreate(['name' => $row[11]], ['name' => $row[11], 'description' => $row[11], 'item_code' => $row[11], 'created_by_id' => Auth::Id()]);
        $donor = Donor::firstOrCreate(['name' => $row[15]], ['name' => $row[15], 'description' => $row[15], 'fad_number' => $row[15]]);
        $stockType = StockType::firstOrCreate(['name' => $row[17]], ['name' => $row[17], 'description' => $row[17]]);
        $project = Project::firstOrCreate(['name' => $row[19]], ['name' => $row[19], 'outline_no' => $row[19]]);

        $goodReceive = GoodReceiveItem::create([
            'ordered_quantity' => $row[14],
            'received_quantity' => $row[16],
            'description' => $row[12] ?? $item->name,
            'item_id' => $item->id,
            'balance_due' => $row[16],
            'good_receive_id' => $goodReceive->id,
            'stock_type_id' => $stockType->id,
            'comment' => $row[20],
            'donor_id' => $donor->id,
            'project_id' => $project->id,
            'unit_of_measurement_id' => UnitOfMeasurement::first()->id,
            'unit_price' => $row[13],
        ]);
        DB::commit();
        }catch(Exception $e) {
            Log::debug($row);
            Log::debug($e);
            
            throw new Exception($e);
        }
        return $goodReceive; 
    }
}
