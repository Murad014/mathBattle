import * as React from 'react';
import Equation from "./Equation";
import Player from "./Player";
import Timer from "./Timer";
import RoundResult from "./RoundResult";
import toMMSSMS from '../utils/Timer'
import withSearchParams from './withSearchParams';
import generateEquation from '../utils/Helper'
import WinnerMessage from "./WinnerMessage";
import { BattleContext } from '../utils/BattleContext';

class Battle extends React.Component{


    constructor(props){
        super(props);
        
        this.state = {
            equation: "",
            
            playerOneName: "Murad",
            playerTwoName: "Farid",

            playerOneAnswer: "",
            playerTwoAnswer: "",

            playerOneTable: [],
            playerTwoTable: [],

            currentDate: Date.now(),
            showTimer: "",

            level: 1,
            roundLimit: 3

        }

        this.setPlayersAnswer = this.setPlayersAnswer.bind(this);
        this.setShowTimer = this.setShowTimer.bind(this);

    }



    setPlayersAnswer(answer, from){
        if(from === "playerOneAnswer")
            this.setState((prevState) => ({
                playerOneAnswer: prevState.playerOneAnswer + answer
            }));

        else 
            this.setState((prevState) => ({
                playerTwoAnswer: prevState.playerTwoAnswer + answer
            }));
    }

    componentDidMount(){

        document.addEventListener('keypress', (e) => {
            // Event Code: 2 -> event.key
            // Event.name: Digit2 -> event.code
            // console.log(event.code, " - ", event.key);


            let key = e.key;
            let keyCode = e.code;
            
            if(keyCode === "Minus" && key === "-")
                this.setState({playerOneAnswer: ''})

            if(keyCode === "NumpadSubtract" && key === "-")
                this.setState({playerTwoAnswer: ''});


            if(keyCode.includes("Digit"))
                this.setPlayersAnswer(key, "playerOneAnswer");

            else if(keyCode.includes("Numpad") && !keyCode.includes("NumpadSubtract"))
                this.setPlayersAnswer(key, "playerTwoAnswer");
        });


    }

    shouldComponentUpdate(){

        if(this.state.equation === ""){
            const sp = this.props.router.searchParams;

            const playerOne = sp.get("playerOne");
            const playerTwo = sp.get("playerTwo");
            const maxLimit = sp.get("limit")
            const level = sp.get("level")


            this.setState((prevState) => ({
                equation: generateEquation(level),
                playerOneName: playerOne,
                playerTwoName: playerTwo,
                roundLimit: maxLimit,
                level: level
            }));
            return false;
        }


        return true;
    }

    componentDidUpdate(){
        const {playerOneAnswer, playerTwoAnswer, equation, showTimer, playerOneTable, playerTwoTable} = this.state;

        const playerOneIsWinner = (playerOneAnswer.toString() === eval(equation).toString());
        const playerTwoIsWinner  = (playerTwoAnswer.toString() === eval(equation).toString());

        const orWinners = playerOneIsWinner || playerTwoIsWinner;

        if(orWinners){
            let tableOfPlayerOne = this.state.playerOneTable;
            let tableOfPlayerTwo = this.state.playerTwoTable;
            
            if(playerOneIsWinner === true)
                tableOfPlayerOne.push({
                    equation: equation+" = "+eval(equation),
                    timer: showTimer
                });

            else if(playerTwoIsWinner === true)
                tableOfPlayerTwo.push({
                    equation: equation+" = "+eval(equation),
                    timer: showTimer
                })
            

            this.setState((prevState) => ({
                equation: generateEquation(this.state.level),
                playerOneAnswer: "",
                playerTwoAnswer: "",
                currentDate: Date.now(),
                
                playerOneTable: tableOfPlayerOne,
                playerTwoTable: tableOfPlayerTwo
            }));
        }
    }
    
    

    setShowTimer(value){
        this.setState({
            showTimer: value
        })
    }

    render(){
    
        return (
            <div className='grid-container'>

                <Equation   equation={this.state.equation} 
                            limit={this.state.roundLimit}
                            playerOneScore={this.state.playerOneTable.length}
                            playerTwoScore={this.state.playerTwoTable.length}
                            playerOneName={this.state.playerOneName}
                            playerTwoName={this.state.playerTwoName}

                            />

                <Player playerName={this.state.playerOneName}
                        answerTime={this.state.showTimer} 
                        ansTable={this.state.playerOneTable}
                        playerAnswer={this.state.playerOneAnswer}

                        />

                <Timer  currentDate={this.state.currentDate} 
                        battleTimerState={this.setShowTimer}
                        battleState={this.state}/>

                <Player playerName={this.state.playerTwoName}
                        answerTime={this.state.showTimer}
                        ansTable={this.state.playerTwoTable}
                        playerAnswer={this.state.playerTwoAnswer}
                        />

                <RoundResult scoreOfPlayerOne={this.state.playerOneTable.length} 
                             scoreOfPlayerTwo={this.state.playerTwoTable.length} />


            </div>

        )
    }

}


export default withSearchParams(Battle);


