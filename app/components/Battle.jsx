import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Fragment} from "react";
import Equation from "./Equation";
import Player from "./Player";
import Timer from "./Timer";
import RoundResult from "./RoundResult";

function Battle(props){

    return(

        <div className="grid-container">
            <Equation />
            <Player />
            <Timer />
            <Player />
            <RoundResult />
        </div>

    );
}


export default Battle;