<?php

use App\Http\Controllers\Api\Auth\AuthController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::get('{provider}/redirect',[AuthController::class,'googleRedirect'])->name('google.redirect');

Route::get('{provider}/callback',[AuthController::class,'googleCallback'])->name('google.callback');