<?php

namespace App\GraphQL\Queries;

use App\Models\GoodReceiveItem;
use App\Models\StockIssueItem;
use Carbon\Carbon;

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
        $stockIssueItems = StockIssueItem::whereHas('stockRequestItem', function ($query) use ($goodReceiveItem) {
            $query->where('good_receive_item_id', $goodReceiveItem->id);
        });

        if (($args['date_from'] ?? false) && ($args['date_to'] ?? false)) {
            $stockIssueItems->whereBetween('created_at', [
                Carbon::parse($args['date_from'])->startOfDay(),
                Carbon::parse($args['date_to'])->endOfDay(),
            ]);
        }

        return [
            'stockIssueItems' => $stockIssueItems->get()->sortByDesc('created_at'),
            'goodReceiveItem' => $goodReceiveItem,
        ];
    }
}
