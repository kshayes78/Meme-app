import React from "react"

function MemeCard({ name, url, height, width, box_count }) {


  return (
    <div>
      <h3>{name}</h3>
      <img src={url} alt={name} onClick = {handleClick}/>
    </div>
  )
}

export default MemeCard
