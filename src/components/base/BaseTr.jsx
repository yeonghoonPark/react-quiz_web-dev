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

function BaseTr({ className, cursorPointer, onClick, children }) {
  return (
    <StyledTr
      className={className}
      cursorPointer={cursorPointer}
      onClick={onClick}
    >
      {children}
    </StyledTr>
  );
}

export default BaseTr;
