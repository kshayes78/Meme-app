import styled from "styled-components"

export const StyledPopup = styled.div`
  background-color: black;

  button {
    @import url("https://fonts.googleapis.com/css2?family=Charm:wght@700&family=Raleway:wght@300&display=swap");
    font-family: Raleway;
    background-color: white;
    border-radius: 10px;
    padding: 8px;
    color: #d70608;
    font-weight: bold;
  }
`

export const StyledForm = styled.form`
  color: red;
  background: linear-gradient(110deg, #393e46 60%, #222831 60%);
  /* padding: 40px 40px; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  max-height: 400px;
  max-width: 600px;
  padding: 40px 30px;
  border-radius: 20px;

  img {
    grid-area: 1 / 1 / 3 / 3;
    /* margin: 20px 20px; */
    height: 250px;
    width: 250px;
  }
  img:hover {
    box-shadow: none;
  }
  .captions {
    display: grid;
    grid-area: 1 / 3 / 2 / 4;
  }
  .captionBtn {
    grid-area: 1 / 3 / 2 / 4;
  }
  /* input {
    display: grid;
    grid-area: 1 / 3 / 2 / 4; */
`
