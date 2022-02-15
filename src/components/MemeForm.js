import React, { useState } from "react"

function MemeForm({ id, url, memes, name, handleClick, addMemesToState }) {
  const [topText, setTopText] = useState("")
  const [bottomText, setBottomText] = useState("")

  const user = "nicolecandiotti"
  const password = "ReactProject"

  const objectToQueryParam = (obj) => {
    const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`)
    return "?" + params.join(`&`)
  }

  // const myMemeObj = {
  //   name: name,
  //   url: url,
  //   topText: { topText },
  //   bottomText: { bottomText },
  // }

  function handleSubmit(e) {
    e.preventDefault()
    handleClick()
    // addMemesToState(myMemeObj)
    const params = {
      template_id: id,
      text0: topText,
      text1: bottomText,
      username: user,
      password: password,
    }

    // console.log(objectToQueryParam(params))
    fetch(
      `https://api.imgflip.com/caption_image${objectToQueryParam(params)}`,
      {
        method: "POST",
      }
    )
      .then((r) => r.json())
      .then((data) => console.log(data.data.url))
      .then((data) => {
        fetch("http://localhost:6001/NewMemes", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            name: name,
            url: data.url,
          }),
        })
          .then((r) => r.json())
          .then((data) => console.log(data))

        // send post request to json server
        // name: name
        // url: data.url
      })
  }

  //   fetch("http://localhost:6001/NewMemes", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(myMemeObj),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  // }

  return (
    <div>
      <h3>Add a Meme!</h3>
      <form onSubmit={handleSubmit}>
        <img height="100px" width="100px" src={url} />
        {/* <label>Add Top Caption</label> */}
        <input
          placeholder="Add Top Caption"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
        />
        {/* <label>Add Bottom Caption</label> */}
        <input
          placeholder="Add Bottom Caption"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
        <input type="submit" value="Generate Meme" />
      </form>
    </div>
  )
}

export default MemeForm
