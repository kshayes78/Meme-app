import React from "react"

function NewMemeCard({ name, url, id }) {
  return (
    <div>
      <img height="100px" width="100px" src={url} alt={name} />
    </div>
  )
}

export default NewMemeCard
