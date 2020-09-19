import React from 'react';
import { Grid, Container, Card, CardContent, Button, Typography, CardActions } from "@material-ui/core";

export function Method() {
    return (
        <Container maxWidth="sm">
            <Grid container spacing={3}>
                <Grid item xs>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">Pick Up</Typography>
                            <Typography variant="body2" component="p">500m</Typography>
                            <Typography variant="body2" component="p">15 minutes walk</Typography>
                            <Typography variant="body2" component="p">5 minutes bike</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">Select</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">Delivery</Typography>
                            <Typography variant="body2" component="p">Expected 15 minutes delivery time</Typography>
                            <Typography variant="body2" component="p">Offset CO2 emissions for 20c</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">Select</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}