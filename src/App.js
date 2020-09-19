import React from 'react';
import logo from './logo.png';
import './App.css';
import 'fontsource-roboto';
import { Container, Typography, Card, Box } from "@material-ui/core";
import { VerticalLinearStepper } from './Stepper';

function App() {
  return (
      <Container maxWidth="md">
        <Box m={3}>
        <Card>
          <Typography align="center">
            <img src={logo} className="App-logo" alt="logo" />
          </Typography>
          <VerticalLinearStepper></VerticalLinearStepper>
        </Card>
        </Box>
      </Container>
  );
}

export default App;
