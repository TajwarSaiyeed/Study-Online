import React from 'react';
import "./Button.css"

const Button = (props) => {
    const {id,text,style,clickMe} = props;
    return (
        <button onClick={() => clickMe(id)} className='cart-btn' style={style}>{text}</button>
    );
};

export default Button;