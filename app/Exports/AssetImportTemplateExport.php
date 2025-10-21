<?php

namespace App\Exports;

use App\Models\AcquisitionType;
use App\Models\CostCenter;
use App\Models\Currency;
use App\Models\Donor;
use App\Models\ProgramArea;
use App\Models\Project;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class AssetImportTemplateExport implements WithMultipleSheets
{
    public function sheets(): array
    {
        $sheets = [];

        // Main data entry sheet
        $sheets[] = new AssetImportTemplateMainSheet();

        // Reference data sheets
        $sheets[] = new ReferenceSheet('Currencies', Currency::all()->pluck('name')->toArray());
        $sheets[] = new ReferenceSheet('Acquisition Types', AcquisitionType::all()->pluck('name')->toArray());
        $sheets[] = new ReferenceSheet('Projects', Project::all()->pluck('name')->toArray());
        $sheets[] = new ReferenceSheet('Donors', Donor::all()->pluck('name')->toArray());
        $sheets[] = new ReferenceSheet('Program Areas', ProgramArea::all()->pluck('name')->toArray());
        $sheets[] = new ReferenceSheet('Cost Centers', CostCenter::all()->pluck('name')->toArray());

        return $sheets;
    }
}
