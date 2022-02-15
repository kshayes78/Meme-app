import React, { useState } from "react"
import Popup from "./Popup"

function MemeCard({ hello, name, url, height, width, box_count }) {
  const [popUp, setPopUp] = useState(false)

  function handleClick() {
    setPopUp((popUp) => !popUp)
  }

  return (
    <div onClick={handleClick}>
      <h3>{name}</h3>
      <img height="100px" width="100px" src={url} alt={name} />

      {popUp ? <Popup url={url} /> : null}
    </div>
  )
}

export default MemeCard
