import * as React from 'react';
import { useEffect } from "react";
import Equation from "./Equation";
import Player from "./Player";
import Timer from "./Timer";
import RoundResult from "./RoundResult";
import toMMSSMS from '../utils/Timer'
import withSearchParams from './withSearchParams';



class Battle extends React.Component{

    state ={
        playerOneName: '',
        playerTwoName: '',

        playerOneAnswer: '',
        playerTwoAnswer: ''

    }

    setPlayers(players) {
        this.setState({
            playerOneName: players.playerOne,
            playerTwoName: players.playerTwo
        });
    }


    setPlayerOneAnswer = (answer) => {
        answer = this.state.playerOneAnswer.concat(answer);

        this.setState(
            {
                playerOneAnswer: answer
            }
        );
    }

    setPlayerTwoAnswer = (answer) => {
        answer = this.state.playerTwoAnswer.concat(answer);
        this.setState(
            {
                playerTwoAnswer: answer
            }
        );
    }


    componentDidMount() {
        const sp = this.props.router.searchParams;

        const playerOne = sp.get("playerOne");
        const playerTwo = sp.get("playerTwo");

        this.setPlayers({playerOne, playerTwo});


        let mSec = 0, sec = 0, mint = 0;
        let date = Date.now();

        /* FOR TIMER */
        setInterval(() => {
            let root2 = document.getElementById("timerH2");
            let date2 = Date.now();
            let result =  date2 - date;

            mSec = result % 1000;
            sec = Math.floor(result / 1000) % 60;
            mint = Math.floor(result / 60000);

            root2.innerHTML = toMMSSMS(mint, sec, mSec);

        },0);
        /* END - FOR TIMER */


        /* FOR KEY PRESS of Players */
        document.addEventListener('keypress', (event) => {
            // Event Code: 2 -> event.key
            // Event.name: Digit2 -> event.code
            //console.log(event.key, " - ", event.code);

            let key = event.key;
            let keyCode = event.code;

            if(event.code.includes("Digit"))
                this.setPlayerOneAnswer(event.key);

            else if(event.code.includes("Numpad"))
                this.setPlayerTwoAnswer(event.key);

        });
        /* END - FOR KEY PRESS of Players */



    }


    render(){

        //console.log(this.state);

        return (
            <div className="grid-container">
                    <Equation/>
                    <Player playerName={this.state.playerOneName}/>
                    <Timer/>
                    <Player playerName={this.state.playerTwoName}/>
                    <RoundResult/>
            </div>
        )
    }
}





export default withSearchParams(Battle);