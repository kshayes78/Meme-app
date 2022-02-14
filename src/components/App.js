import React, { useState, useEffect } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Search from "./Search";
import MemeContainer from "./MemeContainer";
import NavBar from "./NavBar";

function App() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => setMemes(response.data.memes));
  }, []);

  return (
    <div className="App">
      <nav>
        <h1>Meme Creator</h1>
        <NavLink exact to="/">
          {" "}
          Home{" "}
        </NavLink>
        <NavLink to="/my-memes">My Memes</NavLink>
        <NavLink to="/directions">Directions</NavLink>
      </nav>
      <Switch>
        <Route exactpath="/">
          <Home />
        </Route>
        <Route path="/about">
          <Directions />
        </Route>
        <Route path="/contact">
          <MyMemes />
        </Route>
      </Switch>
      <NavBar />
      <MemeContainer memes={memes} />
      <Search />
    </div>
  );
}

export default App;
