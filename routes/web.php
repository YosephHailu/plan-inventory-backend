<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('on-hand-inventory-report', [App\Http\Controllers\ReportController::class, 'onHandInventoryReport']);
Route::get('stock-movement-report', [App\Http\Controllers\ReportController::class, 'stockMovementReport']);
Route::get('asset-report', [App\Http\Controllers\ReportController::class, 'assetReport']);
Route::get('disposed-asset-report', [App\Http\Controllers\ReportController::class, 'disposedAssetReport']);
Route::get('asset-physical-check-report', [App\Http\Controllers\ReportController::class, 'assetPhysicalCheckReport']);

Route::get('/', function () {
    return view('welcome');
});

Route::get('/sync', function () {
    $all_users = DB::table('categories')->join('service_cities', 'service_cities.id', '=', 'users.service_city')->get();

    return $all_users;
    // Log::debug(DB::table('users')->get());
});

Route::fallback(function () {
    $path = request()->path();
    return redirect('/#' . ($path ? '/' . $path : ''));
});
