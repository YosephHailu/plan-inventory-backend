<?php

namespace App\GraphQL\Mutations;

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
}
