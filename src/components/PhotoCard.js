import React, { useState, useEffect } from 'react';


function PhotoCard({ house, setHouses, houses }) {

  const [style, setStyle] = useState("cont")
  const [isFavorited, setIsFavorited] = useState(true)
  const toggleOut = () => {
    setIsFavorited(!isFavorited)
    // (setStyle("cont2")
    if(style == "cont") {
      return (setStyle("cont2"))
    } else {
      return (setStyle("cont"))
    }
  }
    function handleDeleteClick() {
      fetch(`http://localhost:3000/homes/${house.id}`, {
        method: "DELETE"
      })
      .then(() => handleDeleteHouse(house.id))
    }

    function handleDeleteHouse(id) {
      const updatedHouses = houses.filter((house) => {
        return house.id !== id
      })
      setHouses(updatedHouses)
    
    }
    


  
  return ( <div className={style}>
     <li className="card">
      <img src={house.image} alt={"House name"} />
      <h4>Price: {house.price}</h4>
      <p>{house.squareFeet} sqft</p>
      <p style={{textTransform: 'capitalize'}}>Area: {house.street}</p>
      <p >Bedrooms: {house.bedrooms}.</p>
      {isFavorited ? (
        <button onClick= {toggleOut} className="primary">Favorite</button>
      ) : (
        <button onClick= {toggleOut} className="primary" >Favorited!</button>
      )}
      <button onClick={handleDeleteClick} className="emoji-button delete perm1">🗑1</button>
    </li>
  </div>
  )}
  
export default PhotoCard;