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
        ]);

        DB::beginTransaction();
        $data['reference_number'] = Str::random(5);
        $data['created_by_id'] = Auth::Id();
        $stockRequest = GoodReceive::create($data->toArray());
        
        foreach($args['goodReceiveItems'] as $goodReceiveItem) {
            $goodReceiveItem['good_receive_id'] = $stockRequest->id;
            $goodReceiveItem = GoodReceiveItem::create($goodReceiveItem);
            $item = Item::find($goodReceiveItem->item_id);
            $item->balance += $goodReceiveItem->received_quantity;
            $item->save();
        }
        DB::commit();

        return $stockRequest;
    }

}
