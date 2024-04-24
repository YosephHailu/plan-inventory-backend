<?php

namespace App\Imports;

use App\Models\AcquisitionType;
use App\Models\Asset;
use App\Models\CostCenter;
use App\Models\Currency;
use App\Models\Donor;
use App\Models\ProgramArea;
use App\Models\Project;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Concerns\ToModel;

class AssetImport implements ToModel
{
    /**
    * @param Collection $collection
    */
    public function model(array $row)
    {
        if($row[0] == "Tag Number"){
            return null;
        }
        $currency = Currency::firstOrCreate(['name' => $row[9], 'code' => $row[9]], []);
        
        $acquisitionType = AcquisitionType::firstOrCreate(['name' => $row[11]], ['name' => $row[11], 'description' => $row[11]]);
        if($row[13])
        $project = Project::firstOrCreate(['name' => $row[13]], ['name' => $row[13], 'outline_no' => $row[13]]);
        if($row[16])
            $donor = Donor::firstOrCreate(['name' => $row[16]], ['name' => $row[16], 'fad_number' => $row[16]]);
        $programArea = ProgramArea::firstOrCreate(['name' => $row[18]], ['name' => $row[18], 'four_digit_code' => $row[18]]);
        if($row[19])
            $costCenter = CostCenter::firstOrCreate(['name' => $row[19]], ['name' => $row[19], 'description' => $row[19]]);

        $asset = Asset::firstOrCreate(['tag_number' => $row[0]], [
            'acquisition_date' => $row[1],
            'asset_type' => $row[2],
            'item_name' => $row[3],
            'description' => $row[4],
            'serial_no' => $row[6],
            'accessories' => $row[7],
            'acquisition_cost' => $row[8],
            'currency_id' => $currency->id,
            'depreciation_date' => $row[10],
            'acquisition_type_id' => $acquisitionType->id,
            'purchase_order_no' => $row[12],
            'project_id' => $project->id ?? null,
            'gsrn_no' => $row[14],
            'receipt_date' => $row[15],
            'donor_id' => $donor->id ?? null,
            'program_area_id' => $programArea->id,
            'cost_center_id' => $costCenter->id ?? null,
            'document_no' => $row[1],
        ]);

        return $asset;
    }
}
