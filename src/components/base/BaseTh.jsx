import styled from "styled-components";

const StyledTh = styled.th`
  width: ${(p) => p.width || "auto"};
  padding: 16px 8px;
  @media all and (max-width: 47.9375rem) {
    font-size: 0.8rem;
    &.tablet-display-none {
      display: none;
    }
  }

  @media all and (max-width: 29.9375rem) {
    &.mobile-display-none {
      display: none;
    }
  }
`;

function BaseTh({ width, className, children }) {
  return (
    <StyledTh width={width} className={className}>
      {children}
    </StyledTh>
  );
}

export default BaseTh;
