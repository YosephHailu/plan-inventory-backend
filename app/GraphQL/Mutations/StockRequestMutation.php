<?php

namespace App\GraphQL\Mutations;

use App\Models\StockRequest;
use Illuminate\Support\Facades\Log;

final class StockRequestMutation
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
            'reference_no',
            'requested_date',
            'requester_name',
            'contact_detail',
            'office_location_id',
            'where_house_id',
            'department_id',
            'checked_by_id',
            'approved_by_id'
        ]);

        $stockRequest = StockRequest::create($data->toArray());
        
        return $stockRequest;
    }

}
