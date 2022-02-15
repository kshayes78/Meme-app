import React, { useState } from "react"
import Popup from "./Popup"

function MemeCard({
  id,
  hello,
  name,
  url,
  height,
  width,
  addMemesToState,
  memes,
}) {
  const [popUp, setPopUp] = useState(false)

  function handleClick() {
    setPopUp((popUp) => !popUp)
  }

  return (
    <div onClick={handleClick}>
      <h3>{name}</h3>
      <img height="100px" width="100px" src={url} alt={name} />

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
