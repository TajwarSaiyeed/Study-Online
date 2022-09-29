import React from 'react';
import './App.css';
import Courses from './components/Courses/Courses';
import Info from './components/Info/Info';
function App() {
  return (
    <div className="App">
      <div class="container">
        <Courses />
        <Info />
      </div>
    </div>
  );
}

export default App;
