import * as React from 'react';
import {Link} from "react-router-dom";



function WinnerMessage(props){
    const {mcolor, playerOneScore, playerTwoScore, timerInterval} = props;
    clearInterval(timerInterval);
    const winnerMessage = " is WINNER!"
    return(
        <div className="winnerMessage">
            <h1 style={{"color": mcolor}} >
                {(playerOneScore > playerTwoScore) ?  props.playerNames[0].toUpperCase() + winnerMessage : props.playerNames[1].toUpperCase() + winnerMessage}
            </h1>

            <br />
            <Link to={{
                pathname: '/',
            }}>
                <button className="fightButton" id="fightButton">NEW GAME</button>
            </Link>
        </div>
    )
}


export default WinnerMessage;
