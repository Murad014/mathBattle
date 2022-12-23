import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import PropType from 'prop-types';


function Timer(){
    return(
        <div className="gridPoint">
            <div className="timer" id="timer">
                <h1 id="timerH2">00.00.00</h1>
            </div>
        </div>
    );
}


export default Timer;
