import React from 'react';
import './App.css';
import Courses from './components/Courses/Courses';
import Info from './components/Info/Info';
function App() {
  
  const clickMe = (id) =>{
    console.log(id);
}

  return (
    <div className="App">
      <div className="container">
        <Courses clickMe={clickMe}/>
        <Info />
      </div>
    </div>
  );
}

export default App;
