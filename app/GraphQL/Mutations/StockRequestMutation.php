<?php

namespace App\GraphQL\Mutations;

use App\Models\Item;
use App\Models\StockRequest;
use App\Models\StockRequestItem;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

final class StockRequestMutation
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
            'reference_no',
            'requested_date',
            'requester_name',
            'contact_detail',
            'office_location_id',
            'where_house_id',
            'department_id',
            'checked_by_id',
            'approved_by_id'
        ]);

        DB::beginTransaction();
        $stockRequest = StockRequest::create($data->toArray());
        
        foreach($args['stockRequestItems'] as $stockRequestItem) {
            $stockRequestItem['stock_request_id'] = $stockRequest->id;
            $stockRequestItem = StockRequestItem::create($stockRequestItem);
            // $item = Item::find($stockRequestItem->item_id);
            // $item->balance += $stockRequestItem->amount;
            // $item->save();
        }
        DB::commit();

        return $stockRequest;
    }

}
