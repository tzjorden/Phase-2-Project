import '../index.css';
import React, {useEffect, useState} from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";

function App() {

  const [photos, setPhotos] = useState([])
  const [search, setSearch] = useState('')
  


                                    //  search?query=${search}
  useEffect(() => {
    fetch(`https://api.pexels.com/v1/curated?per_page=1`, {
      headers: {
        Authorization: "563492ad6f91700001000001e63cf076d54e4c31b63b3c036b3f3cf5"
    } }).then(r => r.json()).then ( setPhotos )
  }, [])
  
  console.log(photos.photographer)
  const changeSearchStringInState = searchString => {
    setSearch(searchString)
  }

  const filteredPhotos = () => {
    if (search.length > 0) {
      return photos.filter(photo => photo.photographer.includes(search))
    } else {
       return photos
    }

  }
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home photos={ filteredPhotos() } changeSearchStringInState={changeSearchStringInState}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
