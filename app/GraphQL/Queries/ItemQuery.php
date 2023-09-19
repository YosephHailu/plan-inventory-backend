<?php

namespace App\GraphQL\Queries;

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
        $binCardLogs = collect([]);
        $item = Item::find($args['id']);
        foreach($item->stockIssueItems as $issuanceItem) {
            $binCardLogs->push([
                "issuance_number" => $issuanceItem->stockIssue->issuance_number,
                "issued_quantity" => $issuanceItem->quantity,
                "processed_by" => $issuanceItem->stockIssue->to,
                "processed_at" => Carbon::parse($issuanceItem->stockIssue->created_at)->format('M, d, Y'),
            ]);
        }
        foreach($item->goodReceiveItems as $receivedItem) {
            Log::debug($receivedItem);
            $binCardLogs->push([
                "reference_number" => $receivedItem->goodReceive->reference_number,
                "approved_quantity" => $receivedItem->approved_quantity,
                "processed_by" => $receivedItem->goodReceive->received_by,
                "processed_at" => Carbon::parse($receivedItem->goodReceive->created_at)->format('M, d, Y'),
            ]);
        }

        Log::debug($binCardLogs);

        return $binCardLogs->sortBy('processed_at');
    }
}
