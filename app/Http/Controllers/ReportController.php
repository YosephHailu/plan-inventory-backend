<?php

namespace App\Http\Controllers;

use App\Exports\AssetExport;
use App\Exports\AssetImportTemplateExport;
use App\Exports\AssetPhysicalCheckExport;
use App\Exports\DisposedAssetExport;
use App\Exports\OnHandInventoryExport;
use App\Exports\StockMovementExport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class ReportController extends Controller
{
    public function __construct()
    {
        ob_end_clean();
        ob_start();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function onHandInventoryReport(Request $request)
    {
        $filename = 'on-hand-items_' . date('Ymd_His') . '.xlsx';
        return Excel::download(new OnHandInventoryExport($request), $filename);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function stockMovementReport(Request $request)
    {
        $filename = 'stock-movement-report_' . date('Ymd_His') . '.xlsx';
        return Excel::download(new StockMovementExport($request), $filename);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function assetReport(Request $request)
    {
        $filename = 'asset-report_' . date('Ymd_His') . '.xlsx';
        return Excel::download(new AssetExport($request), $filename);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function disposedAssetReport(Request $request)
    {
        $filename = 'disposed-asset-report_' . date('Ymd_His') . '.xlsx';
        return Excel::download(new DisposedAssetExport($request), $filename);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function assetPhysicalCheckReport(Request $request)
    {
        $filename = 'asset-physical-check-report_' . date('Ymd_His') . '.xlsx';
        return Excel::download(new AssetPhysicalCheckExport($request), $filename);
    }

    /**
     * Download asset import template.
     */
    public function assetImportTemplate()
    {
        $filename = 'asset-import-template_' . date('Ymd_His') . '.xlsx';
        return Excel::download(new AssetImportTemplateExport(), $filename);
    }
}
