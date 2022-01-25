import React, { useState } from 'react';

function PhotoCard({ plant }) {

  const [isSaved, setIsSaved] = useState(true)
  const toggleOut = () => {
    setIsSaved(!isSaved)

  }
  return ( <div>
     <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isSaved ? (
        <button onClick= {toggleOut} className="primary">Save</button>
      ) : (
        <button onClick= {toggleOut} className="primary" >Saved</button>
      )}
    </li>
  </div>
  )}

export default PhotoCard;