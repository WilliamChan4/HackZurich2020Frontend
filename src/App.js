import React from 'react';
import logo from './logo.png';
// import './App.css';
import 'fontsource-roboto';
import { Method } from './Method';
import { PickedUp } from './PickedUp';
import { Delivered } from './Delivered';
import { Restaurants } from './Restaurants';
import { WebcamComponent } from './Capture';
import { VerticalLinearStepper } from './Stepper';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <VerticalLinearStepper></VerticalLinearStepper>
      {/* <WebcamComponent></WebcamComponent> */}
      <Restaurants></Restaurants>
      <Method></Method>
      <PickedUp></PickedUp>
      <Delivered></Delivered>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
