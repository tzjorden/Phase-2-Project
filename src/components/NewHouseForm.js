import React, { useState } from 'react';

function NewHouseForm() {

    const [street, setStreet] = useState("Unknown")
    const [image, setImage] = useState("Unknown")
    const [status, setStatus] = useState("Unknown")
    const [price, setPrice] = useState("")
    const [bedRooms, setBedRooms] = useState("")
    const [bathRoom, setbathroom] = useState("")
    const [squareFeet, setsquareFeet] = useState("")

    const handleSubmit = e => {
        // e.preventDefault()
    
        const newHouse = { street, image, status, price, bedRooms, bathRoom, squareFeet }
        console.log("test")
    
        fetch('http://localhost:3000/Homes', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newHouse)
        })
    

    }


    return (
        <div className="form">
          <h2>New House</h2>
    
          <form onSubmit={handleSubmit}>
            <input onChange={e => setStreet(e.target.value)} type="text" name="Street" placeholder="Street" />
            <input onChange={e => setImage(e.target.value)} type="text" name="Image" placeholder="Image URL" />
            <input onChange={e => setPrice(e.target.value)} type="number" name="Price" step="0.01" placeholder="Price" />
            <input onChange={e => setBedRooms(e.target.value)} type="text" name="Bedrooms" step="0.01" placeholder="Number of Rooms" />
            <input onChange={e => setsquareFeet(e.target.value)} type="text" name="Squarefeet" step="0.01" placeholder="Squarefeet" />
            <button type="submit">Add House</button>
    
          </form>
        </div>
      );
    }
    

export default NewHouseForm;