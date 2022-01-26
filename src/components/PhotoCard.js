import React, { useState } from 'react';


function PhotoCard({ Houses }) {

    
  const [isSaved, setIsSaved] = useState(true)
  const toggleOut = () => {
    setIsSaved(!isSaved)


  }
  return ( <div>
     <li className="card">
      <img src={Houses.image} alt={"House name"} />
      <h4>Price: {Houses.price}</h4>
      <p>{Houses.squareFeet} sqft</p>
      <p style={{textTransform: 'capitalize'}}>Status: {Houses.status}</p>
      <p style={{textTransform: 'capitalize'}}>Area: {Houses.street}</p>
      <p >Bedrooms: {Houses.bedrooms}, Bathrooms: {Houses.bathrooms}.</p>
      {isSaved ? (
        <button onClick= {toggleOut} className="primary">Save</button>
      ) : (
        <button onClick= {toggleOut} className="primary" >Saved</button>
      )}
    </li>
  </div>
  )}

export default PhotoCard;