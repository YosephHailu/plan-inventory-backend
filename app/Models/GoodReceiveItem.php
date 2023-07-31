<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class GoodReceiveItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'received_quantity',
        'description',
        'item_id',
        'good_receive_id',
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
}
