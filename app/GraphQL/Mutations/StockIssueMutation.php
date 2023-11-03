<?php

namespace App\GraphQL\Mutations;

use App\Models\GoodReceiveItem;
use App\Models\StockIssue;
use App\Models\StockIssueItem;
use App\Models\StockRequest;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

final class StockIssueMutation
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
            'transport_mode',
            'date',
            'transported_by',
            'rate_of_charge',
            'remark',
            'from',
            'to',
            'waybill',
            'stock_request_id',
        ]);

        $data['issuance_number'] = Str::upper(Str::random(5));
        $data['created_by_id'] = Auth::Id();
        DB::beginTransaction();
        $stockRequest = StockRequest::find($args['stock_request_id']);
        $stockRequest->status = "ISSUED";
        $stockRequest->save();
        if($stockRequest->stockIssue) {
            throw new Exception("STOCK_ISSUANCE_ALREADY_EXISTS!");
        }
        $stockIssue = StockIssue::create($data->toArray());
        
        foreach($stockRequest->stockRequestItems()->where('approved', true)->get() as $stockRequestItem) {
            $stockRequestItem['stock_request_id'] = $stockRequest->id;
            StockIssueItem::create([
                'stock_request_item_id' => $stockRequestItem->id,
                'stock_issue_id' => $stockIssue->id,
                'quantity' => $stockRequestItem->quantity
            ]);

            $goodReceiveItem = GoodReceiveItem::find($stockRequestItem->good_receive_item_id);
            $goodReceiveItem->balance_due = ($goodReceiveItem->balance_due - $stockRequestItem->quantity);
            $goodReceiveItem->save();
        }
        DB::commit();

        return $stockIssue;
    }

}
