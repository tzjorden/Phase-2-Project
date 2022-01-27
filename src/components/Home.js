import React, {useState, useEffect} from "react";
import PhotoCard from "./PhotoCard";
import Search from "./Search";
import NewHouseForm from "./NewHouseForm";


// changeSearchStringInState
const renderHouses = (l, dl) =>
<PhotoCard key={l.id} house={l} deleteListing={dl}/>

function Home ({ houses, changeSearchStringInState, deleteListing}) {
  
  
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
      {houses.map((houses) => renderHouses(houses, deleteListing))}
      </ul>
    </div>
  </div>
</div>

  
  );

      }

// }
 


export default Home;