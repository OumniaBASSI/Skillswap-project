<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offre extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'title',
        'description',
        'competences',
        'location',
        'salary',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function propositions()
    {
        return $this->hasMany(Proposition::class);
    }
}
