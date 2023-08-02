<?php

namespace App\GraphQL\Mutations;

use App\Models\GoodReceive;
use App\Models\GoodReceiveItem;
use App\Models\Item;
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
            'where_house_id'
        ]);

        DB::beginTransaction();
        $data['reference_number'] = Str::random(5);
        $data['created_by_id'] = Auth::Id();
        $stockRequest = GoodReceive::create($data->toArray());
        
        foreach($args['goodReceiveItems'] as $goodReceiveItem) {
            $item = Item::find($goodReceiveItem['item_id']);
            $goodReceiveItem['good_receive_id'] = $stockRequest->id;
            $goodReceiveItem['balance_due'] = $item->balance ?? 0;

            $goodReceiveItem = GoodReceiveItem::create($goodReceiveItem);
            $item->balance += $goodReceiveItem->received_quantity;
            $item->save();
        }
        DB::commit();

        return $stockRequest;
    }

}
