import styled from "styled-components";

const StyledTd = styled.td`
  display: ${(p) => p.display || {}};
  flex-direction: ${(p) => p.flexDirection || {}};
  gap: ${(p) => p.gap || {}};
  padding: 16px;
  font-size: ${(p) => p.fontSize || "inherit"};
  font-weight: ${(p) => p.fontWeight || "inherit"};
  text-align: ${(p) => p.textAlign || "inherit"};
  overflow: ${(p) => p.overflow || {}};
  white-space: ${(p) => p.whiteSpace || {}};
  text-overflow: ${(p) => p.textOverflow || {}};

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

function BaseTd({
  display,
  flexDirection,
  gap,
  fontSize,
  fontWeight,
  textAlign,
  overflow,
  whiteSpace,
  textOverflow,
  className,
  children,
}) {
  return (
    <StyledTd
      display={display}
      flexDirection={flexDirection}
      gap={gap}
      fontSize={fontSize}
      fontWeight={fontWeight}
      textAlign={textAlign}
      overflow={overflow}
      whiteSpace={whiteSpace}
      textOverflow={textOverflow}
      className={className}
    >
      {children}
    </StyledTd>
  );
}

export default BaseTd;
