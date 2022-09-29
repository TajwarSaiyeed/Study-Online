import React from 'react';
import "./Info.css";
import Myself from '../Myself/Myself';
import Break from '../Break/Break';
import Exercise from '../Exercise/Exercise';
import Button from '../Button/Button';
const Info = ({course}) => {
    return (
        <div className='information'>
            <Myself />
            <Break />
            <Exercise exerciseTime={course}/>
            <Button text="Activity Completed" style={{bottom: "40px", width: "285px"}}/>
        </div>
    );
};

export default Info;