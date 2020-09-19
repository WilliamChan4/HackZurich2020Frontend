import React from 'react';
import { Grid, Container, Card, CardContent, Button, Typography, CardActions } from "@material-ui/core";
import { Search } from './Search';

export function Restaurants() {
    return (
        <Container maxWidth="sm">
            <Search></Search>
            <Grid container direction="column" justify="center" alignItems="stretch" spacing={3}>
                <Grid item>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">Restaurant 1</Typography>
                            <Typography variant="body2" component="p">Mexican</Typography>
                            <Typography variant="body2" component="p">500m away</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">Select</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">Restaurant 2</Typography>
                            <Typography variant="body2" component="p">Caribbean</Typography>
                            <Typography variant="body2" component="p">450m</Typography>
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