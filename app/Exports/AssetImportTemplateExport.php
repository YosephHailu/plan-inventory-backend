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
        // Fetch reference data for inline dropdowns
        $currencies = Currency::all()->pluck('name')->toArray();
        $acquisitionTypes = AcquisitionType::all()->pluck('name')->toArray();
        $projects = Project::all()->pluck('name')->toArray();
        $donors = Donor::all()->pluck('name')->toArray();
        $programAreas = ProgramArea::all()->pluck('name')->toArray();
        $costCenters = CostCenter::all()->pluck('name')->toArray();

        // Return only the main sheet with reference data
        return [
            new AssetImportTemplateMainSheet($currencies, $acquisitionTypes, $projects, $donors, $programAreas, $costCenters)
        ];
    }
}
