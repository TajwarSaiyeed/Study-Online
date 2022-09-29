import React from 'react';
import profile from "../../Background.png";
import "./Myself.css"
const Myself = () => {
    return (
        <div className='myself'>
            <div className='img-container'>
                <img src={profile} alt=''/>
            </div>
            <div className='my-info'>
                <h3>Tajwar Saiyeed</h3>
                <p>Chittagong, Bangladesh</p>
            </div>
        </div>
    );
};

export default Myself;