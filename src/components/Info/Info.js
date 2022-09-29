import React, { useState } from 'react';
import "./Info.css";
import Myself from '../Myself/Myself';
import Break from '../Break/Break';
import Exercise from '../Exercise/Exercise';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';


const Info = ({course}) => {  
    const notify = () => toast.success("Activity Completed",{position: toast.POSITION.TOP_CENTER}); 
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
            <button className='activity-btn' onClick={notify}>Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default Info;