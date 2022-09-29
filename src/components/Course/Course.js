import React from 'react';
import Button from '../Button/Button';
import "./Course.css";
const Course = (props) => {
    const {clickMe, course} = props;
    const {id,name,courseImg,desc, level, timeRequired} = course;
    return (
        <div className='course'>
            <img src={courseImg} alt=''/>
            <div className='info'>
                <h3>Name : {name}</h3>
                <p>{desc}</p>
                <p>For : {level}</p>
                <p>Time Required : {timeRequired}</p>
            </div>
            <Button clickMe={clickMe} id={id} text="Add to Cart" style={{bottom: "0", width: "95%", position:"absolute"}}/>
        </div>
    );
};

export default Course;