import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainLayout from "../layouts/App";


import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/404";
import Product from "../pages/products/Product-list";
import ProductCreate from "../pages/products/Create";


export default function AppRoutes(){
    return(
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/products" element={<Product />} />
                    <Route path="/product-create" element={<ProductCreate />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    )
}
