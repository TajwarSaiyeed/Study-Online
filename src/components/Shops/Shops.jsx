import React, { useEffect, useState } from 'react';
import "./Shops.css";
import Product from "../Product/Product"
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);
    useEffect(() => {
        const storedCart = getStoredCart();
        const saveCart = [];
        for(const id in storedCart){
            const addedProduct = products.find( product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
        }
        setCart(saveCart);
    }, [products])

    const handleAddToCart = (selectedProduct) =>{
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest  = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                
                {
                    products.map( product => <Product key={product.id} handleAddToCart={handleAddToCart} product={product}/>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Shop;