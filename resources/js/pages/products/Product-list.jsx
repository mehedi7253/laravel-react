// import axios from "../../axios";
import axios from "axios";
import React, { useEffect, useState } from "react";
export default function AllProduct(){

    const [products,setProducts] = useState([]);
    const fetchProducts = async () => {
        const res = await axios.get('/api/products')
        setProducts(res.data)
        console.log("all products",res.data)
    };

    useEffect(() => {
        fetchProducts();
    }, []);



    return(
        <div>
            <h2>Product List</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
