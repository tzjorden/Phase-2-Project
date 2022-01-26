import '../index.css';
import React, {useEffect, useState} from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import PhotoCard from "./PhotoCard";

function App() {

  const [Houses, setHouses] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/homes').then(r => r.json())
    .then( setHouses )
  }, [])

  
  

  const changeSearchStringInState = searchString => {
    setSearch(searchString)
  }
  
  
  const filteredPlants = () => {
    if (search.length > 0) {
      return Houses.filter(house => house.street.toLowerCase().includes(search.toLowerCase()))
    } else {
       return Houses
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
          <Home  Houses={ filteredPlants() } changeSearchStringInState={changeSearchStringInState} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
