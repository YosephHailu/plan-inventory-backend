<?php

namespace App\GraphQL\Mutations;

use App\Models\Asset;
use App\Models\AssetDisposal;
use Carbon\Carbon;
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

        $assetDisposal = AssetDisposal::create($data->toArray());

        $asset = Asset::find($args['asset_id']);
        $asset->disposed_by_id = Auth::Id();
        $asset->disposed_at = Carbon::now();
        $asset->disposed = true;
        $asset->save();

        return $assetDisposal;
    }
}
