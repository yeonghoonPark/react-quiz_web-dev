import styled from "styled-components";

const StyledDiv = styled.div`
  display: ${(p) => p.display || {}};
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
  @media all and (max-width: 47.9375rem) {
    display: ${(p) => (p.mobileDisplayNone ? "none" : {})};
  }

  @media all and (max-width: 29.9375rem) {
  }
`;

function BaseDiv({
  display,
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
  children,
}) {
  return (
    <StyledDiv
      display={display}
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
    >
      {children}
    </StyledDiv>
  );
}

export default BaseDiv;
