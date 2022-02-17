import React, { useState } from "react"
import { StyledForm } from "./Styles/Popup.styled"
import { StyledInput } from "./Styles/Popup.styled"

function MemeForm({ id, url, memes, name, handleClick, addMemesToState }) {
  const [topText, setTopText] = useState("")
  const [bottomText, setBottomText] = useState("")
  const [captionedMeme, setCaptionedMeme] = useState("")

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
      .then((data) => {
        fetch("http://localhost:6001/NewMemes", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            name: name,
            url: data.data.url,
          }),
        })
          .then((r) => r.json())
          .then((data) => console.log(data))
      })
  }

  return (
    <div
      style={{
        backgroundColor: "black",
        padding: "40px 40px",
        borderRadius: "20px",
      }}
    >
      <h3 style={{ color: "white" }}>
        <em>Add a Custom Caption to this Meme!</em>
      </h3>
      <StyledForm>
        <form onSubmit={handleSubmit}>
          <img
            style={{ border: "10px solid black" }}
            height="100px"
            width="100px"
            src={url}
          />
          <div className="captions">
            <input
              className="input1"
              placeholder="Add Top Caption"
              value={topText}
              onChange={(e) => setTopText(e.target.value)}
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                margin: "10px",
                padding: "8px",
                color: "#e94560",
                fontWeight: "bold",
              }}
            />
            <input
              className="input2"
              placeholder="Add Bottom Caption"
              value={bottomText}
              onChange={(e) => setBottomText(e.target.value)}
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                margin: "10px",
                padding: "8px",
                color: "#e94560",
                fontWeight: "bold",
              }}
            />
          </div>
          <div className="captionBtn">
            <input
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                margin: "10px",
                padding: "8px",
                color: "#e94560",
                fontWeight: "bold",
              }}
              type="submit"
              value="Generate Meme"
            />
          </div>
        </form>
      </StyledForm>
    </div>
  )
}

export default MemeForm
