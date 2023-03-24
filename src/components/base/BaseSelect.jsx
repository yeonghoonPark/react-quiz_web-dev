import styled from "styled-components";

const StyledSelect = styled.select`
  border: 1px solid var(--color-gray-300);
  border-radius: var(--radius-standard);

  &:focus {
    border: 1px solid var(--color-gray-500);
    box-shadow: 0 0 2px 2px var(--color-gray-400);
    outline: none;
  }

  @media all and (max-width: 47.9375rem) {
    font-size: 0.8rem;
  }

  @media all and (max-width: 29.9375rem) {
  }
`;

function BaseSelect({ className, name, id, onChange, children }) {
  return (
    <StyledSelect className={className} name={name} id={id} onChange={onChange}>
      {children}
    </StyledSelect>
  );
}

export default BaseSelect;
