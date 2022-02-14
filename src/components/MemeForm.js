import React, { useState } from "react";

function MemeForm({ memes }) {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Hi there!");
  }

  return (
    <div>
      <h3>Add a Meme!</h3>
      <form onSubmit={handleSubmit}>
        <label>Add Top Caption</label>
        <input value={topText} onChange={(e) => setTopText(e.target.value)} />
        <label>Add Bottom Caption</label>
        <input
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
      </form>
    </div>
  );
}

export default MemeForm;
