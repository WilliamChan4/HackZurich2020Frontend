import React, { useState, useLayoutEffect } from 'react';
import { Button } from "@material-ui/core";
import Axios from 'axios';

export function Call(props) {
    const [phone, setPhone] = useState('');

    useLayoutEffect(() => {
        Axios.get(`http://localhost:3000/api/details/${props.restaurant.place_id}`).then((response) => setPhone(response.data));
    });

    return (
        <Button variant="contained" color="primary" onClick={props.handleNext}>Call {phone && phone.result.international_phone_number}</Button>
    );
}