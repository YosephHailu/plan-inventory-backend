<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Builder;

class Asset extends Model
{
    use HasFactory;

    protected $fillable = [
        'tag_number',
        'asset_type',
        'item_name',
        'acquisition_date',
        'serial_no',
        'description',
        'accessories',
        'acquisition_cost',
        'purchase_order_no',
        'gsrn_no',
        'receipt_date',
        'depreciation_date',
        'po_no',
        'cost_center',
        'document_no',
        'currency_id',
        'acquisition_type_id',
        'program_area_id',
        'donor_id',
        'created_by_id'
    ];
    
    function ScopeSearch(Builder $query, $value) {
        return $query->where('item_name', 'like', "%$value%")
            ->orWhere('tag_number', 'like', "%$value%");
    }

    function ScopeStaff(Builder $query, $value) {
        return $query->whereHas('assetCustodians', function($q) use($value) {
            return $q->where('staff_id', $value);
        });
    }

    function ScopeCondition(Builder $query, $value) {
        return $query->whereHas('assetPhysicalCheck', function($q) use($value) {
            return $q->where('condition_id', $value);
        });
    }

    function getAvailableAttribute() {
        return $this->whereNotNull('disposed')->whereDoesntHave('assetCustodians', function($q) {
            return $q->where('returned', false)->where('approved', true);
        })->exists();
    }

    function ScopeAvailable(Builder $query, $value) {
        return $query->whereNull('disposed')->whereDoesntHave('assetCustodians', function($q) {
            return $q->where('returned', false);
        });
    }

    /**
     * Get the checkedBy that owns the StockRequest
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function checkedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'checked_by_id', 'id');
    }

    /**
     * Get the checkedBy that owns the StockRequest
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function disposedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'disposed_by_id', 'id');
    }
    /**
     * Get the donor that owns the Asset
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function donor(): BelongsTo
    {
        return $this->belongsTo(Donor::class);
    }

    /**
     * Get the programArea that owns the Asset
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function programArea(): BelongsTo
    {
        return $this->belongsTo(ProgramArea::class);
    }

    /**
     * Get the acquisitionType that owns the Asset
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function acquisitionType(): BelongsTo
    {
        return $this->belongsTo(AcquisitionType::class);
    }

    /**
     * Get the assetCustodian associated with the Asset
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function assetCustodian(): HasOne
    {
        return $this->hasOne(AssetCustodian::class, 'asset_id', 'id');
    }

    /**
     * Get all of the assetCustodians for the Asset
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function assetCustodians(): HasMany
    {
        return $this->hasMany(AssetCustodian::class);
    }

    /**
     * Get all of the assetPhysicalChecks for the Asset
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function assetPhysicalChecks(): HasMany
    {
        return $this->hasMany(AssetPhysicalCheck::class);
    }

    /**
     * Get the assetPhysicalCheck associated with the Asset
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function assetPhysicalCheck(): HasOne
    {
        return $this->hasOne(AssetPhysicalCheck::class)->latest();
    }
}
