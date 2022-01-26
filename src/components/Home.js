import React, {useState, useEffect} from "react";
import PhotoCard from "./PhotoCard";
import Search from "./Search";
import NewHouseForm from "./NewHouseForm";


// changeSearchStringInState

function Home ({ houses, changeSearchStringInState }) {
  
  
  return (

    <div className="Home">

      <div className="newForm">
        <NewHouseForm />
      </div>
  <div className="Searchbar">
    
      <Search changeSearchStringInState = {changeSearchStringInState} />
    
  </div>
  <div className="results">
  <div>
    <ul className="cards">
      {houses.map(house => 
        <PhotoCard key={house.id} house={house} />)}
      </ul>
    </div>
  </div>
</div>

  
  );

      }

// }
 


export default Home;