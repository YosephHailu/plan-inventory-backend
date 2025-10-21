<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AssetDisposal extends Model
{
    use HasFactory;

    protected $fillable = [
        'date',
        'transfer_to',
        'accumulated_depreciation',
        'replacement_cost',
        'remark',
        'currency_id',
        'disposal_type_id',
        'disposal_reason_id',
        'asset_id',
        'approved_by_id',
        'created_by_id',
    ];

    /**
     * Get the asset that owns the AssetDisposal
     */
    public function asset(): BelongsTo
    {
        return $this->belongsTo(Asset::class);
    }

    /**
     * Get the disposalReason that owns the AssetDisposal
     */
    public function disposalReason(): BelongsTo
    {
        return $this->belongsTo(DisposalReason::class);
    }

    /**
     * Get the disposalType that owns the AssetDisposal
     */
    public function disposalType(): BelongsTo
    {
        return $this->belongsTo(DisposalType::class);
    }

    /**
     * Get the currency that owns the AssetDisposal
     */
    public function currency(): BelongsTo
    {
        return $this->belongsTo(Currency::class);
    }
}
