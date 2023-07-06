<?php

namespace App\GraphQL\Mutations;

use App\Models\Item;
use Illuminate\Support\Facades\Auth;

final class ItemMutation
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
            "name",
            "description",
            "expire_date",
            "unit_of_measurement_id",
            "item_category_id",
            "office_location_id",
            "where_house_id",
            "stock_type_id",
            "department_id",
            "beginning_balance",
            "donor_id",
            "lot_number_id"
        ]);

        $lastItem = Item::query()->orderBy('created_at', 'desc')->first();
        $data['stock_card_number'] = "ITM-".sprintf('%03d', ($lastItem->id ?? 0) + 1);
        $data['created_by_id'] = Auth::Id();
        $data['balance'] = $args['beginning_balance'];

        $item = Item::create($data->toArray());
        
        return $item;
    }

    public function update($rootValue, array $args)
    {
        $data = collect($args)->only([
            "name",
            "description",
            "expire_date",
            "unit_of_measurement_id",
            "item_category_id",
            "office_location_id",
            "where_house_id",
            "stock_type_id",
            "department_id",
            "donor_id"
        ]);

        $item = Item::find($args['id']);
        $item->update($data->toArray());

        return $item;
    }
}
