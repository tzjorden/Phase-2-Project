import React from "react";
import PhotoCard from "./PhotoCard";
import Search from "./Search";

function Home({ photos, changeSearchStringInState }) {

  return (

    <ul className="cards">
      
    <div className="searchbar">
      <label htmlFor="search">Search Photos:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => changeSearchStringInState( e.target.value)}
      />
    </div>



      <div>
      {photos.map(photo => 
      <PhotoCard key={photo.id} photo={photo} />)}
      </div>
      
      </ul>
  );



}
 


export default Home;