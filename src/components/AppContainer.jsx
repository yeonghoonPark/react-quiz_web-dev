import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  height: calc(100vh - 66px);
  margin: 66px auto 0;
  padding: 1.5rem;
`;

function AppContainer({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default AppContainer;
