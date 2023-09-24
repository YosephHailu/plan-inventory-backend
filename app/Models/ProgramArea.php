<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProgramArea extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description', 'four_digit_code'];
}
