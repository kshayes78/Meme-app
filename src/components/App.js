import React, { useState, useEffect } from "react"
import { Route, Switch, NavLink, BrowserRouter } from "react-router-dom"
import Search from "./Search"
import MemeContainer from "./MemeContainer"
import NavBar from "./NavBar"
import MyMemes from "./MyMemes"
import Directions from "./Directions"
import { ThemeProvider } from "styled-components"
import Footer from "./Footer.js"
import { StyledHeader } from "./Styles/Header.styled"
import GlobalStyles from "./Styles/Global"
import { StyledApp } from "./Styles/App.styled"
import { StyledMemes } from "./Styles/MemeContainer.styled"
import { StyledSearch } from "./Styles/Search.styled"
import youcandoit from "./images/youcandoit.PNG"
import { StyledMyMemeContainer } from "./Styles/MyMemeContainer.styled"

const theme = {
  colors: {
    header: "#FDEFF4",
    color: "#FFFFFF",
    body: "#fff",
    footer: "#003333",
  },
}

function App() {
  const [memes, setMemes] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [myMemesArray, setMyMemesArray] = useState([])

  const filteredMemeTitles = memes.filter((meme) =>
    meme.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => setMemes(response.data.memes))
  }, [])

  function addMemesToState(memeObj) {
    setMyMemesArray([...myMemesArray, memeObj])
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* <MemeForm memes={memes} /> */}

        <BrowserRouter>
          <nav>
            <GlobalStyles />
            <StyledHeader>
              <h1>
                👑 <em>Queen</em> of Memes 👑
              </h1>
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
              <img src={youcandoit} alt="youcandoit" />
            </StyledHeader>
          </nav>
          {/* <StyledApp> */}
          <Switch>
            <Route path="/mymemes">
              <StyledMyMemeContainer>
                <MyMemes
                  myMemesArray={myMemesArray}
                  setMyMemesArray={setMyMemesArray}
                />
              </StyledMyMemeContainer>
            </Route>
            <Route exact path="/">
              <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
              <StyledMemes>
                <MemeContainer
                  memes={filteredMemeTitles}
                  addMemesToState={addMemesToState}
                />
              </StyledMemes>
              {/* <Home /> */}
            </Route>
            <Route path="/directions">
              <Directions />
            </Route>
          </Switch>
          {/* </StyledApp> */}
        </BrowserRouter>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
