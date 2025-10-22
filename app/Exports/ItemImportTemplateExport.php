<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class ItemImportTemplateExport implements WithMultipleSheets
{
    public function sheets(): array
    {
        // Return only the main sheet for item import
        return [
            new ItemImportTemplateMainSheet()
        ];
    }
}
