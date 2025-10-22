<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\WithColumnWidths;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Concerns\WithTitle;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class ItemImportTemplateMainSheet implements FromArray, WithHeadings, WithStyles, WithTitle, WithColumnWidths
{
    public function array(): array
    {
        // Return empty rows for data entry (50 rows)
        return array_fill(0, 50, array_fill(0, count($this->headings()), ''));
    }

    public function headings(): array
    {
        return [
            'Name',           // Required
            'Item Code',      // Required
            'Description',    // Optional
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
        return 'Item Import';
    }

    public function columnWidths(): array
    {
        return [
            'A' => 30, // Name
            'B' => 30, // Item Code
            'C' => 50, // Description
        ];
    }
}
