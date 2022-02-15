import React from "react"
import MyMemeCard from "./MyMemeCard"

function MyMemesContainer({ myMemes }) {
  const createMemeCards = myMemes.map((meme) => (
    <MyMemeCard key={meme.id} id={meme.id} name={meme.name} url={meme.url} />
  ))
  return <div>{createMemeCards}</div>
}

export default MyMemesContainer
