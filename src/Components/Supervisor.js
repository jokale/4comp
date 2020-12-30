import React from 'react';
import logos from './logos.svg';

class Supervisor extends React.Component {
    render(){
        return(
            <div id="supervisor">
                <h4>Supervisor</h4>
                <p>Monitors activity to identify project roadblocks</p>
                <img src={logos} id="s-logo" alt="logo" />

            </div>
        )
    }
}

export default Supervisor