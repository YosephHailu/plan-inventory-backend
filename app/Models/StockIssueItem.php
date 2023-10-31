<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class StockIssueItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'quantity',
        'description',
        'checked_by_id',
        'stock_issue_id',
        'stock_request_item_id',
        'good_receive_item_id'
    ];

    /**
     * Get the stockIssue that owns the StockIssueItem
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function stockIssue(): BelongsTo
    {
        return $this->belongsTo(StockIssue::class);
    }

    /**
     * Get the stockRequestItem that owns the StockIssueItem
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function stockRequestItem(): BelongsTo
    {
        return $this->belongsTo(StockRequestItem::class);
    }

    /**
     * Get the goodReceiveItem that owns the StockIssueItem
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function goodReceiveItem(): BelongsTo
    {
        return $this->belongsTo(GoodReceiveItem::class);
    }   
}
