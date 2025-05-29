<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Offre;

class Proposition extends Model
{
    use HasFactory;

    protected $fillable = [
        'offre_id',
        'user_id',
        'description',
        'status',
    ];

    public function offre()
    {
        return $this->belongsTo(Offre::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
