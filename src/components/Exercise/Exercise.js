import React from 'react';
import ExerChild from '../ExerChild/ExerChild';
import "./Exercise.css"
const Exercise = ({exerciseTime}) => {
    let totalTime = 0;
    for(const course of exerciseTime){
        totalTime = totalTime + course.timeRequired;
    }
    return (
        <div>
            <h2>Exercise Details</h2>
            <ExerChild name="Exercise Time" time={totalTime} format="hr"/>
            <ExerChild name="Break Time" time="15" format="min"/>
        </div>
    );
};

export default Exercise;