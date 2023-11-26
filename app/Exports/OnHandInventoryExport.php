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
        $goodReceiveItems = GoodReceiveItem::query();

        if($this->request->search) {
            $value = $this->request->search;
            $goodReceiveItems->WhereHas('item', function($q) use($value) {
                return $q->where('name', 'like', "%$value%");
            })->orWhereHas('goodReceive', function($q) use($value) {
                return $q->where('loading_number', 'like', "%$value%");
            })->orWhere('id', $value)->orWhere('description', 'like', "%$value%");
        }

        return view('reports.stock_on_hand', [
            'goodReceiveItems' => $goodReceiveItems->get()
        ]);
    }
}
