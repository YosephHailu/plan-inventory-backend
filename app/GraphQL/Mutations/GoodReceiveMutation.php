<?php

namespace App\GraphQL\Mutations;

use App\Imports\GoodReceiveImport;
use App\Models\GoodReceive;
use App\Models\GoodReceiveItem;
use App\Models\Item;
use App\Models\StockRequestItem;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Session;

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
        $data['reference_number'] = Str::random(10);
        $data['created_by_id'] = Auth::Id();
        $data['where_house_id'] = Auth::user()->where_house_id ?? $data['where_house_id'];
        $goodReceive = GoodReceive::create($data->toArray());
        
        foreach($args['goodReceiveItems'] as $goodReceiveItem) {
            $item = Item::find($goodReceiveItem['item_id']);
            $goodReceiveItem['good_receive_id'] = $goodReceive->id;
            $goodReceiveItem['balance_due'] = $goodReceiveItem['received_quantity'];

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

    public function delete($rootValue, array $args)
    {
        $goodReceive = GoodReceive::find($args['id']);
        DB::beginTransaction();
            try {
                if(StockRequestItem::whereHas('goodReceiveItem', function($query) use ($goodReceive) {
                    return $query->where('good_receive_id', $goodReceive->id);
                })->exists()) {
                    throw new Exception("CAN'T DELETE RESOURCE!");
                }
                $goodReceive->goodReceiveItems()->delete();
                $goodReceive->delete();
            }catch(Exception $e) {
                throw new Exception("CAN'T DELETE RESOURCE!");
            }
        DB::commit();
        return $goodReceive;
    }

    public function import($rootValue, array $args)
    {
        if(GoodReceive::where('reference_number', $args['input']['grn'])->exists())
            throw new Exception("Already Imported!");
        $attachment = $args['input']['attachment'];

        $attachmentName = now().'good-receive.xlsx';

        // Store the attachment with the static name and return the path
        $path = $attachment->storeAs('public', $attachmentName);
        
        Session::put('reference_number', $args['input']['grn']);

        Excel::import(new GoodReceiveImport(), $path);

        return null;
    }

}
