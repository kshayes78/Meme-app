import styled from "styled-components";

export const StyledHeader = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Charm:wght@700&display=swap");
  margin-bottom: 100px;
  height: 260px;
  justify-content: center;
  display: flex;
  align-items: center;

  .logo {
    /* display: flex; */
    /* display: inline-block; */
    height: 500px;
    width: 700px;
    /* position: relative; */
    align-self: center;
    top: 0%;
    left: 0%;
    /* transform: translate(120%, 10%); */
    /* filter: drop-shadow(10px 10px 4px #931540); */
  }

  h1 {
    padding-left: 520px;
    text-shadow: 1px 1px 2px black;
    text-shadow: #00b4d8 1px 0 20px;
    font-family: Charm;
    font-size: 50px;
    color: #d70608;
    text-shadow: 3px 3px 0px #f2a063;
  }

  a {
    font-size: 40px;
    text-decoration: none;
    color: #fff;
    padding: 30px;
    display: inline-block;
    position: static;
    top: 0%;
    /* filter: drop-shadow(10px 7px 4px #931540); */
    text-shadow: 0 1px 0 hsl(174, 5%, 80%), 0 2px 0 hsl(174, 5%, 75%),
      0 3px 0 hsl(174, 5%, 70%), 0 4px 0 hsl(174, 5%, 66%),
      0 5px 0 hsl(174, 5%, 64%), 0 6px 0 hsl(174, 5%, 62%),
      0 7px 0 hsl(174, 5%, 61%), 0 8px 0 hsl(174, 5%, 60%),
      0 0 5px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.2),
      0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.2),
      0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.3);
  }
  a:hover {
    color: #d70608;
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
