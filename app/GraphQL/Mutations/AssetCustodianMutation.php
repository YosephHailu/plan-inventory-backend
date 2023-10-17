<?php

namespace App\GraphQL\Mutations;

use App\Models\Asset;
use App\Models\AssetCustodian;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

final class AssetCustodianMutation
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
            'staff_id',
            'remark',
            'asset_id',
        ]);

        $data['assigned_by_id'] = Auth::Id();
        $data['assigned_at'] = Carbon::now();

        $assetDisposal = AssetCustodian::create($data->toArray());
        
        return $assetDisposal;
    }

    public function returnAsset($rootValue, array $args)
    {
        $assetCustodian = Asset::find($args['id'])->assetCustodian();

        $data = collect();
        $data['returned_by_id'] = Auth::Id();
        $data['returned_at'] = Carbon::now();
        $data['returned'] = true;

        $assetCustodian->update($data->toArray());
        
        return Asset::find($args['id']);
    }

    public function approveAssetCustodian($rootValue, array $args)
    {
        $assetCustodian = AssetCustodian::find($args['id']);

        $data = collect();
        $data['approved_by_id'] = Auth::Id();
        $data['approved_at'] = Carbon::now();
        $data['approved'] = true;

        $assetCustodian->update($data->toArray());
        
        return $assetCustodian;
    }
}
