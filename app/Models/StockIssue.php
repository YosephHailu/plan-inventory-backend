<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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
        'stock_request_id',
        'created_by_id'
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
        return $this->belongsTo(User::class);
    }
}
