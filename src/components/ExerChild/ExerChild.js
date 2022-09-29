import React from 'react';
import "./ExerChild.css"

const ExerChild = (props) => {
    const {name, time, format} = props;
    return (
        <div className='exer'>
            <p>{name} : <span>{time} {format}</span></p>
        </div>
    );
};

export default ExerChild;