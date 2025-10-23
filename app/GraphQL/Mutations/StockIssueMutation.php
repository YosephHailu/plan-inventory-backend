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

        if ($stockRequest->stockIssue) {
            DB::rollBack();
            throw new Exception('STOCK_ISSUANCE_ALREADY_EXISTS!');
        }

        // VALIDATE INVENTORY AVAILABILITY BEFORE ISSUING
        foreach ($stockRequest->stockRequestItems()->where('approved', true)->get() as $stockRequestItem) {
            if ($stockRequestItem->good_receive_item_id) {
                $goodReceiveItem = GoodReceiveItem::find($stockRequestItem->good_receive_item_id);

                if (!$goodReceiveItem) {
                    DB::rollBack();
                    throw new Exception("INVALID_ITEM: The inventory item no longer exists.");
                }

                // Check if sufficient inventory exists to prevent negative balance
                if ($goodReceiveItem->balance_due < $stockRequestItem->quantity) {
                    DB::rollBack();
                    $itemName = $goodReceiveItem->item->name ?? 'Unknown Item';
                    throw new Exception(
                        "INSUFFICIENT_INVENTORY: Cannot issue stock. Item '{$itemName}' has only {$goodReceiveItem->balance_due} available, but {$stockRequestItem->quantity} requested."
                    );
                }
            }
        }

        $stockRequest->status = 'ISSUED';
        $stockRequest->save();
        $stockIssue = StockIssue::create($data->toArray());

        foreach ($stockRequest->stockRequestItems()->where('approved', true)->get() as $stockRequestItem) {
            $stockRequestItem['stock_request_id'] = $stockRequest->id;
            StockIssueItem::create([
                'stock_request_item_id' => $stockRequestItem->id,
                'stock_issue_id' => $stockIssue->id,
                'quantity' => $stockRequestItem->quantity,
            ]);

            $goodReceiveItem = GoodReceiveItem::find($stockRequestItem->good_receive_item_id);
            // Safe to deduct now after validation
            $goodReceiveItem->balance_due = ($goodReceiveItem->balance_due - $stockRequestItem->quantity);
            $goodReceiveItem->save();
        }

        DB::commit();

        return $stockIssue;
    }

    public function approve($rootValue, array $args)
    {
        DB::beginTransaction();

        // VALIDATE INVENTORY ADJUSTMENTS TO PREVENT NEGATIVE BALANCE
        foreach ($args['input'] as $issuance) {
            $stockIssueItem = StockIssueItem::find($issuance['id']);
            $goodReceiveItem = GoodReceiveItem::find($stockIssueItem->stockRequestItem->good_receive_item_id);

            if (!$goodReceiveItem) {
                DB::rollBack();
                throw new Exception("INVALID_ITEM: The inventory item no longer exists.");
            }

            // Calculate the net change (adding back original quantity, then deducting approved quantity)
            $netChange = $stockIssueItem->quantity - $issuance['approved_quantity'];
            $newBalance = $goodReceiveItem->balance_due + $netChange;

            // Check if the new balance would be negative
            if ($newBalance < 0) {
                DB::rollBack();
                $itemName = $goodReceiveItem->item->name ?? 'Unknown Item';
                throw new Exception(
                    "INSUFFICIENT_INVENTORY: Cannot approve. Item '{$itemName}' would have negative balance. Current balance: {$goodReceiveItem->balance_due}, Approved quantity: {$issuance['approved_quantity']}"
                );
            }
        }

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
            // Add back the originally deducted quantity
            $goodReceiveItem->balance_due = ($goodReceiveItem->balance_due + $stockIssueItem->quantity);
            // Deduct the approved quantity
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
