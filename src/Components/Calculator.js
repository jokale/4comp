import React from 'react';
import logocalc from './logocalc.svg';

class Calculator extends React.Component {
    render(){
        return(
            <div id="Calculator
        ">
                <h4>Calculator </h4>
                <p>Uses data from past projects to provide better project estimates</p>
                <img src={logocalc} id="s-logo" alt="logo" />

            </div>
        )
    }
}

export default Calculator