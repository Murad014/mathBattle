import * as React from 'react';



function RoundResult(props){
    let playerOneColor = (props.scoreOfPlayerOne < props.scoreOfPlayerTwo) ? "#e04242": "#66FF99";
    let playerTwoColor = (props.scoreOfPlayerOne > props.scoreOfPlayerTwo) ? "#e04242": "#66FF99";

    return (

            <div className="gridFooter">
                <p style={{float: "left", color: playerOneColor}}>{props.scoreOfPlayerOne}</p>
                <p style={{float: "right", color: playerTwoColor}}>{props.scoreOfPlayerTwo}</p>
            </div>

    );
}



export default RoundResult;