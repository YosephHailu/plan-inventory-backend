<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Log;

class GoodReceiveItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'ordered_quantity',
        'received_quantity',
        'description',
        'item_id',
        'condition_id',
        'balance_due',
        'good_receive_id',
        'stock_type_id',
        'description',
        'condition',
        'expiry_date',
        'comment',
        'donor_id',
        'project_id',
        'unit_of_measurement_id',
        'unit_price'
    ];

    function ScopeWherehouse(Builder $query, $value) {
        return $query->whereHas('goodReceive', function($q) use($value) {
            return $q->where('where_house_id', $value);
        });
    }

    function ScopeSearch(Builder $query, $value) {
        return $query->WhereHas('item', function($q) use($value) {
            return $q->where('name', 'like', "%$value%");
        })->orWhereHas('goodReceive', function($q) use($value) {
            return $q->where('loading_number', 'like', "%$value%");
        })->orWhere('id', $value)->orWhere('description', 'like', "%$value%");
    }

    /**
     * Get the goodReceive that owns the GoodReceiveItem
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function goodReceive(): BelongsTo
    {
        return $this->belongsTo(GoodReceive::class);
    }

    /**
     * Get the item that owns the GoodReceiveItem
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function item(): BelongsTo
    {
        return $this->belongsTo(Item::class);
    }

    /**
     * Get the donor that owns the GoodReceiveItem
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function donor(): BelongsTo
    {
        return $this->belongsTo(Donor::class);
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
     * Get the stockType that owns the GoodReceive
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function stockType(): BelongsTo
    {
        return $this->belongsTo(StockType::class);
    }

    /**
     * Get the project that owns the GoodReceive
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function project(): BelongsTo
    {
        return $this->belongsTo(Project::class, 'project_id', 'id');
    }

}
