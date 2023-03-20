import styled from "styled-components";

const StyledSpan = styled.span`
  display: ${(p) => p.display || {}};
  width: ${(p) => p.width || "auto"};
  margin: ${(p) => p.margin || {}};
  padding: ${(p) => p.padding || {}};
  font-size: ${(p) => p.fontSize || "inherit"};
  text-align: ${(p) => p.textAlign || {}};
  border: ${(p) => p.border || {}};
  border-radius: ${(p) => p.borderRadius || {}};
  background-color: ${(p) => p.backgroundColor || {}};
  cursor: ${(p) => (p.pointer ? "pointer" : {})};
  pointer-events: ${(p) => (p.pointerEventsNone ? "none" : "auto")};
  user-select: ${(p) => (p.userSelectNone ? "none" : "all")};

  &:hover {
    text-shadow: ${(p) =>
      p.textShadow ? "2px 2px var(--color-gray-300)" : {}};
  }

  &.multiple-choice {
    display: inline-block;
    padding: 4px;
    border: 1px solid transparent;
    border-radius: var(--radius-standard);
  }

  &.multiple-choice:hover {
    background-color: var(--color-light-blue);
  }

  @media all and (max-width: 47.9375rem) {
    &.tablet-display-none {
      display: none;
    }
    &.tablet-margin-bottom {
      margin-bottom: 8px;
    }
    &.tablet-margin-right {
      margin-right: 8px;
    }
  }

  @media all and (max-width: 29.9375rem) {
    font-size: ${(p) => p.mobileFontSize || {}};
    &.mobile-display-show {
      display: block;
    }
    &.mobile-margin-right {
      margin-right: 8px;
    }
  }
`;

function BaseSpan({
  display,
  width,
  margin,
  padding,
  fontSize,
  mobileFontSize,
  textAlign,
  border,
  borderRadius,
  backgroundColor,
  pointer,
  pointerEventsNone,
  userSelectNone,
  textShadow,
  className,
  onClick,
  children,
}) {
  return (
    <StyledSpan
      display={display}
      fontSize={fontSize}
      mobileFontSize={mobileFontSize}
      width={width}
      margin={margin}
      padding={padding}
      textAlign={textAlign}
      border={border}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      pointer={pointer}
      pointerEventsNone={pointerEventsNone}
      userSelectNone={userSelectNone}
      textShadow={textShadow}
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledSpan>
  );
}

export default BaseSpan;
