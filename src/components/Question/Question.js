import React from 'react';
import "./Question.css";

const Question = (props) => {
    const {ques, Ans} = props.question;
    return (
        <div className='q'>
            <h2>{ques}</h2>
            <p>{Ans}</p>
        </div>
    );
};

export default Question;