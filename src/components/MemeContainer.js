import React from "react";
import MemeCard from "./MemeCard";

function MemeContainer({ memes }) {
  const createMemeCards = memes.map((meme) => (
    <MemeCard
      key={meme.id}
      name={meme.name}
      url={meme.url}
      width={meme.width}
      height={meme.height}
      box_count={meme.box_count}
    />
  ));
  return <div>{createMemeCards}</div>;
}

export default MemeContainer;
