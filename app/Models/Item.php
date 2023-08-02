<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Item extends Model
{
    use HasFactory;

    protected $fillable = [
        'stock_card_number',
        'name',
        'balance',
        'description',
        'expire_date',
        'stock_available',
        'beginning_balance',
        'unit_of_measurement_id',
        'item_category_id',
        'office_location_id',
        'where_house_id',
        'stock_type_id',
        'department_id',
        'donor_id',
        'lot_number_id',
        'created_by_id',
        'bin_card_location',
        'batch_number',
        'invoice_no',
        'purchase_order_no',
        'waybill_number',
        'vendor_name',
        'vendor_id',
        'note',
        'unit_price',
        'total_price',
        'remark',
    ];
   
    /**
     * Get the donor that owns the Item
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function donor(): BelongsTo
    {
        return $this->belongsTo(Donor::class);
    }

    /**
     * Get the department that owns the Item
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class);
    }

    /**
     * Get the stockType that owns the Item
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function stockType(): BelongsTo
    {
        return $this->belongsTo(StockType::class);
    }

    /**
     * Get the whereHouse that owns the Item
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function whereHouse(): BelongsTo
    {
        return $this->belongsTo(WhereHouse::class);
    }

    /**
     * Get the officeLocation that owns the Item
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function officeLocation(): BelongsTo
    {
        return $this->belongsTo(OfficeLocation::class);
    }
    /**
     * Get the itemCategory that owns the Item
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function itemCategory(): BelongsTo
    {
        return $this->belongsTo(ItemCategory::class);
    }

    /**
     * Get the unitOfMeasurement that owns the Item
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function unitOfMeasurement(): BelongsTo
    {
        return $this->belongsTo(UnitOfMeasurement::class);
    }
    
    /**
     * Get the lotNumber that owns the Item
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function lotNumber(): BelongsTo
    {
        return $this->belongsTo(LotNumber::class);
    }
    
}
