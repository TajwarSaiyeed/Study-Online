import React, { useEffect, useState } from 'react';
import "./Shops.css";
import Product from "../Product/Product"
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);

    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                
                {
                    products.map( product => <Product key={product.id} handleAddToCart={handleAddToCart} product={product}/>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Shop;