<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Material;

class MaterialController extends Controller
{
    public function listar(){
        $materiales = Material::get(); 
        return  response()->json($materiales);
    }
    public function getMaterial($id){
        $material = Material::find($id); 
        return  response()->json($material);
    }
    public function store(Request $request){
        $material = Material::create([
            'estado' => $request->estado,
            'nombre' => $request->nombre,
            'descripcion' => $request->descripcion,
            'stock_minimo' => $request->stock_minimo,
            'categoria_id' => $request->categoria_id,
        ]);
        return response(200);
    }
    public function update(Request $request,$id){
            $material = Material::find($id);
            $material->estado = $request->estado;
            $material->nombre = $request->nombre;
            $material->descripcion = $request->descripcion;
            $material->stock_minimo = $request->stock_minimo;
            $material->categoria_id = $request->categoria_id;
            $material->save();
            
            return response(200);
    }
    public function destroy($id){
        $material = Material::find($id);
        $material->delete();    
        return response(200);
    }


}
