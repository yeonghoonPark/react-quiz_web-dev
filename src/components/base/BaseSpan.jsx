import styled from "styled-components";

const StyledSpan = styled.div`
  pointer-events: ${(p) => p.pointerEvents || "auto"};
  &:hover {
    text-shadow: ${(p) =>
      p.textShadow ? "2px 2px var(--color-gray-300)" : {}};
  }
  @media all and (max-width: 47.9375rem) {
    display: ${(p) => (p.mobileDisplayNone ? "none" : {})};
  }

  @media all and (max-width: 29.9375rem) {
  }
`;

function BaseSpan({ pointerEvents, textShadow, children }) {
  return (
    <StyledSpan pointerEvents={pointerEvents} textShadow={textShadow}>
      {children}
    </StyledSpan>
  );
}

export default BaseSpan;
