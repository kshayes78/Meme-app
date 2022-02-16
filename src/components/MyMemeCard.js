import React from "react"
// import {StyledMyMemeCard} from "./Styles/MyMemeCardStyled.styled"

function NewMemeCard({ name, url, id }) {
  return (
    // <StyledMyMemeCard>
    <div>
      <a id="download" href={url} download={{ url }.png}>
        <img height="100px" width="100px" src={url} alt={name} />
      </a>
    </div>
    // </StyledMyMemeCard>
  )
}

export default NewMemeCard
