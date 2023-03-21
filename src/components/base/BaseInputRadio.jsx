import { memo } from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  display: inline-block;
  width: 100%;
  padding: 10px;
  border-right: 2px solid var(--color-gray-500);
  background-color: var(--color-white);
  text-align: center;
  transition: var(--transition-300);
  cursor: pointer;
  user-select: none;
  &:last-child {
    border-right: none;
  }
`;

const StyledInputRadio = styled.input`
  display: none;
`;

function BaseInputRadio({
  className,
  inputRef,
  htmlFor,
  id,
  value,
  name,
  checked,
  children,
  onClick,
}) {
  console.log("[BaseInputRadio]");
  return (
    <StyledLabel htmlFor={htmlFor} className={className} onClick={onClick}>
      <StyledInputRadio
        type='radio'
        ref={inputRef}
        id={id}
        value={value}
        name={name}
        checked={checked}
      />
      {children}
    </StyledLabel>
  );
}

export default memo(BaseInputRadio);
