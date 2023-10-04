<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AssetCustodian extends Model
{
    use HasFactory;

    protected $fillable = [
        'remark',
        'assigned_at',
        'assigned_by_id',
        'asset_id',
        'staff_id',
        'returned',
        'returned_at',
        'returned_by_id'
    ];

    /**
     * Get the assignedBy that owns the AssetCustodian
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function assignedBy(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the asset that owns the AssetCustodian
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function asset(): BelongsTo
    {
        return $this->belongsTo(Asset::class);
    }

    /**
     * Get the staff that owns the AssetCustodian
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function staff(): BelongsTo
    {
        return $this->belongsTo(Staff::class);
    }
}
