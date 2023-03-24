import styled from "styled-components";

const StyledTr = styled.tr`
  border-bottom: 1px solid var(--color-gray-500);
  cursor: ${(p) => (p.cursorPointer ? "pointer" : {})};

  &.multiple-choice:hover {
    background-color: var(--color-light-blue);
  }
  &:last-child {
    border-bottom: none;
  }
`;
// border-bottom: 1px solid transparent;

function BaseTr({ className, cursorPointer, children }) {
  return (
    <StyledTr className={className} cursorPointer={cursorPointer}>
      {children}
    </StyledTr>
  );
}

export default BaseTr;
