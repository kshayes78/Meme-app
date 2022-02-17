import React from "react"
import MemeCard from "./MemeCard"
import { MyMemeGrid } from "./Styles/MyMemeContainer.styled"

function MemeContainer({ memes, addMemesToState }) {
  const createMemeCards = memes.map((meme) => (
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
  ))
  return (
    <MyMemeGrid>
      <>{createMemeCards}</>
    </MyMemeGrid>
  )
}

export default MemeContainer
