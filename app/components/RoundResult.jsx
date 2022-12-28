import * as React from 'react';



function RoundResult(props){
    let playerOneColor = (props.playerOneScore < props.playerTwoScore) ? "#e04242": "#66FF99";
    let playerTwoColor = (props.playerOneScore > props.playerTwoScore) ? "#e04242": "#66FF99";

    return (
        <div className="gridFooter">
            <p style={{float: "left", color: playerOneColor}}>{props.playerOneScore}</p>
            <p style={{float: "right", color: playerTwoColor}}>{props.playerTwoScore}</p>
        </div>
    );
}



export default RoundResult;