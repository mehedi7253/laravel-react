<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Prodcut;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Prodcut::all();
        return response()->json($products);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       $request->validate($request, [
           'name' => 'required|unique:products',
           'slug'  => 'required|unique:products',
           'price' => 'required',
           'image' => 'required|mimes:png,jpg,webp,jpeg',
       ]);

       $product = new Prodcut();
       $product->name    = $request->name;
       $product->slug    = $request->slug;
       $product->price   = $request->price;
       $product->discount_price = $request->discount_price;
       $product->quantity = $request->quantity;
       $product->status   = $request->status;
       $product->save();
       return response()->json(200, 'Product created successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
