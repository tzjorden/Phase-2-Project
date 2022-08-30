import React, {useState, useEffect} from "react";
import PhotoCard from "./PhotoCard";
import Search from "./Search";
import NewHouseForm from "./NewHouseForm";


// changeSearchStringInState
// const renderHouses = (l, dl) =>
// <PhotoCard key={l.id} house={l} deleteListing={dl} setHouses={setHouses}/>

function Home ({ houses, changeSearchStringInState, setHouses, style}) {
  const renderHouses = (l) =>
<PhotoCard key={l.id} house={l}  setHouses={setHouses} houses={houses} />
  
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
      {houses.map((houses) => renderHouses(houses))}
      </ul>
    </div>
  </div>
</div>
  );
  }

export default Home;