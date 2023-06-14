<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categoria;

class CategoriaController extends Controller
{
    public function listar(){
        $categorias = Categoria::get(); 
        return  response()->json($categorias);
    }
    public function store(Request $request){
        $categoria = Categoria::create([
            'estado' => $request->estado,
            'nombre' => $request->nombre,
        ]);
        return response(200);
    }
}
