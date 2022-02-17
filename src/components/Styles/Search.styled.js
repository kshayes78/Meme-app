import styled from "styled-components"

export const StyledSearch = styled.div`
  color: white;
  grid-area: 2 / 1 / 3 / 4;

  input {
    border: 1px solid;
    border-radius: 5px;
    width: 10%;
    padding: 15px;
  }
  input:hover {
    border: 5px solid #63aebb;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3);
  }
`
