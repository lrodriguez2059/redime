<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

    //Rutas Materiales
    Route::controller(App\Http\Controllers\MaterialController::class)->group(function () {

        Route::get('/material', 'listar')->name('material.listar');
        Route::get('/material/{id}', 'getMaterial')->name('material.getMaterial');
        Route::post('/material', 'store')->name('material.store');
        Route::put('/material/{id}', 'update')->name('material.update');
        Route::delete('/material/{id}', 'destroy')->name('material.destroy');


    });
       //Rutas de Categorias
       Route::controller(App\Http\Controllers\CategoriaController::class)->group(function () {

        Route::get('/categoria', 'listar')->name('categoria.listar');
        Route::post('/categoria', 'store')->name('categoria.store');
       /* Route::get('/categoria', 'store')->name('categoria.store');
        Route::put('/categoria/{id}', 'update')->name('categoria.update');
        Route::delete('/categoria/{id}', 'destroy')->name('categoria.destroy');*/

    });