import React from "react";
import MemeCard from "./MemeCard";

function MyMemes({ myMemes }) {
  console.log(myMemes);
  const createMemeCards = myMemes.map((meme) => (
    <MemeCard
      key={meme.id}
      name={meme.name}
      url={meme.url}
      topText={meme.topText}
      bottomText={meme.bottomText}
    />
  ));
  return <div>{createMemeCards}</div>;
}

export default MyMemes;
