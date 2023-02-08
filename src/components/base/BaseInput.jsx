import styled from "styled-components";

const StyledInput = styled.input`
  all: unset;
  width: calc(100% - 38px);
  padding: 14px 18px;
  border: 1px solid var(--color-gray-300);
  border-radius: 5px;
  background: var(--color-white);
  transition: var(--transition-300);
  &:focus {
    border: 1px solid var(--color-gray-500);
    box-shadow: 0 0 4px 2px var(--color-gray-400);
  }
  &::placeholder {
    color: var(--color-gray-500);
  }
  @media all and (max-width: 47.9375rem) {
  }

  @media all and (max-width: 29.9375rem) {
  }
`;

function BaseInput({ type, id, placeholder }) {
  return <StyledInput type={type} id={id} placeholder={placeholder} />;
}

export default BaseInput;
