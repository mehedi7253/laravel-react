import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
export default function AddNewProduct(){
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        price: "",
        discount_price: ""
    });

    const inputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        await axios.post('/api/product-store', form);
        alert("Product created successfully!");
    }

    return(
        <div className="container mx-auto p-4">
            <div className="row">
                <div className="col-md-6 col-sm-12 mt-5">
                    <div className="card">
                        <div className="card-header">
                            <h4>Add New Product</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={submitForm}>
                                <div className="mb-3 form-group">
                                    <label className="form-label">Product Name</label>
                                    <input type="text" name="name" className="form-control" placeholder="Enter product name" value={form.name} onChange={inputChange} />
                                </div>
                                <div className="mb-3 form-group">
                                    <label className="form-label">Price</label>
                                    <input type="text" name="price" className="form-control" placeholder="Enter price" value={form.price} onChange={inputChange} />
                                </div>
                                <div className="mb-3 form-group">
                                    <label className="form-label">Discount Price</label>
                                    <input type="text" name="discount_price" className="form-control" placeholder="Enter discount price" value={form.discount_price} onChange={inputChange} />
                                </div>
                                <div className="mb-3 form-group">
                                    <button type="submit" className="btn btn-primary">Add Product</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
