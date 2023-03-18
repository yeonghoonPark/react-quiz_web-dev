import styled from "styled-components";

const StyledTr = styled.tr`
  border-bottom: 1px solid var(--color-gray-500);
  &:last-child {
    border-bottom: 1px solid transparent;
  }
`;

function BaseTr({ className, children }) {
  return <StyledTr className={className}>{children}</StyledTr>;
}

export default BaseTr;
