import React, { useState, useEffect } from 'react';


function PhotoCard({ house, setHouses, houses }) {


  const [styleLikes, setStyleLikes] = useState("likes")
  const [style, setStyle] = useState("cont")
  const [isFavorited, setIsFavorited] = useState(true)
  const [houseLikes, setHouseLikes] = useState()
  const toggleOut = () => {
    setIsFavorited(!isFavorited)

    
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

    function handleLikes() {
      setHouseLikes(houseLikes + 1)

      fetch(`http://localhost:3000/homes/${house.id}`, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({likes: house.likes + 1})
      })
    
    .then((res) => res.json())
    .then((updatedItem) => handleUpdateLikes(updatedItem))
    }

    function handleUpdateLikes(updatedItem) {
      const updatedItems = houses.map((house) => {
        if(house.id === updatedItem.id) {
          return updatedItem;
        } else {
          return house;
        }
      });
      setHouses(updatedItems);
        if (house.likes >= 0) {
          setStyleLikes("likes2")
        }
      
    }
    
    
  


  
  return ( <div className={style}>
     <li className="card">
      <img src={house.image} alt={"House name"} />
      <h4>Price: ${house.price}</h4>
      <p>{house.squareFeet} sqft</p>
      <p style={{textTransform: 'capitalize'}}>Area: {house.street}</p>
      <p >Bedrooms: {house.bedrooms}.</p>
      <p className={styleLikes}>Likes: {house.likes}.</p>
      {isFavorited ? (
        <button onClick= {toggleOut} className="primary">Favorite</button>
      ) : (
        <button onClick= {toggleOut} className="primary" >Favorited!</button>
      )}
      <button onClick={handleDeleteClick} className="emoji-button delete perm">🗑</button>
      <button onClick={handleLikes} className="like-button">Like</button>
    </li>
  </div>
  )}
  
export default PhotoCard;
