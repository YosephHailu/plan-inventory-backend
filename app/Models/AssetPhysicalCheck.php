<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AssetPhysicalCheck extends Model
{
    use HasFactory;

    protected $fillable =['remark', 'checked_by_id', 'checked_at', 'asset_id', 'condition_id'];

    /**
     * Get the asset that owns the AssetPhysicalCheck
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function asset(): BelongsTo
    {
        return $this->belongsTo(Asset::class);
    }

    /**
     * Get the checkedBy associated with the Asset
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function checkedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'checked_by_id', 'id');
    }

    /**
     * Get the condition that owns the AssetPhysicalCheck
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function condition(): BelongsTo
    {
        return $this->belongsTo(Condition::class);
    }
}
