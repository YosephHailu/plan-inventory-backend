<?php

namespace App\GraphQL\Mutations;

use App\Models\GoodReceive;
use App\Models\GoodReceiveItem;
use App\Models\Item;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

final class GoodReceiveMutation
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
            'received_date',
            'remark',
            'received_by',
            'vendor_name',
            'vendor_id',
            'purchase_order_no',
            'invoice_no',
            'project',
            'where_house_id',
            'item_category_id',
            'batch_number',
            'project_id',
            'loading_number'
        ]);

        DB::beginTransaction();
        $data['reference_number'] = Str::random(5);
        $data['created_by_id'] = Auth::Id();
        $goodReceive = GoodReceive::create($data->toArray());
        
        foreach($args['goodReceiveItems'] as $goodReceiveItem) {
            $item = Item::find($goodReceiveItem['item_id']);
            $goodReceiveItem['good_receive_id'] = $goodReceive->id;
            $goodReceiveItem['balance_due'] = $goodReceiveItem['ordered_quantity'] - $goodReceiveItem['received_quantity'];

            $goodReceiveItem = GoodReceiveItem::create($goodReceiveItem);
        }
        DB::commit();

        return $goodReceive;
    }

    public function check($rootValue, array $args)
    {
        DB::beginTransaction();
        $goodReceive = GoodReceive::find($args['id']);
        $goodReceive->status = "CHECKED";
        $goodReceive->save();

        foreach($args['input'] as $_goodReceiveItem) {
            $goodReceiveItem = GoodReceiveItem::find($_goodReceiveItem['id']);
            $goodReceiveItem->checked_quantity = $_goodReceiveItem['checked_quantity'];
            $goodReceiveItem->checked_at = Carbon::now();
            $goodReceiveItem->checked_by_id = Auth::Id();
            $goodReceiveItem->checked = true;
            $goodReceiveItem->save();
        }

        DB::commit();
        return $goodReceive;
    }

    public function approve($rootValue, array $args)
    {
        DB::beginTransaction();
        $goodReceive = GoodReceive::find($args['id']);
        $goodReceive->status = "APPROVED";
        $goodReceive->save();

        foreach($args['input'] as $_goodReceiveItem) {
            $goodReceiveItem = GoodReceiveItem::find($_goodReceiveItem['id']);
            $goodReceiveItem->approved_quantity = $_goodReceiveItem['approved_quantity'];
            $goodReceiveItem->approved_at = Carbon::now();
            $goodReceiveItem->approved_by_id = Auth::Id();
            $goodReceiveItem->approved = true;
            $goodReceiveItem->save();
        }

        DB::commit();
        return $goodReceive;
    }

}
