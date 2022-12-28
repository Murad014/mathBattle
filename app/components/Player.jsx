import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import PropType from 'prop-types';
import {Fragment} from "react";


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
                        <td>{value[0]}</td>
                        <td>{value[1]}</td>
                    </tr>

                );
            })}



            </tbody>

        </table>
    );
}

function Player(props){

    return(

        <div className="gridPlayerOne  for-scroll">
            <div id="playerOne">
                <h3 style={{fontWeight: "bold"}}>
                    {(props.playerName !== undefined && props.playerName !== null) ? props.playerName.toUpperCase() : null}
                </h3>
            </div>

            <div id="playerOne">

                <PlayerTable gamerTable={props.gamerTable}/>

            </div>

        </div>

    );
}

export default Player;