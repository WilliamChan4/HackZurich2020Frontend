import React, { useState } from 'react';
import SearchBar from "material-ui-search-bar";

export function Search() {
    const [state, setState] = useState('');

    return (
        <SearchBar
          value={state.value}
          onChange={(newValue) => setState({ value: newValue })}
        />
      );
}