<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AssetPhysicalCheck extends Model
{
    use HasFactory;

    protected $fillable = ['remark', 'checked_by_id', 'checked_at', 'asset_id', 'condition_id'];

    public function ScopeProject_Id(Builder $query, $value)
    {
        return $query->whereHas('asset', function ($q) use ($value) {
            return $q->where('project_id', $value);
        });
    }

    public function ScopeSearch(Builder $query, $value)
    {
        return $query->whereHas('asset', function ($q) use ($value) {
            return $q->where('item_name', 'like', "%$value%")
                ->orWhere('tag_number', 'like', "%$value%");
        })->orWHere('id', "$value");
    }

    /**
     * Get the asset that owns the AssetPhysicalCheck
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
     */
    public function condition(): BelongsTo
    {
        return $this->belongsTo(Condition::class);
    }
}
