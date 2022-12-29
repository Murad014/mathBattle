import * as React from 'react';

function Equation(props){
    return (
        <div className="gridHead" id="equation">
            <p id='leftE' style={{display:"inline"}}> {props.left} </p> + <p style={{display:"inline"}} id='rightE'> {props.right} </p>
        </div>
    );
}



export default Equation;