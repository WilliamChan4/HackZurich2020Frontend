import React, { useState, useLayoutEffect } from 'react';
import { Grid, Card, CardContent, Button, Typography, CardActions } from "@material-ui/core";
import { useCurrentPosition } from 'react-use-geolocation';
import Axios from 'axios';

export function Method(props) {
    const [position, error] = useCurrentPosition();
    const [distances, setDistances] = useState('');

    useLayoutEffect(() => {
        position && Axios.get('http://localhost:3000/api/distance', {
            params: {
              origin_lat: position.coords.latitude,
              origin_lon: position.coords.longitude,
              dest_lat: props.restaurant.geometry.location.lat,
              dest_lon: props.restaurant.geometry.location.lng
            }
            }).then((response) => setDistances(response.data));
    })

    if (!position && !error) {
        return <p>Waiting...</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        (distances && <Grid container spacing={3}>
            <Grid item xs>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">Pick Up</Typography>
                        <Typography variant="body2" component="p">{distances.walking.duration.text} walk</Typography>
                        <Typography variant="body2" component="p">{distances.bicycling.duration.text} bike</Typography>
                        <Typography variant="body2" component="p">Save ${(distances.driving.emission * 0.1).toFixed(2)} on your Zurich health insurance premium.</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small"  variant="contained" color="primary" onClick={props.handleNext}>Select</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">Delivery</Typography>
                        <Typography variant="body2" component="p">{distances.driving.duration.text} estimated delivery</Typography>
                        <Typography variant="body2" component="p">Offset carbon emissions for ${(distances.driving.emission * 0.1).toFixed(2)} with Climeworks</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small"  variant="contained" color="primary" onClick={props.handleNext}>Select</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
        )
    );
}