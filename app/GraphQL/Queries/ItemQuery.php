<?php

namespace App\GraphQL\Queries;

use App\Models\GoodReceiveItem;
use App\Models\Item;
use App\Models\StockIssueItem;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;

final class ItemQuery
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        // TODO implement the resolver
    }

    public function binCard($_, array $args)
    {
        $goodReceiveItem = GoodReceiveItem::find($args['id']);
        Log::debug($goodReceiveItem);
        return [
            'stockIssueItems' => StockIssueItem::whereHas('stockRequestItem', function($query) use ($goodReceiveItem) {
                $query->where('id', $goodReceiveItem->id);
            })->get(),
            'goodReceiveItem' => $goodReceiveItem,
        ];
    }
}
