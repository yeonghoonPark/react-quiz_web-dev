import styled from "styled-components";

const StyledTd = styled.td`
  display: ${(p) => p.display || {}};
  flex-direction: ${(p) => p.flexDirection || {}};
  padding: 16px;
  @media all and (max-width: 47.9375rem) {
    font-size: 0.8rem;
  }
  @media all and (max-width: 29.9375rem) {
    &.mobile-display-none {
      display: none;
    }
  }
`;

function BaseTd({ display, flexDirection, className, children }) {
  return (
    <StyledTd
      display={display}
      flexDirection={flexDirection}
      className={className}
    >
      {children}
    </StyledTd>
  );
}

export default BaseTd;
