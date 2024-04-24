<?php

namespace App\GraphQL\Mutations;

use App\Imports\AssetImport;
use App\Models\Asset;
use App\Models\ProgramArea;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use Maatwebsite\Excel\Facades\Excel;

final class AssetMutation
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
            'asset_type',
            'item_name',
            'acquisition_date',
            'serial_no',
            'description',
            'accessories',
            'acquisition_cost',
            'purchase_order_no',
            'gsrn_no',
            'receipt_date',
            'depreciation_date',
            'po_no',
            'cost_center',
            'document_no',
            'currency_id',
            'acquisition_type_id',
            'program_area_id',
            'donor_id',
            'project_id',
            'cost_center_id'
        ]);

        $lastAsset = Asset::query()->orderBy('created_at', 'desc')->first();
        $programArea = ProgramArea::find($args['program_area_id']);
        $data['tag_number'] = "ETH1-" . $programArea->four_digit_code . "-" . sprintf('%03d', ($lastAsset->id ?? 0) + 1);
        $data['created_by_id'] = Auth::Id();

        $asset = Asset::create($data->toArray());
        
        return $asset;
    }

    public function update($rootValue, array $args)
    {
        $data = collect($args)->only([
            'asset_type',
            'item_name',
            'acquisition_date',
            'serial_no',
            'description',
            'accessories',
            'acquisition_cost',
            'purchase_order_no',
            'gsrn_no',
            'receipt_date',
            'depreciation_date',
            'po_no',
            'cost_center',
            'document_no',
            'currency_id',
            'acquisition_type_id',
            'program_area_id',
            'donor_id',
            'project_id',
            'cost_center_id'
        ]);

        $asset = Asset::find($args['id']);
        $asset->update($data->toArray());

        return $asset;
    }

    public function import($rootValue, array $args)
    {
        $file = $args['file'];

        // Define the static file name and extension
        $fileName = 'asset.xlsx';

        // Store the file with the static name and return the path
        $path = $file->storeAs('public', $fileName);
        
        return Excel::import(new AssetImport(), $path);
    }
}
