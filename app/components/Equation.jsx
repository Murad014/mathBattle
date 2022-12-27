import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import PropType from "prop-types";

function Equation(props){
    return (
        <div className="gridHead">
            <p id='leftE' style={{display:"inline"}}> {props.left} </p> + <p style={{display:"inline"}} id='rightE'> {props.right} </p>
        </div>
    );
}

export default Equation;