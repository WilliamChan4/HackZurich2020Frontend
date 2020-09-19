import React from 'react';
import { Button } from "@material-ui/core";

export function Call(props) {
    return (
        <Button variant="contained" color="primary" onClick={props.handleNext}>Call +1234567890</Button>
    );
}