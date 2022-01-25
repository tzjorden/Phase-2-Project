import React, {useState, useEffect} from "react";
import PhotoCard from "./PhotoCard";
import Search from "./Search";


// changeSearchStringInState

function Home ({ plants, changeSearchStringInState }) {
  

  
  
  

  return (

    <ul className="cards">
      <div> 
        <Search changeSearchStringInState={changeSearchStringInState} />
      </div>
      
    <div className="searchbar"><ul className="cards">
      {plants.map(plant => 
      <PhotoCard key={plant.id} plant={plant} />)}</ul>
    </div>

      
      </ul>
  );

      }

// }
 


export default Home;