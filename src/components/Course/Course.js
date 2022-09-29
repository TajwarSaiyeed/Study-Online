import React from 'react';
import "./Course.css";
const Course = (props) => {
    console.log(props.course);
    const {name,courseImg,desc, level, timeRequired} = props.course;
    return (
        <div className='course'>
            <img src={courseImg} alt=''/>
            <div className='info'>
                <h3>Name : {name}</h3>
                <p>{desc}</p>
                <p>For : {level}</p>
                <p>Time Required : {timeRequired}</p>
            </div>
                <button className='cart-btn'>Add To Cart</button>
            
        </div>
    );
};

export default Course;