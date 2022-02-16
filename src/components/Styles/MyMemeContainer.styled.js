import styled from "styled-components"

export const StyledMyMemeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  @include bp(x-small) {
    grid-template-columns: repeat(1, 1fr);
  }
  @include bp(small) {
    grid-template-columns: repeat(2, 1fr);
  }
  // When above our large breakpoint, make sure we have 3 columns
  @include bp(large) {
    grid-template-columns: repeat(3, 1fr);
  }
  img {
    width: 100%;
    border: 5px solid #fff;
  }
`
