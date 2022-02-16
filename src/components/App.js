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
// import GlobalStyles from "./styles/Global"

const theme = {
  colors: {
    header: "#000000",
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
      <>
        {/* <MemeForm memes={memes} /> */}

        <BrowserRouter>
          <nav>
            <StyledHeader>
              <h1>
                <NavLink style={{ textDecoration: "none" }} exact to="/">
                  Home
                </NavLink>
                <NavLink style={{ textDecoration: "none" }} to="Directions">
                  Directions
                </NavLink>
                <NavLink style={{ textDecoration: "none" }} to="MyMemes">
                  My Memes
                </NavLink>
              </h1>
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
              <MemeContainer
                memes={filteredMemeTitles}
                addMemesToState={addMemesToState}
              />
              {/* <Home /> */}
            </Route>
            <Route path="/directions">
              <Directions />
            </Route>
          </Switch>
        </BrowserRouter>

        <Footer />
      </>
    </ThemeProvider>
  )
}

export default App
