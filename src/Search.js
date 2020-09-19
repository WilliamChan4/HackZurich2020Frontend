import React, { useState } from 'react';
import SearchBar from "material-ui-search-bar";
import { useCurrentPosition } from 'react-use-geolocation';
import Axios from 'axios';

function getRestaurants(search, position) {
    Axios.get('http://localhost:3000/api/nearby', {
        params: {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          keyword: search
        }
        }).then((response) => console.log(response.data));
}

export function Search(props) {
    const [search, setSearch] = useState('');
    const [position, error] = useCurrentPosition();

    if (!position && !error) {
        return <p>Waiting...</p>;
    }

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <SearchBar 
          value={search}
          onChange={(newSearch) => setSearch(newSearch)}
          onRequestSearch={() => props.setList(getRestaurants(search, position))}
        />
      );
}