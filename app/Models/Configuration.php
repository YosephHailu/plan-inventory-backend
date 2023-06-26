<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Configuration extends Model
{
    use HasFactory;

    protected $fillable = ['company_name', 'company_address', 'company_logo_url'];

    public function getCompanyLogoAttribute()
    {
        return url($this->company_logo_url);
    }
}
