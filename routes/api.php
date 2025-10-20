<?php

use App\Http\Controllers\Admin\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::resource('products', ProductController::class);
Route::post('product-store', [ProductController::class, 'store']);
