import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import Nav from '../Nav/Nav';
import Question from '../Question/Question';
import "./Courses.css"
const Courses = (props) => {
    const {exerciseTime} = props;
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("courses.json")
        .then(res => res.json())
        .then(data => setCourses(data));
    }, [])

    

  const questions = [{
    id: 1,
    ques : "How React Works",
    Ans : "ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code"
  },{
    id: 2,
    ques: "Different Between Props and State?",
    Ans: "The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component."
  },{
    id: 3,
    ques: "Where Should Use useEffect without Api?",
    Ans : "Directly updating the DOM, and timers."
  }
  ]


    return (
        <div className='courses-container'>
            <Nav />
            <p style={{fontSize: "24px", fontWeight: "500"}}>Select Today's Courses</p>
            <div className='courses'>
                {
                    courses.map(course => <Course key={course.id} exerciseTime={exerciseTime} course={course} />)
                }
            </div>
            <div className="questions">
                {
                questions.map(question => <Question key={question.id} question={question} />)
                }
            </div>
        </div>
    );
};

export default Courses;