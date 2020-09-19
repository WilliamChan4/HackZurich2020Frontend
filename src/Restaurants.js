import React, { useState } from 'react';
import { Grid, Card, CardContent, Button, Typography, CardActions, CardMedia } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { useCurrentPosition } from 'react-use-geolocation';
import SearchBar from "material-ui-search-bar";
import Axios from 'axios';
import { AttachMoney } from '@material-ui/icons';

function getRestaurants(search, position, setList) {
    Axios.get('http://localhost:3000/api/nearby', {
        params: {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          keyword: search
        }
        }).then((response) => setList(response.data));
}

function setItem(item, setRestaurant, handleNext) {
    setRestaurant(item);
    handleNext();
}

export function Restaurants(props) {
    const [list, setList] = useState('');
    const [search, setSearch] = useState('');
    const [position, error] = useCurrentPosition();

    if (!position && !error) {
        return <p>Waiting...</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <div>
            <Grid container direction="column" justify="center" alignItems="stretch" spacing={3}>
                <Grid item>
                <SearchBar
                    value={search}
                    onChange={(newSearch) => setSearch(newSearch)}
                    onRequestSearch={() => setList(getRestaurants(search, position, setList))}
                    />
                </Grid>
            </Grid>
            <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
                { list && list.map((item) =>
                    <Grid item key={item.place_id}>
                        <Card>
                            <CardMedia>
                                <img src={`http://localhost:3000/api/photo/${item.photos[0].photo_reference}`} alt={item.name}/> 
                            </CardMedia>  

                            <CardContent>
                                <Typography variant="h5" component="h2">{item.name}</Typography>
                                <Typography variant="body2" component="p">{item.vicinity}</Typography>
                                <Rating name="half-rating-read" defaultValue={item.rating} precision={0.5} readOnly />
                                {Array(item.price_level).fill(<AttachMoney/>)}
                            </CardContent>

                            <CardActions>
                                <Button size="small" variant="contained" color="primary" onClick={() => setItem(item, props.setRestaurant, props.handleNext)}>Select</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </div>
    );
}