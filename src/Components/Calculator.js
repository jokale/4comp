import React from 'react';
import logocalc from './logocalc.svg';

class Calculator extends React.Component {
    render(){
        return(
            <div id="Calc">
                <h3>Calculator </h3>
                <p>Uses data from past projects to provide better project estimates</p>
                <img src={logocalc} id="slogo" alt="logo" />

            </div>
        )
    }
}

export default Calculator