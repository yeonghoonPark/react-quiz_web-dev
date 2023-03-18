import styled from "styled-components";

const StyledTitleH1 = styled.h1`
  margin-bottom: 1.5rem;
  padding: 2.5rem 0;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  pointer-events: none;
  user-select: none;
  @media all and (max-width: 29.9375rem) {
    padding: 1.5rem 0;
    font-size: 1.5rem;
  }
`;

function AppTitle({ children }) {
  return <StyledTitleH1>{children}</StyledTitleH1>;
}

export default AppTitle;
