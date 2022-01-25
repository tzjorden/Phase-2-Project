import React, {useState, useEffect} from "react";
import PhotoCard from "./PhotoCard";
import Search from "./Search";
import NewHouseForm from "./NewHouseForm";


// changeSearchStringInState

function Home ({ Houses, changeSearchStringInState }) {
  

  
  
  

  return (

    <div class="Home">

      <div class="newForm">
        <NewHouseForm />
      </div>
  <div class="Searchbar">
    
      <Search changeSearchStringInState={changeSearchStringInState} />
    
  </div>
  <div class="results">
 <div><ul className="cards">
      {Houses.map(Houses => 
      <PhotoCard key={Houses.id} Houses={Houses} />)}</ul>
    </div>
  </div>
</div>

    /* // <ul className="cards">
    //   <div> 
    //     <Search changeSearchStringInState={changeSearchStringInState} />
    //   </div>
      
    // <div id="searchbar"><ul className="cards">
    //   {plants.map(plant =>  */
    //   <PhotoCard key={plant.id} plant={plant} />)}</ul>
    // </div>

      
    //   </ul>
  );

      }

// }
 


export default Home;