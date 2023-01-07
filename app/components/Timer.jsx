import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import PropType from 'prop-types';
import { toMMSSMS, calcTimer } from '../utils/Timer'
import { BattleContext } from '../utils/BattleContext';

class Timer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            startDate: Date.now(),
            calcTimer: Date.now()
        };

        this.timerUpdate = this.timerUpdate.bind(this);
    }

    componentDidMount(){
        this.intervalId = setInterval(this.timerUpdate, 0);
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }


    timerUpdate(){
        let currentDate = this.props.currentDate;
        let result = this.state.calcTimer;
        const {mint, sec, mSec} = calcTimer(result);
        let timerStr = toMMSSMS(mint, sec, mSec);
        this.props.battleTimerState(timerStr);

        const {playerOneTable, playerTwoTable, roundLimit} = this.props.battleState;
        if(playerOneTable.length + playerTwoTable.length === parseInt(roundLimit)){
            
            return;
        }
        console.log();
        this.setState((prevState) => ({
            startDate: currentDate,
            calcTimer: Date.now() - prevState.startDate
        }));



    }

    render() {

        let result = this.state.calcTimer;
        const {mint, sec, mSec} = calcTimer(result);
        let timerStr = toMMSSMS(mint, sec, mSec);


        return(
            <div className="gridPoint">
                <div className="timer" id="timer">
                    <h1 id="timerH2">{timerStr}</h1>
                </div>
            </div>
        )
    }

}



export default Timer;
