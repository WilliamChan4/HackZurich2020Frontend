import React from 'react';
import logo from './logo.png';
// import './App.css';
import 'fontsource-roboto';
import { Container } from "@material-ui/core";
import { VerticalLinearStepper } from './Stepper';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <img src={logo} alt="logo" />
        <VerticalLinearStepper></VerticalLinearStepper>
      </Container>

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
