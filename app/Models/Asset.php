<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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
}
