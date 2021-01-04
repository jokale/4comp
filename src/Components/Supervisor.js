import React from 'react';
import logos from './logos.svg';

class Supervisor extends React.Component {
    render(){
        return(
            <div id="super">
                <h3>Supervisor</h3>
                <p>Monitors activity to identify project roadblocks</p>
                <img src={logos} id="slogo" alt="logo" />

            </div>
        )
    }
}

export default Supervisor