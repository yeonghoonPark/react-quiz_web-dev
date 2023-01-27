import styled from "styled-components";

const StyledButton = styled.button`
  color: ${(props) => props.color || {}}};
  font-size: ${(props) => props.fontSize || {}};
  background-color: var(--color-red);
`;

function BaseButton({ buttonClick, message, color, fontSize }) {
  return (
    <StyledButton onClick={buttonClick} color={color} fontSize={fontSize}>
      {message}
    </StyledButton>
  );
}

export default BaseButton;
