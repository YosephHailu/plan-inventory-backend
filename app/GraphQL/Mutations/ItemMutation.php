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
            "item_code"
        ]);

        $data['created_by_id'] = Auth::Id();

        $item = Item::create($data->toArray());
        
        return $item;
    }

    public function update($rootValue, array $args)
    {
        $data = collect($args)->only([
            "name",
            "description",
            "item_code"
        ]);

        $item = Item::find($args['id']);
        $item->update($data->toArray());

        return $item;
    }
}
