<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class StockIssue extends Model
{
    use HasFactory;

    protected $fillable = [
        'issuance_number',
        'date',
        'transport_mode',
        'transported_by',
        'rate_of_charge',
        'from',
        'to',
        'remark',
        'status',
        'waybill',
        'stock_request_id',
        'created_by_id',
        'from_where_house_id',
        'to_where_house_id'
    ];

    /**
     * Get the stockRequest that owns the StockIssue
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function stockRequest(): BelongsTo
    {
        return $this->belongsTo(StockRequest::class);
    }

    /**
     * Get the createdBy that owns the StockIssue
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by_id', 'id');
    }

    /**
     * Get the fromWhereHouse that owns the StockIssue
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function fromWhereHouse(): BelongsTo
    {
        return $this->belongsTo(WhereHouse::class, 'from_where_house_id');
    }

    /**
     * Get the toWhereHouse that owns the StockIssue
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function toWhereHouse(): BelongsTo
    {
        return $this->belongsTo(WhereHouse::class, 'to_where_house_id');
    }

    /**
     * Get all of the stockIssueItems for the StockIssue
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function stockIssueItems(): HasMany
    {
        return $this->hasMany(StockIssueItem::class);
    }
}
