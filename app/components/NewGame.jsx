import * as React from 'react';
import Battle from "./Battle";
import {Link} from "react-router-dom";
import {Fragment} from "react";





class NewGame extends React.Component{
    state = {
        playerOne: null,
        playerTwo: null

    }



    setPlayerOne = (player) => {
        this.setState({
            playerOne: player
        });
    }

    setPlayerTwo = (player) => {
        this.setState({
            playerTwo: player
        })
    }





    render() {
        let { playerOne, playerTwo } = this.state;
        //console.log(playerOne + ", " + playerTwo);

        return (
            <div className="newgameDiv">
                <input type="text" name="playerOne" id="playerOne" placeholder="Player One" onChange={(e) => this.setPlayerOne(e.target.value)} />
                <input type="text" name="playerTwo" id="playerTwo" placeholder="Player Two" onChange={(e) => this.setPlayerTwo(e.target.value)}/>
                <Link to={{
                    pathname: 'battle',
                    search: `playerOne=${playerOne}&playerTwo=${playerTwo}`
                }}>

                    <button className="fightButton" id="fightButton">FIGHT</button>
                </Link>
            </div>
        )
    }

}


export default  NewGame;
