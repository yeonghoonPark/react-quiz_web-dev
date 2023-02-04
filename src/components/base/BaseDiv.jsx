import styled from "styled-components";

const StyledDiv = styled.div`
  display: ${(p) => p.display || {}};
  justify-content: ${(p) => p.justifyContent || {}};
  align-items: ${(p) => p.alignItems || {}};
  width: ${(p) => p.width || "auto"};
  height: ${(p) => p.height || "auto"};
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
