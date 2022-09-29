import React from 'react';

const UserDetails = (props) => {
    const {num,detail,sm} = props;
    return (
        <div>
            <h1>{num}<small>{sm}</small></h1>
            <p>{detail}</p>
        </div>
    );
};

export default UserDetails;