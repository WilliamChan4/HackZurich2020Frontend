import React from 'react';
import logo from './logo.png';
// import './App.css';
import 'fontsource-roboto';
import { VerticalLinearStepper } from './Stepper';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <VerticalLinearStepper></VerticalLinearStepper>

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
