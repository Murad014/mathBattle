import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import PropType from 'prop-types';
import {Fragment} from "react";


function PlayerTable(){

    return(
        <table className="table table-hover gamer-table">
            <thead>
            <tr>
                <td>Equation</td>
                <td>Time</td>
            </tr>
            </thead>

            <tbody className="table-row">
            <tr>
                <td>52+65</td>
                <td>2.00544</td>
            </tr>
            <tr>
                <td>342+2342</td>
                <td>3.025</td>
            </tr>
            <tr>
                <td>532+6235</td>
                <td>5.06556</td>
            </tr>

            </tbody>

        </table>
    );
}

function Player(props){

    return(

        <div className="gridPlayerOne">
            <div id="playerOne">
                <h3 style={{fontWeight: "bold"}}>
                    {(props.playerName !== undefined && props.playerName !== null) ? props.playerName.toUpperCase() : null}
                </h3>
            </div>

            <div id="playerOne">

                <PlayerTable />

            </div>

        </div>

    );
}

export default Player;