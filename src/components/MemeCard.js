import React, { useState } from "react";
import Popup from "./Popup";
// import { StyledMemeCards } from "./Styles/Memes.styled";

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
  const [popUp, setPopUp] = useState(false);

  function handleClick() {
    setPopUp((popUp) => !popUp);
  }

  return (
    // <StyledMemeCards>
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
    // </StyledMemeCards>
  );
}

export default MemeCard;
