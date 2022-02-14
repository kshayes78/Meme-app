import React from "react"

function MemeCard({ name, url, height, width, box_count }) {
  return (
    <div>
      <h3>{name}</h3>
      <img src={url} alt={name} />
    </div>
  )
}

export default MemeCard
