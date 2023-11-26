<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Exports\OnHandInventoryExport;
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

}
