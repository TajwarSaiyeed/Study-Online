import React from 'react';
import ExerChild from '../ExerChild/ExerChild';
import "./Exercise.css"
const Exercise = () => {
    return (
        <div>
            <h2>Exercise Details</h2>
            <ExerChild name="Exercise Time" time="16" format="hr"/>
            <ExerChild name="Break Time" time="15" format="min"/>
        </div>
    );
};

export default Exercise;