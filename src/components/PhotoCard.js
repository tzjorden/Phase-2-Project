import React, { useState } from 'react';


function PhotoCard({ house }) {

  const [style, setStyle] = useState("cont")
  const [isFavorited, setIsFavorited] = useState(true)
  const toggleOut = () => {
    setIsFavorited(!isFavorited)
    setStyle("cont2")



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
        <button onClick= {toggleOut} className="primary" >Favorited</button>
      )}
    </li>
  </div>
  )}

export default PhotoCard;