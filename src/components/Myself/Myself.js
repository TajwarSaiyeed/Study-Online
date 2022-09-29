import React from 'react';
import profile from "../../Background.png";
import UserDetails from '../UserDetails/UserDetails';
import "./Myself.css"
const Myself = () => {
    return (
        <>
        <div className='myself'>
            <div className='img-container'>
                <img src={profile} alt=''/>
            </div>
            <div className='my-info'>
                <h3>Tajwar Saiyeed</h3>
                <p>Chittagong, Bangladesh</p>
            </div>
        </div>
        <div className='my-details'>
            <UserDetails num="42" detail="Weight" sm="kg"  />
            <UserDetails num="5.9" detail="height" sm="" />
            <UserDetails num="19" detail="Age" sm="yrs" />
        </div>
        </>
    );
};

export default Myself;