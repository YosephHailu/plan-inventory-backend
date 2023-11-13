<?php

namespace App\GraphQL\Mutations;

use App\Models\Item;
use App\Models\StockRequest;
use App\Models\StockRequestItem;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
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
        $data['created_by_id'] = Auth::Id();
        $data['where_house_id'] = Auth::user()->where_house_id ?? $data['where_house_id'];
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

    public function check($rootValue, array $args)
    {
        DB::beginTransaction();
        $stockRequest = StockRequest::find($args['id']);
        $stockRequest->status = "CHECKED";
        $stockRequest->save();

        foreach($args['input'] as $stockRequestItemId) {
            $stockRequestItem = StockRequestItem::find($stockRequestItemId);
            $stockRequestItem->checked_at = Carbon::now();
            $stockRequestItem->checked_by_id = Auth::Id();
            $stockRequestItem->checked = true;
            $stockRequestItem->save();
        }

        DB::commit();
        return $stockRequest;
    }

    public function approve($rootValue, array $args)
    {
        DB::beginTransaction();
        $stockRequest = StockRequest::find($args['id']);
        $stockRequest->status = "APPROVED";
        $stockRequest->save();

        foreach($args['input'] as $stockRequestItemId) {
            $stockRequestItem = StockRequestItem::find($stockRequestItemId);
            $stockRequestItem->approved_at = Carbon::now();
            $stockRequestItem->approved_by_id = Auth::Id();
            $stockRequestItem->approved = true;
            $stockRequestItem->save();
        }

        DB::commit();
        return $stockRequest;
    }

    public function reject($rootValue, array $args)
    {
        DB::beginTransaction();
        $stockRequest = StockRequest::find($args['id']);
        $stockRequest->status = "REJECTED";
        $stockRequest->rejected_at = Carbon::now();
        $stockRequest->rejected_by_id = Auth::Id();
        $stockRequest->rejected = true;
        $stockRequest->save();
        DB::commit();
        return $stockRequest;
    }
}
