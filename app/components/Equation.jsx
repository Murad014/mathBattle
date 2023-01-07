import * as React from 'react';
import generateEquation from '../utils/Helper';
/*

<Equation   equation={this.state.equation} 
            limit={this.state.roundLimit}
            playerOneScore={this.state.playerOneTable.length}
            playerTwoScore={this.state.playerTwoTable.length}
            
            />
*/

class Equation extends React.Component{

    constructor(props){
        super(props);


    }

    render() {
        let {limit, playerOneScore, playerTwoScore, equation, playerOneName, playerTwoName} = this.props;
        
        if(limit == playerOneScore + playerTwoScore){
            equation = (playerOneScore > playerTwoScore) ?  playerOneName + " is Winner!" :
                                                            playerTwoName + " is Winner!";

            equation = (playerOneScore == playerTwoScore) ? "DRAW" : equation;
        }

        return (
            <div className="gridHead" id="equation">
                <p id='equation'>{equation}</p>
            </div>
        );
    }
}



export default Equation;