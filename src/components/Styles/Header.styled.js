import styled from "styled-components";

export const StyledHeader = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Charm:wght@700&display=swap");
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0px;
  margin-bottom: 20px;
  /* display: flex; */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.623);
  height: 260px;

  h1 {
    padding-left: 520px;
    text-shadow: 1px 1px 2px black;
    text-shadow: #00b4d8 1px 0 20px;
    font-family: Charm;
    font-size: 50px;
    color: #e94560;
    text-shadow: 3px 3px 0px #f2a063;
  }

  a {
    text-decoration: none;
    color: #524a4e;
    padding: 40px;
  }
  a:hover {
    color: #e94560;
  }

  img {
    height: 200px;
    box-shadow: none;
    width: 100px;
    height: 100px;
    position: relative;
    top: -200px;
    left: 80%;
    /* right: -20px; */
    /* right: 20px; */
    /* transform: translate(100%, 10%); */
  }
  img:hover {
    box-shadow: none;
  }
`;
