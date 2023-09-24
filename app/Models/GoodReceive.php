<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class GoodReceive extends Model
{
    use HasFactory;

    protected $fillable = [
        'reference_number',
        'received_date',
        'remark',
        'received_by',
        'status',
        'created_by_id',

        'vendor_name',
        'vendor_id',
        'purchase_order_no',
        'invoice_no',
        'project',
        'where_house_id',
    ];

    /**
     * Get the createdBy that owns the GoodReceive
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }


    /**
     * Get all of the goodReceiveItems for the 2023_07_31_170846_create_good_receives_table
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function goodReceiveItems(): HasMany
    {
        return $this->hasMany(GoodReceiveItem::class);
    }
}