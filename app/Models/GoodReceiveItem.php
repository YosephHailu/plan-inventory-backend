<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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
        'description',
        'condition',
        'expiry_date',
        'comment',
        'donor_id'
    ];

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
}
