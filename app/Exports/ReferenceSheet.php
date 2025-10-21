<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\WithColumnWidths;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Concerns\WithTitle;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class ReferenceSheet implements FromArray, WithHeadings, WithStyles, WithTitle, WithColumnWidths
{
    private $title;

    private $data;

    public function __construct(string $title, array $data)
    {
        $this->title = $title;
        $this->data = $data;
    }

    public function array(): array
    {
        // Convert flat array to array of arrays for Excel
        return array_map(function ($item) {
            return [$item];
        }, $this->data);
    }

    public function headings(): array
    {
        return [$this->title];
    }

    public function styles(Worksheet $sheet)
    {
        return [
            1 => [
                'font' => ['bold' => true, 'size' => 12],
                'fill' => [
                    'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                    'startColor' => ['rgb' => 'D9E1F2'],
                ],
            ],
        ];
    }

    public function title(): string
    {
        return $this->title;
    }

    public function columnWidths(): array
    {
        return [
            'A' => 30,
        ];
    }
}
