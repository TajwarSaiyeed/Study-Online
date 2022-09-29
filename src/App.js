import React, { useState } from 'react';
import './App.css';
import Courses from './components/Courses/Courses';
import Info from './components/Info/Info';

function App() {
  const [course, setCourse] = useState([]);
  const exerciseTime = (selectCourse) => {
    const newCourse = [...course, selectCourse];
    setCourse(newCourse);
  }
  return (
    <div className="App">
      <div className="container">
        <Courses exerciseTime={exerciseTime}/>
        <Info course={course} />
      </div>
    </div>
  );
}

export default App;
