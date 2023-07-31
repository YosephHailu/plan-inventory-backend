<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class StockRequest extends Model
{
    use HasFactory;

    protected $fillable = [
        'reference_no',
        'requested_date',
        'requester_name',
        'contact_detail',
        'office_location_id',
        'where_house_id',
        'department_id',
        'checked_by_id',
        'approved_by_id',
        'rejected_by_id',
        'status'
    ];

    /**
     * Get the rejectedBy that owns the StockRequest
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function rejectedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'rejected_by_id', 'id');
    }

    /**
     * Get the approvedBy that owns the StockRequest
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function approvedBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'approved_by_id', 'id');
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
     * Get the department that owns the StockRequest
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function department(): BelongsTo
    {
        return $this->belongsTo(Department::class);
    }

    /**
     * Get the whereHouse that owns the StockRequest
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function whereHouse(): BelongsTo
    {
        return $this->belongsTo(WhereHouse::class);
    }

    /**
     * Get the officeLocation that owns the StockRequest
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function officeLocation(): BelongsTo
    {
        return $this->belongsTo(OfficeLocation::class);
    }

    /**
     * Get all of the stockRequestItems for the StockRequest
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function stockRequestItems(): HasMany
    {
        return $this->hasMany(StockRequestItem::class);
    }

    /**
     * Get the stockIssue associated with the StockRequest
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function stockIssue(): HasOne
    {
        return $this->hasOne(StockIssue::class);
    }
}
