import styled from "styled-components";

const StyledSpan = styled.div`
  width: ${(p) => p.width || "100%"};
  text-align: ${(p) => p.textAlign || {}};
  cursor: ${(p) => (p.pointer ? "pointer" : {})};
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

function BaseSpan({
  width,
  textAlign,
  pointer,
  pointerEventsNone,
  textShadow,
  onClick,
  children,
}) {
  return (
    <StyledSpan
      width={width}
      textAlign={textAlign}
      pointer={pointer}
      pointerEventsNone={pointerEventsNone}
      textShadow={textShadow}
      onClick={onClick}
    >
      {children}
    </StyledSpan>
  );
}

export default BaseSpan;
