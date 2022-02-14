import React, { useState, useEffect } from "react"
import { Route, Switch, NavLink, BrowserRouter } from "react-router-dom"
import Search from "./Search"
import MemeContainer from "./MemeContainer"
import NavBar from "./NavBar"
import MyMemes from "./MyMemes"
import Directions from "./Directions"
import MemeForm from "./MemeForm"

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

  function openForm(id) {
    return
  }

  function hello() {
    console.log("hello")
  }

  return (
    <div>
      <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <MemeForm memes={memes} />
      <BrowserRouter>
        <nav>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="Directions">Directions</NavLink>
          <NavLink to="MyMemes">My Memes</NavLink>
        </nav>
        <Switch>
          <Route path="/mymemes">
            <MyMemes />
          </Route>
          <Route exact path="/">
            <MemeContainer hello={hello} memes={filteredMemeTitles} />
            {/* <Home /> */}
          </Route>
          <Route path="/directions">
            <Directions />
          </Route>
        </Switch>
      </BrowserRouter>

      <Footer />
    </div>
  )
}

export default App
