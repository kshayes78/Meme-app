import React from "react"
import MemeCard from "./MemeCard"

function MemeContainer({ hello, filteredMemeTitles, memes, addMemesToState }) {
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
  return <div>{createMemeCards}</div>
}

export default MemeContainer
