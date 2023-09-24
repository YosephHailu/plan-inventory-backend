<?php

namespace App\GraphQL\Mutations;

use App\Models\AssetDisposal;
use Illuminate\Support\Facades\Auth;

final class AssetDisposalMutation
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
            'date',
            'transfer_to',
            'accumulated_depreciation',
            'replacement_cost',
            'remark',
            'currency_id',
            'disposal_type_id',
            'disposal_reason_id',
            'asset_id',
            'approved_by_id',
            'created_by_id',
        ]);

        $data['created_by_id'] = Auth::Id();

        $asset = AssetDisposal::create($data->toArray());
        
        return $asset;
    }

}
