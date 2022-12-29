import * as React from 'react';
import Equation from "./Equation";
import Player from "./Player";
import Timer from "./Timer";
import RoundResult from "./RoundResult";
import toMMSSMS from '../utils/Timer'
import withSearchParams from './withSearchParams';
import generateEquation from '../utils/Helper'
import WinnerMessage from "./WinnerMessage";


class Battle extends React.Component{

    state = {
        playerOneName: '',
        playerTwoName: '',

        playerOneAnswer: '',
        playerTwoAnswer: '',
        equation: '',
        playerOneTable: [],
        playerTwoTable: [],

        equationLeft: '',
        equationRight: '',
        currentDate: Date.now(),
        resetInterval: true,
        timerIntervalID: null,
        level: 2,

        playerOneScore: 0,
        playerTwoScore: 0,
        maxLimit: 0

    }


    setPlayers(players) {
        this.setState({
            playerOneName: players.playerOne,
            playerTwoName: players.playerTwo
        });
    }

    setEquation(){

        let {newEquationLeft, newEquationRight } = generateEquation(this.state.level);

        this.setState({
            equationLeft: newEquationLeft,
            equationRight: newEquationRight,
            equation: newEquationLeft.toString() + " + " + newEquationRight + " = "
                                                + (newEquationLeft + newEquationRight)
        });

    }

    setPlayersAnswer = (answer, from) => {
        answer = (from === "playerOneAnswer") ? this.state.playerOneAnswer.concat(answer) :
                                                this.state.playerTwoAnswer.concat(answer);

        let correctAns = parseInt(this.state.equationLeft) + parseInt(this.state.equationRight);
        let object = (from === "playerOneAnswer") ? {playerOneAnswer: answer} :
                                                    {playerTwoAnswer: answer}


        if(correctAns === parseInt(answer)) {
            let playerITable = this.state.playerOneTable,
                playerIITable = this.state.playerTwoTable;

            if(from === "playerOneAnswer")
                playerITable.push([
                    this.state.equation,
                    document.getElementById("timerH2").innerHTML
                ]);

            else
                playerIITable.push([
                    this.state.equation,
                    document.getElementById("timerH2").innerHTML
                ]);

            this.setState({
                playerOneAnswer: '',
                playerTwoAnswer: '',
                currentDate: Date.now(),
                resetInterval: true,
                playerOneTable: playerITable,
                playerTwoTable: playerIITable,

                playerOneScore: playerITable.length,
                playerTwoScore: playerIITable.length

            });


            this.setEquation();
        }

        else
            this.setState(object);
    }

    componentDidUpdate() {
        console.log("Update");

        if(this.state.resetInterval === true){

            const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);
            for (let i = 1; i < interval_id; i++)
                window.clearInterval(i);


            this.setState({
                currentDate: Date.now(),
                resetInterval: false,
                timerIntervalID: this.timerFunc()
            })
        }

        const {maxLimit, playerOneScore, playerTwoScore, playerOneName, playerTwoName, timerIntervalID} = this.state;

        if(maxLimit <= playerOneScore + playerTwoScore) {
            clearInterval(this.state.timerIntervalID);
            let message;

            if(playerOneScore > playerTwoScore)
                message = playerOneName + " is Winner!";
            else if(playerOneScore < playerTwoScore)
                message = playerTwoName + " is Winner!";
            else
                message = "Nobody is Winner";

            document.getElementById("equation").innerHTML = message;
        }

    }

    setMaxLimit = (limit) => {
        this.setState({maxLimit: parseInt(limit)})
    }

    setLevel = (level) => {
        this.setState({level: parseInt(level)})
    }

    componentWillUnmount() {
        clearInterval(this.state.timerIntervalID);
    }

    componentDidMount() {
        console.log("DidMount")
        const sp = this.props.router.searchParams;

        const playerOne = sp.get("playerOne");
        const playerTwo = sp.get("playerTwo");
        const maxLimit = sp.get("limit")
        const level = sp.get("level")

        this.setLevel(level);
        this.setPlayers({playerOne, playerTwo});
        this.setMaxLimit(maxLimit);

        this.setEquation();

        /* FOR KEY PRESS of Players */
        document.addEventListener('keypress', (event) => {
            // Event Code: 2 -> event.key
            // Event.name: Digit2 -> event.code
            // console.log(event.code, " - ", event.key);

            let key = event.key;
            let keyCode = event.code;


            if(keyCode === "Minus" && key === "-")
                this.setState({playerOneAnswer: ''})

            if(keyCode === "NumpadSubtract" && key === "-")
                this.setState({playerTwoAnswer: ''});


            if(keyCode.includes("Digit"))
                this.setPlayersAnswer(key, "playerOneAnswer");

            else if(keyCode.includes("Numpad") && !keyCode.includes("NumpadSubtract"))
                this.setPlayersAnswer(key, "playerTwoAnswer");


        });
        /* END - FOR KEY PRESS of Players */

        // this.timerFunc();
    }


    timerFunc(){

        let mSec = 0, sec = 0, mint = 0;

        return setInterval(() => {
            let root2 = document.getElementById("timerH2");
            let date2 = Date.now();
            let result = date2 - this.state.currentDate;

            mSec = result % 1000;
            sec = Math.floor(result / 1000) % 60;
            mint = Math.floor(result / 60000);


            root2.innerHTML = toMMSSMS(mint, sec, mSec);

        }, 0);
    }




    render(){

        return (
            <div className="grid-container">
                    <Equation left={this.state.equationLeft} right={this.state.equationRight}/>
                    <Player playerName={this.state.playerOneName}
                            gamerTable={this.state.playerOneTable}/>

                    <Timer />

                    <Player playerName={this.state.playerTwoName}
                            gamerTable={this.state.playerTwoTable}/>

                    <RoundResult playerOneScore={this.state.playerOneScore}
                                 playerTwoScore={this.state.playerTwoScore} />
            </div>
        )
    }

}


export default withSearchParams(Battle);