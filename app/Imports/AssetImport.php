<?php

namespace App\Imports;

use App\Models\AcquisitionType;
use App\Models\Asset;
use App\Models\CostCenter;
use App\Models\Currency;
use App\Models\Donor;
use App\Models\ProgramArea;
use App\Models\Project;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\SkipsEmptyRows;
use Maatwebsite\Excel\Concerns\SkipsOnFailure;
use Maatwebsite\Excel\Concerns\SkipsFailures;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use Maatwebsite\Excel\Validators\Failure;
use PhpOffice\PhpSpreadsheet\Shared\Date as ExcelDate;
use Carbon\Carbon;

class AssetImport implements WithMultipleSheets
{
    use SkipsFailures;

    public $imported = 0;
    public $failed = 0;
    public $errors = [];
    public $currentRow = 1;

    /**
     * Only import from the first sheet (Asset Import)
     */
    public function sheets(): array
    {
        return [
            0 => new AssetImportSheet($this)
        ];
    }
}

class AssetImportSheet implements ToModel, WithHeadingRow, SkipsEmptyRows, SkipsOnFailure
{
    use SkipsFailures;

    private $parent;

    public function __construct(AssetImport $parent)
    {
        $this->parent = $parent;
    }

    /**
     * Convert Excel date serial number to Carbon date
     */
    private function convertExcelDate($value)
    {
        if (empty($value)) {
            return null;
        }

        // If it's already a date string, try to parse it
        if (!is_numeric($value)) {
            try {
                return Carbon::parse($value)->format('Y-m-d');
            } catch (\Exception $e) {
                return null;
            }
        }

        // If it's a numeric value (Excel serial date), convert it
        try {
            $date = ExcelDate::excelToDateTimeObject($value);
            return Carbon::instance($date)->format('Y-m-d');
        } catch (\Exception $e) {
            return null;
        }
    }

    /**
     * @param array $row
     */
    public function model(array $row)
    {
        try {
            // Trim whitespace from all string values FIRST
            $row = array_map(function ($value) {
                return is_string($value) ? trim($value) : $value;
            }, $row);

            // Skip completely empty rows (all values are null or empty string after trimming)
            $hasData = false;
            foreach ($row as $value) {
                // Check if value is not empty and not just whitespace
                if ($value !== null && $value !== '' && $value !== 0) {
                    $hasData = true;
                    break;
                }
            }

            if (!$hasData) {
                // Skip this row silently (don't count as failed, don't increment row counter)
                return null;
            }

            // Increment row counter ONLY for rows with data
            $this->parent->currentRow++;

            // Check if program_area exists (required field)
            if (empty($row['program_area'])) {
                $this->parent->failed++;
                $this->parent->errors[] = "Row {$this->parent->currentRow}: Program Area is required";
                return null;
            }

            // Map columns based on header names
            $currency = Currency::firstOrCreate(
                ['name' => $row['currency'] ?? 'USD'],
                ['code' => $row['currency'] ?? 'USD']
            );

            $acquisitionType = null;
            if (!empty($row['acquisition_type'])) {
                $acquisitionType = AcquisitionType::firstOrCreate(
                    ['name' => $row['acquisition_type']],
                    ['description' => $row['acquisition_type']]
                );
            }

            $project = null;
            if (!empty($row['project'])) {
                $project = Project::firstOrCreate(
                    ['name' => $row['project']],
                    ['outline_no' => $row['project']]
                );
            }

            $donor = null;
            if (!empty($row['donor'])) {
                $donor = Donor::firstOrCreate(
                    ['name' => $row['donor']],
                    ['fad_number' => $row['donor']]
                );
            }

            $programArea = ProgramArea::firstOrCreate(
                ['name' => $row['program_area']],
                ['four_digit_code' => $row['program_area']]
            );

            $costCenter = null;
            if (!empty($row['cost_center'])) {
                $costCenter = CostCenter::firstOrCreate(
                    ['name' => $row['cost_center']],
                    ['description' => $row['cost_center']]
                );
            }

            // Auto-generate unique tag number (same format as AssetMutation)
            $lastAsset = Asset::query()->orderBy('created_at', 'desc')->first();
            $tagNumber = "ETH1-" . $programArea->four_digit_code . "-" . sprintf('%03d', ($lastAsset->id ?? 0) + 1);

            // Convert Excel date serial numbers to proper dates
            $acquisitionDate = $this->convertExcelDate($row['acquisition_date'] ?? null);
            $depreciationDate = $this->convertExcelDate($row['depreciation_date'] ?? null);
            $receiptDate = $this->convertExcelDate($row['receipt_date'] ?? null);

            $asset = Asset::create([
                'tag_number' => $tagNumber,
                'acquisition_date' => $acquisitionDate,
                'asset_type' => $row['asset_type'] ?? null,
                'item_name' => $row['item_name'] ?? null,
                'description' => $row['description'] ?? null,
                'serial_no' => $row['serial_no'] ?? null,
                'accessories' => $row['accessories'] ?? null,
                'acquisition_cost' => $row['acquisition_cost'] ?? null,
                'currency_id' => $currency->id,
                'depreciation_date' => $depreciationDate,
                'acquisition_type_id' => $acquisitionType->id ?? null,
                'purchase_order_no' => $row['purchase_order_no'] ?? null,
                'project_id' => $project->id ?? null,
                'gsrn_no' => $row['gsrn_no'] ?? null,
                'receipt_date' => $receiptDate,
                'donor_id' => $donor->id ?? null,
                'program_area_id' => $programArea->id,
                'cost_center_id' => $costCenter->id ?? null,
                'document_no' => $tagNumber,
                'created_by_id' => auth()->id(),
            ]);

            $this->parent->imported++;
            return $asset;
        } catch (\Exception $e) {
            $this->parent->failed++;
            $this->parent->errors[] = "Row {$this->parent->currentRow}: " . $e->getMessage();
            Log::error("Asset import row {$this->parent->currentRow} error: " . $e->getMessage());
            return null;
        }
    }

    public function onFailure(Failure ...$failures)
    {
        foreach ($failures as $failure) {
            $this->parent->failed++;
            $errorMessage = "Row {$failure->row()}: " . implode(', ', $failure->errors());
            $this->parent->errors[] = $errorMessage;
            Log::error("Asset import validation error: {$errorMessage}");
        }
    }
}
