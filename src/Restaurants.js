import React from 'react';
import { Grid, Card, CardContent, Button, Typography, CardActions } from "@material-ui/core";
import { Search } from './Search';

export function Restaurants(props) {
    const [list, setList] = React.useState('');

    return (
        <Grid container direction="column" justify="center" alignItems="stretch" spacing={3}>
            <Grid item>
                <Search setList={setList} />
            </Grid>
            <Grid item>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">Restaurant 1</Typography>
                        <Typography variant="body2" component="p">Mexican</Typography>
                        <Typography variant="body2" component="p">500m away</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" variant="contained" color="primary" onClick={props.handleNext}>Select</Button>
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
                        <Button size="small" variant="contained" color="primary" onClick={props.handleNext}>Select</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}