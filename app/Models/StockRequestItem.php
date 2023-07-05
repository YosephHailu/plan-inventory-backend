<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class StockRequestItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'designation_contact', 
        'quantity',
        'description',
        'contact_detail',
        'item_id',
        'stock_request_id'
    ];

    /**
     * Get the stockRequest that owns the StockRequestItem
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function stockRequest(): BelongsTo
    {
        return $this->belongsTo(StockRequest::class, 'foreign_key', 'other_key');
    }

    /**
     * Get the item that owns the StockRequestItem
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function item(): BelongsTo
    {
        return $this->belongsTo(Item::class);
    }
}
