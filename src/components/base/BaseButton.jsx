import styled from "styled-components";

const StyledButton = styled.button`
  width: ${(p) => p.width || {}};
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
  @media all and (min-width: 30rem) and (max-width: 47.9375rem) {
  
  }
  @media all and (max-width: 29.9375rem) {
  
  }
`;

function BaseButton({
  width,
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
  message,
}) {
  return (
    <StyledButton
      width={width}
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
      {message}
    </StyledButton>
  );
}

export default BaseButton;
