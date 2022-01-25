import React from 'react';

function PhotoCard({ plant }) {
  return ( <div>
     <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  </div>
  )}

export default PhotoCard;