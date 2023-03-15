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
  box-shadow: ${(p) => p.boxShadow || {}};
  transition: ${(p) => p.transition || {}};

  &.hidden {
    display: none;
  }

  @media all and (max-width: 47.9375rem) {
    display: ${(p) => (p.mobileDisplayNone ? "none" : {})};
    flex-direction: ${(p) => p.mobileFlexDirection || {}};
    justify-content: ${(p) => p.mobileJustifyContent || {}};
    align-items: ${(p) => p.mobileAlignItems || {}};
  }

  @media all and (max-width: 29.9375rem) {
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
  boxShadow,
  transition,
  mobileDisplayNone,
  mobileFlexDirection,
  mobileJustifyContent,
  mobileAlignItems,
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
      boxShadow={boxShadow}
      transition={transition}
      mobileDisplayNone={mobileDisplayNone}
      mobileFlexDirection={mobileFlexDirection}
      mobileJustifyContent={mobileJustifyContent}
      mobileAlignItems={mobileAlignItems}
    >
      {children}
    </StyledDiv>
  );
}

export default BaseDiv;
