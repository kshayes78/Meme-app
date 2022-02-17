import React from "react"
import MyMemeCard from "./MyMemeCard"
import { MyMemeGrid } from "./Styles/MyMemeContainer.styled"

function MyMemesContainer({ myMemes }) {
  const createMemeCards = myMemes.map((meme) => (
    <MyMemeCard key={meme.id} id={meme.id} name={meme.name} url={meme.url} />
  ))
  return (
    <MyMemeGrid>
      <>{createMemeCards}</>
    </MyMemeGrid>
  )
}

export default MyMemesContainer
