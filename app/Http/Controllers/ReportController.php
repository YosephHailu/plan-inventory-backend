<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exports\OnHandInventoryExport;
use App\Exports\StockMovementExport;
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
        return Excel::download(new OnHandInventoryExport($request), 'invoices.xlsx');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function stockMovementReport(Request $request)
    {
        return Excel::download(new StockMovementExport($request), 'movement-report.xlsx');
    }

}
