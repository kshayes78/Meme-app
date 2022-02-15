import React, { useState, useEffect } from "react"

function MyMemes() {
  const [myMemes, setMyMemes] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/MyMemes")
      .then((response) => response.json())
      .then(setMyMemes)
  }, [])

  return (
    <div>
      <h1>My Memes</h1>
    </div>
  )
}

export default MyMemes
