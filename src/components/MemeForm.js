import React, { useState } from "react";

function MemeForm({ url, memes, name, handleClick, addMemesToState }) {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  const myMemeObj = {
    name: name,
    url: url,
    topText: topText,
    bottomText: bottomText,
  };
  console.log(url);

  function handleSubmit(e) {
    e.preventDefault();
    handleClick();
    addMemesToState(myMemeObj);
    fetch("http://localhost:6001/MyMemes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(myMemeObj),
    }).then((response) => response.json());
  }

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
  );
}

export default MemeForm;
