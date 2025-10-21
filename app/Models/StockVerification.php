<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class StockVerification extends Model
{
    use HasFactory;

    protected $fillable = [
        'quantity',
        'remarks',
        'good_receive_item_id',
        'condition_id',
        'verified_by_id',
    ];

    /**
     * Get the goodReceiveItem that owns the StockVerification
     */
    public function goodReceiveItem(): BelongsTo
    {
        return $this->belongsTo(GoodReceiveItem::class);
    }

    /**
     * Get the verifiedBy that owns the StockRequest
     */
    public function verifiedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'verified_by_id', 'id');
    }

    /**
     * Get the condition that owns the StockVerification
     */
    public function condition(): BelongsTo
    {
        return $this->belongsTo(Condition::class);
    }
}
