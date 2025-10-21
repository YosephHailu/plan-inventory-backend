<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\WithColumnWidths;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Events\AfterSheet;
use PhpOffice\PhpSpreadsheet\Cell\DataValidation;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class AssetImportTemplateMainSheet implements FromArray, WithHeadings, WithStyles, WithTitle, WithColumnWidths, WithEvents
{
    private $currencies;
    private $acquisitionTypes;
    private $projects;
    private $donors;
    private $programAreas;
    private $costCenters;

    public function __construct(array $currencies, array $acquisitionTypes, array $projects, array $donors, array $programAreas, array $costCenters)
    {
        $this->currencies = $currencies;
        $this->acquisitionTypes = $acquisitionTypes;
        $this->projects = $projects;
        $this->donors = $donors;
        $this->programAreas = $programAreas;
        $this->costCenters = $costCenters;
    }

    public function array(): array
    {
        // Return empty rows for data entry (50 rows)
        return array_fill(0, 50, array_fill(0, count($this->headings()), ''));
    }

    public function headings(): array
    {
        return [
            'Acquisition Date',              // 1
            'Asset Type',                    // 2 - DROPDOWN
            'Item Name',                     // 3
            'Description',                   // 4
            'Serial No',                     // 5
            'Accessories',                   // 6
            'Acquisition Cost',              // 7
            'Currency',                      // 8 - DROPDOWN
            'Depreciation Date',             // 9
            'Acquisition Type',              // 10 - DROPDOWN
            'Purchase Order No',             // 11
            'Project',                       // 12 - DROPDOWN
            'GSRN No',                       // 13
            'Receipt Date',                  // 14
            'Donor',                         // 15 - DROPDOWN
            'Program Area',                  // 16 - DROPDOWN (Required)
            'Cost Center',                   // 17 - DROPDOWN
        ];
    }

    public function styles(Worksheet $sheet)
    {
        return [
            1 => [
                'font' => ['bold' => true, 'size' => 14, 'color' => ['rgb' => 'ffffff']],
                'fill' => [
                    'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                    'startColor' => ['rgb' => '42a5f5'],
                ],
            ],
        ];
    }

    public function title(): string
    {
        return 'Asset Import';
    }

    public function columnWidths(): array
    {
        return [
            'A' => 30, // Acquisition Date
            'B' => 30, // Asset Type
            'C' => 30, // Item Name
            'D' => 30, // Description
            'E' => 30, // Serial No
            'F' => 30, // Accessories
            'G' => 30, // Acquisition Cost
            'H' => 30, // Currency
            'I' => 30, // Depreciation Date
            'J' => 30, // Acquisition Type
            'K' => 30, // Purchase Order No
            'L' => 30, // Project
            'M' => 30, // GSRN No
            'N' => 30, // Receipt Date
            'O' => 30, // Donor
            'P' => 30, // Program Area
            'Q' => 30, // Cost Center
        ];
    }

    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                $sheet = $event->sheet->getDelegate();

                // Asset Type dropdown (Column B)
                $assetTypes = ['Capital', 'Low Value', 'Grant Fund', 'Furniture Fittings Fixtures'];
                $this->addDropdown($sheet, 'B2:B1000', $assetTypes);

                // Currency dropdown (Column H)
                $this->addDropdown($sheet, 'H2:H1000', $this->currencies);

                // Acquisition Type dropdown (Column J)
                $this->addDropdown($sheet, 'J2:J1000', $this->acquisitionTypes);

                // Project dropdown (Column L)
                $this->addDropdown($sheet, 'L2:L1000', $this->projects);

                // Donor dropdown (Column O)
                $this->addDropdown($sheet, 'O2:O1000', $this->donors);

                // Program Area dropdown (Column P)
                $this->addDropdown($sheet, 'P2:P1000', $this->programAreas);

                // Cost Center dropdown (Column Q)
                $this->addDropdown($sheet, 'Q2:Q1000', $this->costCenters);
            },
        ];
    }

    private function addDropdown(Worksheet $sheet, string $range, array $options)
    {
        // Skip if no options available
        if (empty($options)) {
            return;
        }

        $validation = $sheet->getCell(explode(':', $range)[0])->getDataValidation();
        $validation->setType(DataValidation::TYPE_LIST);
        $validation->setErrorStyle(DataValidation::STYLE_INFORMATION);
        $validation->setAllowBlank(true);
        $validation->setShowInputMessage(true);
        $validation->setShowErrorMessage(true);
        $validation->setShowDropDown(true);
        $validation->setErrorTitle('Invalid Selection');
        $validation->setError('Please select a value from the dropdown list.');
        $validation->setPromptTitle('Select Value');
        $validation->setPrompt('Choose from the dropdown list.');
        $validation->setFormula1('"' . implode(',', $options) . '"');

        // Apply to entire range
        $sheet->setDataValidation($range, $validation);
    }
}
