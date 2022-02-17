import styled from "styled-components"

export const StyledSearch = styled.div`
  color: white;
  grid-area: 2 / 1 / 3 / 4;
  padding: 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    border: 1px solid;
    border-radius: 5px;
    width: 100%;
    padding: 15px;
    margin: 10px;
  }
  input:hover {
    border: 5px solid #d70608;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3);
  }
`
