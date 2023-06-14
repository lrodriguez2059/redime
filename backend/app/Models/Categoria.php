<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    use HasFactory;

    protected $table = 'categorias';
    protected $fillable = ['estado', 'nombre'];
    public function materiales(){
    	return $this->hasMany(Material::class);
    }

    
    public $timestamps = false;

}
