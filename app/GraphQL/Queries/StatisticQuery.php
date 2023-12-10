<?php

namespace App\GraphQL\Queries;

use App\Models\Asset;
use App\Models\GoodReceive;
use App\Models\StockRequestItem;
use App\Models\StockIssueItem;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

final class StatisticQuery
{
    /**
     * @param  null  $_
     * @param  array{}  $args
     */
    public function __invoke($_, array $args)
    {
        // TODO implement the resolver
    }

    public function dashboardCount($_, array $args)
    {
        $response = collect([
            "total_assets" => 0,
            "total_available_assets" => 0,
            "total_disposed_assets" => 0,

            "total_items" => 0,
            "total_stock_request_items" => 0,
            "total_stock_issue_items" => 0,
        ]);

        $response['total_assets'] = Asset::count();
        $response['total_available_assets'] = Asset::where('disposed', '!=', true)->whereDoesntHave('assetCustodians', function($q) {
            return $q->where('returned', false);
        })->count();
        $response['total_disposed_assets'] = Asset::where('disposed', true)->count();

        $response['total_items'] = GoodReceive::count();
        $response['total_stock_request_items'] = StockRequestItem::count();
        $response['total_stock_issue_items'] = StockIssueItem::count();

        return $response;
    }


    public function assetCountByTypes($_, array $args)
    {
        $assets = Asset::select('asset_type', DB::raw('COUNT(*) as count'))
            ->groupBy('asset_type')
            ->get();
        return $assets;
    }

    // public function BuildingStatistics($_, array $args)
    // {
    //     $response = collect([
    //         "total_buildings" => 0,
    //         "total_apartments" => 0,
    //     ]);

    //     $response['total_apartments'] = Apartment::count();
    //     $response['total_buildings'] = Building::count();
    //     return $response;
    // }

    // public function ApartmentStatistics($_, array $args)
    // {
    //     $response = collect([
    //         "total_available_apartments" => 0,
    //         "total_on_hold_apartments" => 0,
    //         "total_soled_apartments" => 0,
    //         "total_apartments" => 0,
    //     ]);

    //     $response['total_available_apartments'] = Apartment::where([['on_hold', false], ['available', true]])->count();
    //     $response['total_on_hold_apartments'] = Apartment::where([['on_hold', true]])->count();
    //     $response['total_soled_apartments'] = Apartment::where([['available', false], ['on_hold', false]])->count();
    //     $response['total_apartments'] = Apartment::count();
    //     return $response;
    // }

    // public function ContractStatistics($_, array $args)
    // {
    //     $response = collect([
    //         "total_contracts" => 0,
    //         "total_contract_amount" => 0,
    //         "total_paid_amount" => 0,
    //         "total_remaining_amount" => 0,
    //     ]);

    //     $contract_paid = Payment::sum('amount');
    //     $contract_total = Contract::sum('amount');
    //     $response['total_contract_amount'] = $contract_total;
    //     $response['total_paid_amount'] = $contract_paid;
    //     $response['total_remaining_amount'] = $contract_total - $contract_paid;
    //     $response['total_contracts'] = Contract::count();
    //     return $response;
    // }

}
