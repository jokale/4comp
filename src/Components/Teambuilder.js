import React from 'react';
import logoteamb from './logoteamb.svg';

class Teambuilder extends React.Component {
    render(){
        return(
            <div id="Teambuilder">
                <h4>Teambuilder</h4>
                <p>Scans our talent to create an optimal team <br></br>for your project </p>
                <img src={logoteamb} id="s-logo" alt="logo" />

            </div>
        )
    }
}

export default Teambuilder