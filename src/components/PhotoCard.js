import React, { useState } from 'react';


function PhotoCard({ house }) {


  const [isSaved, setIsSaved] = useState(true)
  const toggleOut = () => {
    setIsSaved(!isSaved)


  }
  return ( <div>
     <li className="card">
      <img src={house.image} alt={"House name"} />
      <h4>Price: {house.price}</h4>
      <p>{house.squareFeet} sqft</p>
      <p style={{textTransform: 'capitalize'}}>Area: {house.street}</p>
      <p >Bedrooms: {house.bedrooms}, Bathrooms: {house.bedrooms}.</p>
      {isSaved ? (
        <button onClick= {toggleOut} className="primary">Save</button>
      ) : (
        <button onClick= {toggleOut} className="primary" >Saved</button>
      )}
    </li>
  </div>
  )}

export default PhotoCard;