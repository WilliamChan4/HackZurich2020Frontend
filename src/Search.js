import React, { useState } from 'react';
import SearchBar from "material-ui-search-bar";
import Axios from 'axios';

function getRestaurants(setKeyword) {
    Axios.get("http://localhost:3000/api/nearby?lat=51.053820&lon=3.722270").then((response) => console.log(response.data));
}

export function Search(props) {
    const [keyword, setKeyword] = useState('');

    return (
        <SearchBar 
          value={keyword} 
          onChange={(newValue) => setKeyword(newValue)}
        //   onRequestSearch={() => console.log(state.value)}
          onRequestSearch={() => props.setList(getRestaurants())}
        />
      );
}