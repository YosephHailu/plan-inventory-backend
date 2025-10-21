<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class StockRequestItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'designation_contact',
        'quantity',
        'description',
        'contact_detail',
        'good_receive_item_id',
        'stock_request_id',
        'destination_contact',
    ];

    /**
     * Get the stockRequest that owns the StockRequestItem
     */
    public function stockRequest(): BelongsTo
    {
        return $this->belongsTo(StockRequest::class, 'foreign_key', 'other_key');
    }

    /**
     * Get the goodReceiveItem that owns the StockRequestItem
     */
    public function goodReceiveItem(): BelongsTo
    {
        return $this->belongsTo(GoodReceiveItem::class);
    }

    /**
     * Get the stockIssueItems for the StockRequestItem
     */
    public function stockIssueItems(): HasMany
    {
        return $this->hasMany(StockIssueItem::class);
    }
}
