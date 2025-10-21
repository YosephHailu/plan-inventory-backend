<?php

namespace App\GraphQL\Mutations;

use App\Models\AssetPhysicalCheck;
use Illuminate\Support\Facades\Auth;

final class AssetPhysicalCheckMutation
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
            'remark', 'asset_id', 'condition_id', 'checked_at',
        ]);

        $data['checked_by_id'] = Auth::Id();

        $assetPhysicalCheck = AssetPhysicalCheck::create($data->toArray());

        return $assetPhysicalCheck;
    }
}
