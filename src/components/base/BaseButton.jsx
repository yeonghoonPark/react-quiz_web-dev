import styled from "styled-components";

const StyledButton = styled.button`
  width: ${(p) => p.width || {}};
  min-width: ${(p) => p.minWidth || {}};
  margin: ${(p) => p.margin || {}};
  margin-left: ${(p) => p.marginLeft || {}};
  margin-top: ${(p) => p.marginTop || {}};
  margin-right: ${(p) => p.marginRight || {}};
  margin-bottom: ${(p) => p.marginBottom || {}};
  padding: ${(p) => p.padding || "8px 12px"} ;
  border: none;
  border-radius: 5px;
  color: ${(p) => p.color || "var(--color-white)"}};
  font-size: ${(p) => p.fontSize || "1rem"};
  background-color: ${(p) => p.backgroundColor || "var(--color-blue)"};
  cursor: pointer;
  transition: var(--transition-300);
  &:hover{
    background-color: ${(p) =>
      p.hoverBackgroundColor || "var(--color-hover-blue)"} ;
  }

  &.large{
    min-width: 218px;
    padding: 14px 18px;
  }

  @media all and (min-width: 30rem) and (max-width: 47.9375rem) {
  
  }
  @media all and (max-width: 29.9375rem) {
  
  }
`;

function BaseButton({
  className,
  width,
  minWidth,
  margin,
  marginLeft,
  marginTop,
  marginRight,
  marginBottom,
  padding,
  color,
  backgroundColor,
  hoverBackgroundColor,
  fontSize,
  onClick,
  children,
}) {
  return (
    <StyledButton
      className={className}
      width={width}
      minWidth={minWidth}
      margin={margin}
      marginLeft={marginLeft}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      padding={padding}
      color={color}
      backgroundColor={backgroundColor}
      hoverBackgroundColor={hoverBackgroundColor}
      fontSize={fontSize}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

export default BaseButton;
