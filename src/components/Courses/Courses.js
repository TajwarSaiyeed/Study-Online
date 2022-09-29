import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import Nav from '../Nav/Nav';
import "./Courses.css"
const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("courses.json")
        .then(res => res.json())
        .then(data => setCourses(data));
    }, [])


    return (
        <div className='courses-container'>
            <Nav />
            <p style={{fontSize: "24px", fontWeight: "500"}}>Select Today's Courses</p>
            <div className='courses'>
                {
                    courses.map(course => <Course key={course.id} course={course} />)
                }
            </div>
        </div>
    );
};

export default Courses;