import React from 'react';

function PhotoCard({ photo }) {
  return ( <div>
     <li className="card">
      <img src={photo.photo} alt={"picture name"} />
      <h4>{photo.photographer}</h4>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  </div>
  )}

export default PhotoCard;