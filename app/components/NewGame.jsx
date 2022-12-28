import * as React from 'react';
import Battle from "./Battle";
import {Link} from "react-router-dom";
import {Fragment} from "react";





class NewGame extends React.Component{
    state = {
        playerOne: null,
        playerTwo: null,
        maxLimit: 0

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

    setMaxLimit = (limit) => {
        this.setState({
            maxLimit: limit
        })
    }





    render() {
        let { playerOne, playerTwo, maxLimit } = this.state;
        //console.log(playerOne + ", " + playerTwo);

        return (
            <React.Fragment>
                <div className="newgameDiv">
                    <input type="text" name="playerOne" id="playerOne" placeholder="Player One" onChange={(e) => this.setPlayerOne(e.target.value)} />
                    <input type="text" name="playerTwo" id="playerTwo" placeholder="Player Two" onChange={(e) => this.setPlayerTwo(e.target.value)}/>
                    <input type="text" name="maxLimit" id="maxLimit" placeholder="Max Limit" onChange={(e) => this.setMaxLimit(e.target.value)}/>

                    <Link to={{
                        pathname: 'battle',
                        search: `playerOne=${playerOne}&playerTwo=${playerTwo}&limit=${maxLimit}`
                    }}>

                        <button className="fightButton" id="fightButton">FIGHT</button>
                    </Link>
                </div>
            </React.Fragment>
        )
    }

}


export default  NewGame;
