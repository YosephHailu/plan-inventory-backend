<?php

namespace App\Exports;

use App\Models\Asset;
use Illuminate\Support\Facades\Log;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Concerns\FromView;

class AssetExport implements  FromView
{
    protected Request $request;

    public function __construct($request) {
        $this->request = $request;
    }
    
    public function view(): View
    {
        Log::alert($this->request);
        $assets = Asset::query();

        if($this->request->search) {
            $value = $this->request->search;
            $assets->where('item_name', 'like', "%$value%")
                ->orWhere('tag_number', 'like', "%$value%");
        }

        if($this->request->available) {
            $assets->where('disposed', '!=', true)->whereDoesntHave('assetCustodians', function($q) {
                return $q->where('returned', false);
            });
        }
        if($this->request->program_area_id) {
            $assets->where('program_area_id', $this->request->program_area_id);
        }

        if($this->request->donor_id) {
            $assets->where('donor_id', $this->request->donor_id);
        }

        if($this->request->acquisition_type_id) {
            $assets->where('acquisition_type_id', $this->request->acquisition_type_id);
        }

        if($this->request->staff_id) {
            $value = $this->request->staff_id;
            $assets->whereHas('assetCustodians', function($q) use($value) {
                return $q->where('staff_id', $value)->where('returned', '!=', true);
            });
        }

        return view('reports.asset', [
            'assets' => $assets->orderByDesc('created_at')->get()
        ]);
    }
}
