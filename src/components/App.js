import React, { useState, useEffect } from "react";
import { Route, Switch, NavLink, BrowserRouter } from "react-router-dom";
import Search from "./Search";
import MemeContainer from "./MemeContainer";

import MyMemes from "./MyMemes";
import Directions from "./Directions";

import Footer from "./Footer.js";
import { StyledHeader } from "./Styles/Header.styled";
import { MemeGrid } from "./Styles/MemeContainer.styled";

import { Container } from "./Styles/App.styled";
import hero2 from "./images/hero2.png";
import brickwall from "./images/brickwall.jpg";

function App() {
  const [memes, setMemes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [myMemesArray, setMyMemesArray] = useState([]);

  const filteredMemeTitles = memes.filter((meme) =>
    meme.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => setMemes(response.data.memes));
  }, []);

  function addMemesToState(memeObj) {
    setMyMemesArray([...myMemesArray, memeObj]);
  }

  return (
    <Container>
      <>
        {/* <MemeForm memes={memes} /> */}

        <BrowserRouter>
          <nav>
            <StyledHeader>
              <img
                className="logo"
                style={{ height: "200px" }}
                src={hero2}
                alt="hero"
              />

              <h2>
                <NavLink style={{ textDecoration: "none" }} exact to="/">
                  Home
                </NavLink>
                <NavLink style={{ textDecoration: "none" }} to="Directions">
                  FAQ
                </NavLink>
                <NavLink style={{ textDecoration: "none" }} to="MyMemes">
                  My Memes
                </NavLink>
              </h2>
              {/* <img src={youcandoit} alt="youcandoit" /> */}
            </StyledHeader>
          </nav>
          <Switch>
            <Route path="/mymemes">
              <MyMemes
                myMemesArray={myMemesArray}
                setMyMemesArray={setMyMemesArray}
              />
            </Route>
            <Route exact path="/">
              <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
              <MemeGrid>
                <MemeContainer
                  memes={filteredMemeTitles}
                  addMemesToState={addMemesToState}
                />
              </MemeGrid>
              {/* <Home /> */}
            </Route>
            <Route path="/directions">
              <Directions />
            </Route>
          </Switch>
        </BrowserRouter>
        <div class="bg_image"></div>

        <Footer />
      </>
    </Container>
  );
}

export default App;
