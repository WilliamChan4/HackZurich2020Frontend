import React, { useState } from 'react';
import SearchBar from "material-ui-search-bar";
import Axios from 'axios';

function getRestaurants() {
    Axios.get("http://localhost:3000/api/nearby?lat=51.053820&lon=3.722270").then((response) => console.log(response.data));
}

export function Search() {
    const [state, setState] = useState('');

    return (
        <SearchBar
          value={state.value}
          onChange={(newValue) => setState({ value: newValue })}
        //   onRequestSearch={() => console.log(state.value)}
          onRequestSearch={() => getRestaurants()}
        />
      );
}