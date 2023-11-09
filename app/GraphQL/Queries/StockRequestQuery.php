<?php

namespace App\GraphQL\Queries;

use App\Models\StockRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

final class StockRequestQuery
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        // TODO implement the resolver
    }

    public function myStockRequests($_, array $args)
    {
        $requests = StockRequest::where('created_by_id', Auth::id())->get();
        Log::debug($requests);
        return $requests;
    }
}
