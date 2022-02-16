import React from "react"
import MemeCard from "./MemeCard"
import { StyledMemes } from "./Styles/MemeContainer.styled"
import { StyledMemeCards } from "./Styles/Memes.styled"

function MemeContainer({ memes, addMemesToState }) {
  const createMemeCards = memes.map((meme) => (
    <div>
      <MemeCard
        key={meme.id}
        id={meme.id}
        name={meme.name}
        url={meme.url}
        width={meme.width}
        height={meme.height}
        addMemestoState={addMemesToState}
        memes={memes}
      />
    </div>
  ))
  return (
    // <StyledMemes>
    // <StyledMemes>
    <div>{createMemeCards}</div>
    // </StyledMemes>
    // </StyledMemes>
  )
}

export default MemeContainer
