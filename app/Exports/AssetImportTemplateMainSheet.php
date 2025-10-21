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

                // Currency dropdown (Column H) - from Currencies sheet
                $this->addDropdownFromSheet($sheet, 'H2:H1000', 'Currencies');

                // Acquisition Type dropdown (Column J) - from Acquisition Types sheet
                $this->addDropdownFromSheet($sheet, 'J2:J1000', 'Acquisition Types');

                // Project dropdown (Column L) - from Projects sheet
                $this->addDropdownFromSheet($sheet, 'L2:L1000', 'Projects');

                // Donor dropdown (Column O) - from Donors sheet
                $this->addDropdownFromSheet($sheet, 'O2:O1000', 'Donors');

                // Program Area dropdown (Column P) - from Program Areas sheet
                $this->addDropdownFromSheet($sheet, 'P2:P1000', 'Program Areas');

                // Cost Center dropdown (Column Q) - from Cost Centers sheet
                $this->addDropdownFromSheet($sheet, 'Q2:Q1000', 'Cost Centers');
            },
        ];
    }

    private function addDropdown(Worksheet $sheet, string $range, array $options)
    {
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
        $validation->setFormula1('"'.implode(',', $options).'"');

        // Apply to entire range
        $sheet->setDataValidation($range, $validation);
    }

    private function addDropdownFromSheet(Worksheet $sheet, string $range, string $sheetName)
    {
        $validation = $sheet->getCell(explode(':', $range)[0])->getDataValidation();
        $validation->setType(DataValidation::TYPE_LIST);
        $validation->setErrorStyle(DataValidation::STYLE_INFORMATION);
        $validation->setAllowBlank(true);
        $validation->setShowInputMessage(true);
        $validation->setShowErrorMessage(true);
        $validation->setShowDropDown(true);
        $validation->setErrorTitle('Invalid Selection');
        $validation->setError('Please select a value from the dropdown list.');
        $validation->setPromptTitle('Select '.$sheetName);
        $validation->setPrompt('Choose from the dropdown list.');

        // Reference the other sheet - assuming max 1000 rows of reference data
        $formula = "'".$sheetName."'!\$A\$2:\$A\$1000";
        $validation->setFormula1($formula);

        // Apply to entire range
        $sheet->setDataValidation($range, $validation);
    }
}
