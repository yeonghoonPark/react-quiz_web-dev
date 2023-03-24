import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const PageButton = styled.button`
  all: unset;
  padding: 4px 8px;
  border: 2px solid var(--color-gray-500);
  border-radius: var(--radius-standard);
  cursor: pointer;
  transition: var(--transition-300);
  &:hover {
    background: var(--color-light-blue);
  }
  &[disabled] {
    color: var(--color-gray-500);
    cursor: revert;
  }
  &[disabled]:hover {
    background: var(--color-transparent);
    cursor: revert;
  }
  &[aria-current] {
    background: var(--color-black);
    color: var(--color-white);
  }

  @media all and (max-width: 47.9375rem) {
    font-size: 0.8rem;
    padding: 2px 4px;
  }

  @media all and (max-width: 29.9375rem) {
  }
`;

function AppPagination({ total, limit, currentPage, setCurrentPage }) {
  const pageNumber = Math.ceil(total / limit);
  return (
    <PaginationContainer>
      <PageButton
        className='page-button'
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt; 이전
      </PageButton>
      {Array(pageNumber)
        .fill()
        .map((_cV, i) => {
          return (
            <PageButton
              className='page-button'
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              aria-current={currentPage === i + 1 ? "currentPage" : null}
            >
              {i + 1}
            </PageButton>
          );
        })}
      <PageButton
        className='page-button'
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === pageNumber}
      >
        다음 &gt;
      </PageButton>
    </PaginationContainer>
  );
}

export default AppPagination;
