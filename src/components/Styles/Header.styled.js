import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0px;
  margin-bottom: 20px;
  display: flex;

  a {
    text-decoration: none;
    color: white;
    padding: 20px;
  }
`;
