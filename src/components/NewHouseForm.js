import React, { useState } from 'react';

function NewHouseForm() {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [price, setPrice] = useState("")

    const handleSubmit = e => {
        // e.preventDefault()
    
        const newHouse = { name, image, price, }
        console.log("test")
    
        fetch('http://localhost:3000/plants', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newHouse)
        })
    

    }


    return (
        <div className="form">
          <h2>New House</h2>
    
          <form onSubmit={handleSubmit}>
            <input onChange={e => setName(e.target.value)} type="text" name="name" placeholder="House name" />
            <input onChange={e => setImage(e.target.value)} type="text" name="image" placeholder="Image URL" />
            <input onChange={e => setPrice(e.target.value)} type="number" name="price" step="0.01" placeholder="Price" />
            <button type="submit">Add House</button>
    
          </form>
        </div>
      );
    }
    

export default NewHouseForm;