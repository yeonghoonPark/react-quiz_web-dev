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
  user-select: none;

  &:hover{
    background-color: var(--color-hover-blue);
  }

  &.btn-red{
    background-color: var(--color-red);
    &:hover{
      background-color: var(--color-hover-red);
    }
  }

  &.btn-yellow{
    background-color: var(--color-yellow);
    color: var(--color-black);
    &:hover{
      background-color: var(--color-hover-yellow);
    }
  }

  &.btn-green{
    background-color: var(--color-green);
    &:hover{
      background-color: var(--color-hover-green);
    }
  }

  
  &.btn-gray-600{
    background-color: var(--color-gray-600);
    &:hover{
      background-color: var(--color-hover-gray-600);
    }
  }

  &.large{
    min-width: 218px;
    padding: 14px 18px;
  }

  @media all and (max-width: 47.9375rem) {
    font-size: 0.8rem;
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
