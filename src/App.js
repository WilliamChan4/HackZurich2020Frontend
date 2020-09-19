import React from 'react';
import logo from './logo.png';
// import './App.css';
import 'fontsource-roboto';
import { Method } from './Method.js';
import { PickedUp } from './PickedUp.js';
import { Delivered } from './Delivered.js';
import { Restaurants } from './Restaurants';

function App() {
  return (
    <div className="App">
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
