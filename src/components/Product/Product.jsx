import React from 'react';
import "./Product.css";

const Product = (props) => {
    const {name, seller, price, img, ratings} = props.product;
    return (
        <div className='item'>
            <img src={img} alt="" />
            <div className='info'>
                <p>Name: {name}</p>
                <p>Price: ${price}</p>
                <p>Manufectuer: {seller}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button className='cart-btn'>Add to Cart</button>
        </div>
    );
};

export default Product;