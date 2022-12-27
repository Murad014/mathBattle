import * as React from 'react';
import Equation from "./Equation";
import Player from "./Player";
import Timer from "./Timer";
import RoundResult from "./RoundResult";
import toMMSSMS from '../utils/Timer'
import withSearchParams from './withSearchParams';
import generateEquation from '../utils/Helper'
// import checkCorrectAnswer  from '../utils/Helper'



class Battle extends React.Component{

    state = {
        playerOneName: '',
        playerTwoName: '',

        playerOneAnswer: '',
        playerTwoAnswer: '',

        equationLeft: '',
        equationRight: ''

    }


    setPlayers(players) {
        this.setState({
            playerOneName: players.playerOne,
            playerTwoName: players.playerTwo
        });
    }

    setEquation(){
        let {newEquationLeft, newEquationRight } = generateEquation(3);

        this.setState({
            equationLeft: newEquationLeft,
            equationRight: newEquationRight

        })
    }

    setPlayerOneAnswer = (answer) => {
        answer = this.state.playerOneAnswer.concat(answer);
        let correctAns = parseInt(this.state.equationLeft) + parseInt(this.state.equationRight);

        if(correctAns === parseInt(answer)) {
            this.setState({
                playerOneAnswer: '',
                playerTwoAnswer: ''
            });
            this.setEquation();
        }
        else
            this.setState(
                {
                    playerOneAnswer: answer
                }
            );
    }

    setPlayerTwoAnswer = (answer) => {
        answer = this.state.playerTwoAnswer.concat(answer);
        let correctAns = parseInt(this.state.equationLeft) + parseInt(this.state.equationRight);

        if(correctAns === parseInt(answer)) {
            this.setState({
                playerOneAnswer: '',
                playerTwoAnswer: ''
            });
            this.setEquation();
        }

        else
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
        this.setEquation();

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
            console.log(event.code, " - ", event.key);

            let key = event.key;
            let keyCode = event.code;


            if(keyCode === "Minus" && key === "-")
                this.setState({playerOneAnswer: ''})

            if(keyCode === "NumpadSubtract" && key === "-")
                this.setState({playerTwoAnswer: ''});

            console.log(this.state.playerOneAnswer + ", " + this.state.playerTwoAnswer);

            if(keyCode.includes("Digit"))
                this.setPlayerOneAnswer(key);

            else if(keyCode.includes("Numpad"))
                this.setPlayerTwoAnswer(key);


        });
        /* END - FOR KEY PRESS of Players */


    }


    render(){

        return (
            <div className="grid-container">
                    <Equation left={this.state.equationLeft} right={this.state.equationRight}/>
                    <Player playerName={this.state.playerOneName}/>
                    <Timer/>
                    <Player playerName={this.state.playerTwoName}/>
                    <RoundResult/>
            </div>
        )
    }

}





export default withSearchParams(Battle);