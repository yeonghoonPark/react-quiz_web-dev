import styled from "styled-components";

const StyledSpan = styled.div`
  display: ${(p) => p.display || {}};
  width: ${(p) => p.width || "100%"};
  margin: ${(p) => p.margin || {}};
  font-size: ${(p) => p.fontSize || {}};
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
  display,
  width,
  margin,
  fontSize,
  textAlign,
  pointer,
  pointerEventsNone,
  textShadow,
  className,
  onClick,
  children,
}) {
  return (
    <StyledSpan
      display={display}
      margin={margin}
      fontSize={fontSize}
      width={width}
      textAlign={textAlign}
      pointer={pointer}
      pointerEventsNone={pointerEventsNone}
      textShadow={textShadow}
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledSpan>
  );
}

export default BaseSpan;
