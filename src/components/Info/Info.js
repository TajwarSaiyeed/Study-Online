import React, { useState } from 'react';
import "./Info.css";
import Myself from '../Myself/Myself';
import Break from '../Break/Break';
import Exercise from '../Exercise/Exercise';
import Button from '../Button/Button';


const Info = ({course}) => {    
    const [breakTimeAdded, setBreakTimeAdded] = useState([0]);
    const breakTime = (e) =>{
        
        const text = e.target.innerText;
        const newText = text.slice(0,2);
        localStorage.setItem("break",newText);
        setBreakTimeAdded(newText);
    }
    return (
        <div className='information'>
            <Myself />
            <Break breakTime={breakTime} />
            <Exercise exerciseTime={course} breakTimeAdd={breakTimeAdded}/>
            <Button text="Activity Completed" style={{bottom: "40px", width: "285px"}}/>
        </div>
    );
};

export default Info;