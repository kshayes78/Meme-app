import React from "react"
import MyMemeCard from "./MyMemeCard"
import { StyledMyMemeCard } from "./Styles/MyMemeCard.styled"

function MyMemesContainer({ myMemes }) {
  const createMemeCards = myMemes.map((meme) => (
    <MyMemeCard key={meme.id} id={meme.id} name={meme.name} url={meme.url} />
  ))
  return (
    <StyledMyMemeCard>
      {" "}
      <div>{createMemeCards} </div>
    </StyledMyMemeCard>
  )
}

export default MyMemesContainer
