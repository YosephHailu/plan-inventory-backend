<?php

namespace App\Exports;

use App\Models\AssetPhysicalCheck;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Concerns\FromView;

class AssetPhysicalCheckExport implements FromView
{
    protected Request $request;

    public function __construct($request)
    {
        $this->request = $request;
    }

    public function view(): View
    {
        $physicalChecks = AssetPhysicalCheck::query();

        if ($this->request->search) {
            $value = $this->request->search;
            $physicalChecks->where('item_name', 'like', "%$value%")
                ->orWhere('tag_number', 'like', "%$value%");
        }

        if ($this->request->available) {
            $physicalChecks->where('disposed', '!=', true)->whereDoesntHave('assetCustodians', function ($q) {
                return $q->where('returned', false);
            });
        }
        if ($this->request->staff_id) {
            $value = $this->request->staff_id;
            $physicalChecks->whereHas('assetCustodians', function ($q) use ($value) {
                return $q->where('staff_id', $value)->where('returned', '!=', true);
            });
        }

        return view('reports.asset_physical_check', [
            'physicalChecks' => $physicalChecks->orderByDesc('created_at')->get(),
        ]);
    }
}
