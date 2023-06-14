<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    use HasFactory;
    protected $table = 'materiales';
    
    // cambiamos el nombre predeterminado de los timestamp
    const CREATED_AT = 'creado_a';
    const UPDATED_AT = 'actualizado_a';



    protected $fillable = ['estado','nombre','descripcion',	'stock_minimo','categoria_id'];
    public function categoria(){
    	return $this->belongsTo(categoria::class);
    }


}
