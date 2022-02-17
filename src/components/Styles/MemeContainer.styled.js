import styled from "styled-components";

export const MemeGrid = styled.div`
  color: white;
  /* display: grid;
  grid-template-columns: repeat(3, 1fr); */
  grid-gap: 20px;
  row-gap: 40px;
  max-width: 1200px;
  width: 80%;
  margin: auto;
  /* background-color: black; */

  img {
    box-shadow: 0px 10px 15px black;
    border: 5px solid white;
    padding: 5px 5px;
  }
  img:hover {
    opacity: 50%;
    transition: 0.3s opacity ease;
  }
`;
