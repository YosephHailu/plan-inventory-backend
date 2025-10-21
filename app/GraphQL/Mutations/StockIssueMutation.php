<?php

namespace App\GraphQL\Mutations;

use App\Models\GoodReceive;
use App\Models\GoodReceiveItem;
use App\Models\StockIssue;
use App\Models\StockIssueItem;
use App\Models\StockRequest;
use Carbon\Carbon;
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
            'from_where_house_id',
            'to_where_house_id',
        ]);

        $data['issuance_number'] = Str::upper(Str::random(5));
        $data['created_by_id'] = Auth::Id();
        DB::beginTransaction();
        $stockRequest = StockRequest::find($args['stock_request_id']);
        $stockRequest->status = 'ISSUED';
        $stockRequest->save();
        if ($stockRequest->stockIssue) {
            throw new Exception('STOCK_ISSUANCE_ALREADY_EXISTS!');
        }
        $stockIssue = StockIssue::create($data->toArray());

        foreach ($stockRequest->stockRequestItems()->where('approved', true)->get() as $stockRequestItem) {
            $stockRequestItem['stock_request_id'] = $stockRequest->id;
            StockIssueItem::create([
                'stock_request_item_id' => $stockRequestItem->id,
                'stock_issue_id' => $stockIssue->id,
                'quantity' => $stockRequestItem->quantity,
            ]);

            $goodReceiveItem = GoodReceiveItem::find($stockRequestItem->good_receive_item_id);
            $goodReceiveItem->balance_due = ($goodReceiveItem->balance_due - $stockRequestItem->quantity);
            $goodReceiveItem->save();
        }

        DB::commit();

        return $stockIssue;
    }

    public function approve($rootValue, array $args)
    {
        DB::beginTransaction();
        $stockIssue = StockIssue::find($args['id']);
        $stockIssue->status = 'APPROVED';
        $stockIssue->save();

        foreach ($args['input'] as $issuance) {
            $stockIssueItem = StockIssueItem::find($issuance['id']);
            $stockIssueItem->approved_at = Carbon::now();
            $stockIssueItem->approved_by_id = Auth::Id();
            $stockIssueItem->approved = true;
            $stockIssueItem->approved_quantity = $issuance['approved_quantity'];
            $stockIssueItem->save();

            $goodReceiveItem = GoodReceiveItem::find($stockIssueItem->stockRequestItem->good_receive_item_id);
            $goodReceiveItem->balance_due = ($goodReceiveItem->balance_due + $stockIssueItem->quantity);
            $goodReceiveItem->balance_due = ($goodReceiveItem->balance_due - $stockIssueItem->approved_quantity);
            $goodReceiveItem->save();
        }

        if ($goodReceiveItem ?? false) {
            $new_goodReceive = $goodReceiveItem->goodReceive->only([
                'received_date',
                'remark',
                'received_by',
                'vendor_name',
                'vendor_id',
                'purchase_order_no',
                'invoice_no',
                'project',
                'item_category_id',
                'batch_number',
                'project_id',
                'loading_number',
            ]);
            $new_goodReceive['created_by_id'] = Auth::Id();
            $new_goodReceive['where_house_id'] = $stockIssue->to_where_house_id;
            $new_goodReceive['reference_number'] = Str::random(10);
            $goodReceive = GoodReceive::create($new_goodReceive);

            $stockRequest = StockRequest::find($stockIssue->stock_request_id);

            foreach ($stockRequest->stockRequestItems()->where('approved', true)->get() as $stockRequestItem) {
                $goodReceiveItem = GoodReceiveItem::find($stockRequestItem->good_receive_item_id);

                $new_goodReceiveItem = $goodReceiveItem->only([
                    'unit_price',
                    'description',
                    'condition',
                    'expiry_date',
                    'comment',
                    'donor_id',
                    'item_id',
                    'condition_id',
                    'project_id',
                    'stock_type_id',
                    'unit_of_measurement_id',
                ]);

                $new_goodReceiveItem['ordered_quantity'] = $stockRequestItem->quantity;
                $new_goodReceiveItem['received_quantity'] = $stockRequestItem->quantity;
                $new_goodReceiveItem['balance_due'] = $stockRequestItem->quantity;
                $new_goodReceiveItem['good_receive_id'] = $goodReceive->id;

                GoodReceiveItem::create($new_goodReceiveItem);
            }
        }

        DB::commit();

        return $stockRequest;
    }
}
