import React, { useState } from 'react';

function PhotoCard({ Houses }) {

  const [isSaved, setIsSaved] = useState(true)
  const toggleOut = () => {
    setIsSaved(!isSaved)

  }
  return ( <div>
     <li className="card">
      <img src={Houses.image} alt={"plant name"} />
      <h4>{Houses.name}</h4>
      <p>Price: {Houses.price}</p>
      {isSaved ? (
        <button onClick= {toggleOut} className="primary">Save</button>
      ) : (
        <button onClick= {toggleOut} className="primary" >Saved</button>
      )}
    </li>
  </div>
  )}

export default PhotoCard;