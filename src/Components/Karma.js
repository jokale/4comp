import React from 'react';
import logokarma from './logokarma.svg';

class Karma extends React.Component {
    render(){
        return(
            <div id="Karma">
                <h4>Karma</h4>
                <p>Regularly evaluates our talent to ensure quality</p>
                <img src={logokarma} id="s-logo" alt="logo" />

            </div>
        )
    }
}

export default Karma