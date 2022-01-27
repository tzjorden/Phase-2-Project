import '../index.css';
import React, {useEffect, useState} from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";

function App() {

  const [houses, setHouses] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/homes')
    .then(r => r.json())
    .then(setHouses)
  }, [])

  const changeSearchStringInState = searchString => {
    setSearch(searchString)
  }
  
  
  const filteredHouse = () => {
    if (search.length > 0) {
      return houses.filter(house => house.street.toLowerCase().includes(search.toLowerCase()))
    } else {
       return houses
    }
  }

  

  // const filteredPrice = (search) => {    
  //   if(search >= 500000) {
  //     return houses.filter(house => house.price.includes(housePrice));
  //   } else {
  //     return houses;
  //   }
  // }

  // homes.filter(function(filteredHome){ return filteredHome.Price > 2500000 && x.Price < 800000});

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
          <Home  houses={ filteredHouse() } changeSearchStringInState={changeSearchStringInState}  setHouses={setHouses}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
