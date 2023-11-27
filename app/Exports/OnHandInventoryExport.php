<?php

namespace App\Exports;

use App\Models\GoodReceiveItem;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;

class OnHandInventoryExport implements FromView
{
    protected Request $request;

    public function __construct($request) {
        $this->request = $request;
    }
    
    public function view(): View
    {
        Log::alert($this->request);
        $goodReceiveItems = GoodReceiveItem::where('approved', true);

        if($this->request->search) {
            $value = $this->request->search;
            $goodReceiveItems->WhereHas('item', function($q) use($value) {
                return $q->where('name', 'like', "%$value%");
            })->orWhereHas('goodReceive', function($q) use($value) {
                return $q->where('loading_number', 'like', "%$value%");
            })->orWhere('id', $value)->orWhere('description', 'like', "%$value%");
        }

        if($this->request->where_house_id) {
            $value = $this->request->where_house_id;
            $goodReceiveItems->whereHas('goodReceive', function($q) use($value) {
                return $q->where('where_house_id', $value);
            });
        }

        if($this->request->project_id) {
            $goodReceiveItems->where('project_id', $this->request->project_id);
        }

        if($this->request->donor_id) {
            $goodReceiveItems->where('donor_id', $this->request->donor_id);
        }

        if($this->request->stock_type_id) {
            $goodReceiveItems->where('stock_type_id', $this->request->stock_type_id);
        }

        return view('reports.stock_on_hand', [
            'goodReceiveItems' => $goodReceiveItems->get()
        ]);
    }
}
