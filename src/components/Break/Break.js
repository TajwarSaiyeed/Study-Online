import React from 'react';
import "./Break.css";


const Break = ({breakTime}) => {
    return (
        <div>
            <h2>Add A Break</h2>
            <div className='break'>
                <button onClick={breakTime}>10m</button>
                <button onClick={breakTime}>20m</button>
                <button onClick={breakTime}>30m</button>
                <button onClick={breakTime}>40m</button>
                <button onClick={breakTime}>50m</button>
            </div>
        </div>
    );
};

export default Break;