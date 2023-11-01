<?php

namespace App\GraphQL\Queries;

use App\Models\GoodReceiveItem;
use App\Models\Item;
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
            'stockRequestItems' => $goodReceiveItem->stockRequestItems()->where('approved', true)->whereHas('stockIssueItems')->get(),
            'goodReceiveItem' => $goodReceiveItem,
        ];
    }
}
