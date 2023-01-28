import styled from "styled-components";

const StyledButton = styled.button`
  margin: ${(p) => p.margin || {}};
  margin-left: ${(p) => p.marginLeft || {}};
  margin-top: ${(p) => p.marginTop || {}};
  margin-right: ${(p) => p.marginRight || {}};
  margin-bottom: ${(p) => p.marginBottom || {}};
  padding: 8px 12px;
  border: none;
  border-radius: 2px;
  color: ${(p) => p.color || "var(--color-white)"}};
  font-size: ${(p) => p.fontSize || "1.2rem"};
  background-color: ${(p) => p.backgroundColor || "var(--color-blue)"};
  cursor: pointer;
  transition: var(--base-transition);
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
  margin,
  marginLeft,
  marginTop,
  marginRight,
  marginBottom,
  color,
  backgroundColor,
  hoverBackgroundColor,
  fontSize,
  buttonClick,
  message,
}) {
  return (
    <StyledButton
      margin={margin}
      marginLeft={marginLeft}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      color={color}
      backgroundColor={backgroundColor}
      hoverBackgroundColor={hoverBackgroundColor}
      fontSize={fontSize}
      onClick={buttonClick}
    >
      {message}
    </StyledButton>
  );
}

export default BaseButton;
