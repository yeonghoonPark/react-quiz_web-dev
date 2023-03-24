import styled from "styled-components";

const StyledDiv = styled.div`
  display: ${(p) => p.display || {}};
  flex-direction: ${(p) => p.flexDirection || "row"};
  justify-content: ${(p) => p.justifyContent || {}};
  align-items: ${(p) => p.alignItems || {}};
  width: ${(p) => p.width || {}};
  max-width: ${(p) => p.maxWidth || {}};
  min-width: ${(p) => p.minWidth || {}};
  height: ${(p) => p.height || {}};
  margin: ${(p) => p.margin || {}};
  padding: ${(p) => p.padding || "8px"};

  font-size: ${(p) => p.fontSize || "inherit"};
  font-weight: ${(p) => p.fontWeight || "inherit"};

  box-shadow: ${(p) => p.boxShadow || {}};
  transition: ${(p) => p.transition || {}};

  overflow: ${(p) => p.overflow || {}};
  white-space: ${(p) => p.whiteSpace || {}};
  text-overflow: ${(p) => p.textOverflow || {}};

  color: ${(p) => p.color || {}};

  &.hidden {
    display: none;
  }

  @media all and (max-width: 47.9375rem) {
    display: ${(p) => (p.tabletDisplayNone ? "none" : {})};
    flex-direction: ${(p) => p.tabletFlexDirection || {}};
    justify-content: ${(p) => p.tabletJustifyContent || {}};
    align-items: ${(p) => p.tabletAlignItems || {}};

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

function BaseDiv({
  className,
  display,
  flexDirection,
  justifyContent,
  alignItems,
  width,
  maxWidth,
  minWidth,
  margin,
  padding,
  fontSize,
  fontWeight,
  boxShadow,
  transition,
  overflow,
  whiteSpace,
  textOverflow,
  color,
  tabletDisplayNone,
  tabletFlexDirection,
  tabletJustifyContent,
  tabletAlignItems,
  mobileFontSize,
  children,
}) {
  return (
    <StyledDiv
      className={className}
      display={display}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      width={width}
      maxWidth={maxWidth}
      minWidth={minWidth}
      margin={margin}
      padding={padding}
      fontSize={fontSize}
      fontWeight={fontWeight}
      boxShadow={boxShadow}
      transition={transition}
      overflow={overflow}
      color={color}
      whiteSpace={whiteSpace}
      textOverflow={textOverflow}
      tabletDisplayNone={tabletDisplayNone}
      tabletFlexDirection={tabletFlexDirection}
      tabletJustifyContent={tabletJustifyContent}
      tabletAlignItems={tabletAlignItems}
      mobileFontSize={mobileFontSize}
    >
      {children}
    </StyledDiv>
  );
}

export default BaseDiv;
