import React, { useState } from "react"
import Popup from "./Popup"

function MemeCard({ id, hello, name, url, addMemesToState, memes }) {
  const [popUp, setPopUp] = useState(false)

  function handleClick() {
    setPopUp((popUp) => !popUp)
  }

  return (
    <div onClick={handleClick}>
      <h3>{name}</h3>
      <img height="200px" width="200px" src={url} alt={name} />

      {popUp ? (
        <Popup
          name={name}
          url={url}
          handleClick={handleClick}
          addMemesToState={addMemesToState}
          memes={memes}
          id={id}
        />
      ) : null}
    </div>
  )
}

export default MemeCard
