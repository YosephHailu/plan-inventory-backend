<?php

namespace App\GraphQL\Mutations;

use App\Models\GoodReceiveItem;
use App\Models\Item;
use App\Models\StockIssue;
use App\Models\StockRequest;
use App\Models\StockRequestItem;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

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
            'approved_by_id',
        ]);

        DB::beginTransaction();

        // VALIDATE INVENTORY AVAILABILITY BEFORE CREATING REQUEST
        foreach ($args['stockRequestItems'] as $stockRequestItemData) {
            if (isset($stockRequestItemData['good_receive_item_id'])) {
                $goodReceiveItem = GoodReceiveItem::find($stockRequestItemData['good_receive_item_id']);

                if (!$goodReceiveItem) {
                    DB::rollBack();
                    throw new Exception("INVALID_ITEM: The selected inventory item does not exist.");
                }

                // Check if sufficient inventory exists
                if ($goodReceiveItem->balance_due < $stockRequestItemData['quantity']) {
                    DB::rollBack();
                    $itemName = $goodReceiveItem->item->name ?? 'Unknown Item';
                    throw new Exception(
                        "INSUFFICIENT_INVENTORY: Item '{$itemName}' has only {$goodReceiveItem->balance_due} available, but {$stockRequestItemData['quantity']} requested."
                    );
                }
            }
        }

        $data['created_by_id'] = Auth::Id();
        $data['where_house_id'] = Auth::user()->where_house_id ?? $data['where_house_id'];
        $stockRequest = StockRequest::create($data->toArray());

        foreach ($args['stockRequestItems'] as $stockRequestItem) {
            $stockRequestItem['stock_request_id'] = $stockRequest->id;
            $stockRequestItem = StockRequestItem::create($stockRequestItem);
        }
        DB::commit();

        return $stockRequest;
    }

    public function check($rootValue, array $args)
    {
        DB::beginTransaction();

        // VALIDATE INVENTORY AVAILABILITY BEFORE CHECKING
        foreach ($args['input'] as $stockRequestItemId) {
            $stockRequestItem = StockRequestItem::find($stockRequestItemId);

            if ($stockRequestItem && $stockRequestItem->good_receive_item_id) {
                $goodReceiveItem = GoodReceiveItem::find($stockRequestItem->good_receive_item_id);

                if (!$goodReceiveItem) {
                    DB::rollBack();
                    throw new Exception("INVALID_ITEM: The inventory item no longer exists.");
                }

                // Check if sufficient inventory exists
                if ($goodReceiveItem->balance_due < $stockRequestItem->quantity) {
                    DB::rollBack();
                    $itemName = $goodReceiveItem->item->name ?? 'Unknown Item';
                    throw new Exception(
                        "INSUFFICIENT_INVENTORY: Item '{$itemName}' has only {$goodReceiveItem->balance_due} available, but {$stockRequestItem->quantity} requested. Cannot check this request."
                    );
                }
            }
        }

        $stockRequest = StockRequest::find($args['id']);
        $stockRequest->status = 'CHECKED';
        $stockRequest->save();

        foreach ($args['input'] as $stockRequestItemId) {
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

        // VALIDATE INVENTORY AVAILABILITY BEFORE APPROVAL
        foreach ($args['input'] as $stockRequestItemId) {
            $stockRequestItem = StockRequestItem::find($stockRequestItemId);

            if ($stockRequestItem && $stockRequestItem->good_receive_item_id) {
                $goodReceiveItem = GoodReceiveItem::find($stockRequestItem->good_receive_item_id);

                if (!$goodReceiveItem) {
                    DB::rollBack();
                    throw new Exception("INVALID_ITEM: The inventory item no longer exists.");
                }

                // Check if sufficient inventory exists
                if ($goodReceiveItem->balance_due < $stockRequestItem->quantity) {
                    DB::rollBack();
                    $itemName = $goodReceiveItem->item->name ?? 'Unknown Item';
                    throw new Exception(
                        "INSUFFICIENT_INVENTORY: Item '{$itemName}' has only {$goodReceiveItem->balance_due} available, but {$stockRequestItem->quantity} requested. Cannot approve this request."
                    );
                }
            }
        }

        $stockRequest = StockRequest::find($args['id']);
        $stockRequest->status = 'APPROVED';
        $stockRequest->save();

        foreach ($args['input'] as $stockRequestItemId) {
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
        $stockRequest->status = 'REJECTED';
        $stockRequest->rejected_at = Carbon::now();
        $stockRequest->rejected_by_id = Auth::Id();
        $stockRequest->rejected = true;
        $stockRequest->save();
        DB::commit();

        return $stockRequest;
    }

    public function delete($rootValue, array $args)
    {
        $stockRequest = StockRequest::find($args['id']);
        DB::beginTransaction();
        try {
            if (StockIssue::where('stock_request_id', $stockRequest->id)->exists()) {
                throw new Exception("CAN'T DELETE RESOURCE!");
            }
            $stockRequest->stockRequestItems()->delete();
            $stockRequest->delete();
        } catch (Exception $e) {
            throw new Exception("CAN'T DELETE RESOURCE!");
        }
        DB::commit();

        return $stockRequest;
    }
}
