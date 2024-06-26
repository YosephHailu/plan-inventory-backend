<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exports\OnHandInventoryExport;
use App\Exports\DisposedAssetExport;
use App\Exports\StockMovementExport;
use App\Exports\AssetPhysicalCheckExport;
use App\Exports\AssetExport;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Facades\Excel;

class ReportController extends Controller
{
    public function __construct() {
        ob_end_clean(); 
        ob_start();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function onHandInventoryReport(Request $request)
    {
        return Excel::download(new OnHandInventoryExport($request), 'on-hand-items.xlsx');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function stockMovementReport(Request $request)
    {
        return Excel::download(new StockMovementExport($request), 'movement-report.xlsx');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function assetReport(Request $request)
    {
        return Excel::download(new AssetExport($request), 'asset-report.xlsx');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function disposedAssetReport(Request $request)
    {
        return Excel::download(new DisposedAssetExport($request), 'disposed-asset-report.xlsx');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function assetPhysicalCheckReport(Request $request)
    {
        return Excel::download(new AssetPhysicalCheckExport($request), 'asset-physical-check-report.xlsx');
    }
}
