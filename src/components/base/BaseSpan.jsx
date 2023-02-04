import styled from "styled-components";

const StyledSpan = styled.div`
  pointer-events: ${(p) => (p.pointerEventsNone ? "none" : "auto")};
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

function BaseSpan({ pointerEventsNone, textShadow, children }) {
  return (
    <StyledSpan pointerEventsNone={pointerEventsNone} textShadow={textShadow}>
      {children}
    </StyledSpan>
  );
}

export default BaseSpan;
