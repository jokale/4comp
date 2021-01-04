import React from 'react';
import logokarma from './logokarma.svg';

class Karma extends React.Component {
    render(){
        return(
            <div id="karma">
                <h3>Karma</h3>
                <p>Regularly evaluates our talent to ensure quality</p>
                <img src={logokarma} id="klogo" alt="logo" />

            </div>
        )
    }
}

export default Karma