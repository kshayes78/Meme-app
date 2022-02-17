import React from "react"
import { StyledDirections } from "./Styles/Directions.styled.js"

function Directions() {
  return (
    <StyledDirections>
      <div>
        <>
          <h1>What's a *meme* you ask? </h1>
          <p>
            According to the Oxford English Dictionary (yes, you read that
            right! "Meme was added to the dictionary in 2015!) a meme is a "an
            element of a culture or system of behavior that may be considered to
            be passed from one individual to another by nongenetic means,
            especially imitation a humorous image, video, piece of text, etc.,
            that is copied (often with slight variations) and spread rapidly by
            internet users."{" "}
          </p>
        </>
        <>
          <h3>Here are some guidelines for making a meme: </h3>
          <ul>
            <li>Choose a picture from our "meme bank" on the home page.</li>
            <li>
              Add some <em>hilarious</em> text - be creative!{" "}
            </li>
            <li>
              You can find some{" "}
              <a href="https://inspirationfeed.com/motivational-memes/">
                inspo here
              </a>
            </li>
          </ul>
        </>
      </div>
    </StyledDirections>
  )
}

export default Directions
