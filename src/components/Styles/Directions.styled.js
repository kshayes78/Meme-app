import styled from "styled-components"

export const StyledDirections = styled.div`
  padding-left: 40px;
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 0px;

  h1,
  h3 {
    color: #d70608;
  }
  a:link {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
    color: #ff0000;
  }
`
