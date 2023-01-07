import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import PropType from 'prop-types';
import {Fragment} from "react";
import { BattleContext } from '../utils/BattleContext';

function PlayerTable(props){
    
    return(
        <table className="table table-hover gamer-table">
            <thead>
            <tr>
                <td>Equation</td>
                <td>Time</td>
            </tr>
            </thead>

            <tbody className="table-row">

            {props.gamerTable?.map((value, id) => {
                return(
                    <tr key={id}>
                        <td>{value.equation}</td>
                        <td>{value.timer}</td>
                    </tr>

                );
            })}

            </tbody>

        </table>
    );
}

class Player extends React.Component{

    constructor(props){
        super(props);

        /* this.state = {
            answerTable: []
        } */
    }



    render(){
                

        return(
            <div className="gridPlayerOne">
                <div id="playerOne">
                    <h3 style={{fontWeight: "bold"}}>
                        {(this.props.playerName !== undefined && this.props.playerName !== null) ? this.props.playerName.toUpperCase() : null}
                    </h3>
                </div>

                <div id="playerOne" className="for-scroll">
                    <PlayerTable gamerTable={this.props.ansTable}/>
                </div>

            <h3>{this.props.playerAnswer}</h3>

            </div>
        )
    }
    
}

export default Player;
