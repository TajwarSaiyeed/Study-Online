import React from 'react';
import "./Cart.css";

const Cart = (props) => {
    const {cart} = props;
    return (
        <div>
            <h2>Order List</h2>
                <div>
                    <p>Selected Product: {cart.length}</p>
                </div>
        </div>
    );
};

export default Cart;