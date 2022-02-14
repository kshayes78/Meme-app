import React, { useState, useEffect } from "react"
import { Route, Switch, NavLink } from "react-router-dom"
import Search from "./Search"
import MemeContainer from "./MemeContainer"
import NavBar from "./NavBar"
import MyMemes from "./MyMemes"
import Directions from "./Directions"
import Home from "./Home"
import Footer from "./Footer.js"

function App() {
  const [memes, setMemes] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const filteredMemeTitles = memes.filter((meme) =>
    meme.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => setMemes(response.data.memes))
  }, [])

  return (
    <div>
      {/* <NavBar /> */}

      <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />

      <Switch>
        <Route path="/mymemes">
          <MyMemes />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/directions">
          <Directions />
        </Route>
      </Switch>

      <MemeContainer memes={filteredMemeTitles} />
      <Footer />
    </div>
  )
}

export default App
