import React from "react"

function NewMemeCard({ name, url, id }) {
  return <img height="250px" width="250px" src={url} alt={name} />
}

export default NewMemeCard
