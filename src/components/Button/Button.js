import React from 'react';
import "./Button.css"

const Button = (props) => {
    const {text,style} = props;
    return (
        <button className='cart-btn'  style={style}>{text}</button>
    );
};

export default Button;