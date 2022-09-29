import React from 'react';
import "./Button.css"

const Button = (props) => {
    const {course,text,style,exerciseTime} = props;
    return (
        <button onClick={() => exerciseTime(course)} className='cart-btn' style={style}>{text}</button>
    );
};

export default Button;