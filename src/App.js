import React from 'react';
import logo from './logo.png';
import './App.css';
import 'fontsource-roboto';
import { Container, Typography, Card } from "@material-ui/core";
import { VerticalLinearStepper } from './Stepper';

function App() {
  return (
      <Container maxWidth="sm">
        <Card>
          <Typography align="center">
            <img src={logo} className="App-logo" alt="logo" />
          </Typography>
          <VerticalLinearStepper></VerticalLinearStepper>
        </Card>
      </Container>
  );
}

export default App;
