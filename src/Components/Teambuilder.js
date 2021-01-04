import React from 'react';
import logoteamb from './logoteamb.svg';

class Teambuilder extends React.Component {
    render(){
        return(
            <div id="Teambuilder">
                <br></br>
                <h3 id="tb">Team Builder</h3>
                <p>Scans our talent to create an optimal team <br></br>for your project </p>
                <img src={logoteamb} id="tblogo" alt="logo" />

            </div>
        )
    }
}

export default Teambuilder