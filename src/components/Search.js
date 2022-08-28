import React from "react";

function Search({ changeSearchStringInState }) {
    
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Houses: </label>
      <input
        type="text"
        id="search"
        placeholder="Type a area to search..."
        onChange={(e) => changeSearchStringInState( e.target.value)}
      />
    </div>
  );
}

export default Search;