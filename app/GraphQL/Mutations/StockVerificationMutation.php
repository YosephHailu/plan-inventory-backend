<?php

namespace App\GraphQL\Mutations;

use App\Models\StockVerification;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

final class StockVerificationMutation
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
        Log::debug($args);

        $data = collect($args)->only([
            'quantity',
            'remarks',
            'good_receive_item_id',
            'condition_id',
        ]);

        DB::beginTransaction();
        $data['verified_by_id'] = Auth::Id();
        $stockVerification = StockVerification::create($data->toArray());

        DB::commit();

        return $stockVerification;
    }
}
