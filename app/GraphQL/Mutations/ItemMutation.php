<?php

namespace App\GraphQL\Mutations;

use App\Imports\ItemImport;
use App\Models\Item;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Facades\Excel;

final class ItemMutation
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        // TODO implement the resolver
    }

    public function store($rootValue, array $args)
    {
        $data = collect($args)->only([
            'name',
            'description',
            'item_code',
        ]);

        $data['created_by_id'] = Auth::Id();

        $item = Item::create($data->toArray());

        return $item;
    }

    public function update($rootValue, array $args)
    {
        $data = collect($args)->only([
            'name',
            'description',
            'item_code',
        ]);

        $item = Item::find($args['id']);
        $item->update($data->toArray());

        return $item;
    }

    public function import($rootValue, array $args)
    {
        try {
            $file = $args['file'];

            // Define the static file name and extension
            $fileName = 'item_import_' . time() . '.xlsx';

            // Store the file with the static name and return the path
            $path = $file->storeAs('imports', $fileName);

            // Create import instance to track statistics
            $import = new ItemImport();

            // Perform the import (only processes first sheet due to WithMultipleSheets)
            Excel::import($import, $path);

            $totalRows = $import->imported + $import->failed;
            $message = $import->failed > 0
                ? "Import completed with {$import->failed} errors. {$import->imported} items imported successfully."
                : "All items imported successfully! Total: {$import->imported}";

            return [
                'success' => $import->failed == 0,
                'message' => $message,
                'stats' => [
                    'total_rows' => $totalRows,
                    'imported' => $import->imported,
                    'failed' => $import->failed,
                    'errors' => $import->errors,
                ],
            ];
        } catch (\Exception $e) {
            return [
                'success' => false,
                'message' => "Import failed: {$e->getMessage()}",
                'stats' => [
                    'total_rows' => 0,
                    'imported' => 0,
                    'failed' => 0,
                    'errors' => [$e->getMessage()],
                ],
            ];
        }
    }
}
