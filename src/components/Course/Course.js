import React from 'react';
import "./Course.css";
const Course = (props) => {
    console.log(props.course);
    const {name,courseImg} = props.course;
    return (
        <div className='course'>
            <img src={courseImg} alt=''/>
            <p>Name : {name}</p>
        </div>
    );
};

export default Course;