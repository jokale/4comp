import React from 'react'
import './App.css';
import Calculator from './Components/Calculator';
import Karma from './Components/Karma';
import Supervisor from './Components/Supervisor';
import Teambuilder from './Components/Teambuilder';

class App extends React.Component {
  render(){return (
    <div className="App">
      
      <h3 id="skinny">Reliable, effecient delivery</h3>
      <h3 id="bold">Powered by Technology</h3>
      <h6 id="skinny"> Our Artificial intelligence powered by tools use millions of porject data <br></br>points to ensure that your project is successful</h6>
      {/* <Karma/>
      <Calculator/>
      <Supervisor/>
      <Teambuilder/> */}
    </div>
  );
}
}

export default App;
