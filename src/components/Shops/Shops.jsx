import React, { useEffect, useState } from 'react';
import "./Shops.css";
import Product from "../Product/Product"

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);

    const handleAddToCart = (product) =>{
        console.log(product);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                
                {
                    products.map( product => <Product key={product.id} handleAddToCart={handleAddToCart} product={product}/>)
                }
            </div>
            <div className="cart-container">
                <h2>Order List</h2>
                <div>
                    <p>Select</p>
                </div>
            </div>
        </div>
    );
};

export default Shop;