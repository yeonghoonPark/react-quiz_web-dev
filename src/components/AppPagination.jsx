import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  @media all and (max-width: 29.9375rem) {
    gap: 6px;
  }
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
    &:hover {
      background: var(--color-transparent);
      cursor: revert;
    }
  }

  &[aria-current] {
    background: var(--color-black);
    color: var(--color-white);
  }

  @media all and (max-width: 47.9375rem) {
    font-size: 0.8rem;
    padding: 3px 6px;
  }

  @media all and (max-width: 29.9375rem) {
  }
`;

function AppPagination({
  totalLength,
  perPageItems,
  currentPage,
  setCurrentPage,
  maxNumOfBtnLimit,
  setMaxNumOfBtnLimit,
  minNumOfBtnLimit,
  setMinNumOfBtnLimit,
}) {
  // console.log("[AppPagination]");
  const perPageBtnNum = Math.ceil(totalLength / perPageItems);
  const btnLimit = 5;

  const createHTMLBtns = () => {
    const result = [];
    for (let i = 1; i <= perPageBtnNum; i++) {
      if (i < maxNumOfBtnLimit + 1 && i > minNumOfBtnLimit) {
        result.push(
          <PageButton
            className='page-button'
            key={i + 1}
            aria-current={currentPage === i ? "page" : null}
            onClick={() => setCurrentPage(i)}
          >
            {i}
          </PageButton>,
        );
      }
    }
    return result;
  };

  const onHandlePrevBtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % btnLimit === 0) {
      setMaxNumOfBtnLimit(maxNumOfBtnLimit - btnLimit);
      setMinNumOfBtnLimit(minNumOfBtnLimit - btnLimit);
    }
  };

  const onHandleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxNumOfBtnLimit) {
      setMaxNumOfBtnLimit(maxNumOfBtnLimit + btnLimit);
      setMinNumOfBtnLimit(minNumOfBtnLimit + btnLimit);
    }
  };

  return (
    <PaginationContainer>
      <PageButton
        className='page-button'
        onClick={onHandlePrevBtn}
        disabled={currentPage === 1}
      >
        &lt; Prev
      </PageButton>

      {createHTMLBtns()}

      <PageButton
        className='page-button'
        onClick={onHandleNextBtn}
        disabled={currentPage === perPageBtnNum}
      >
        Next &gt;
      </PageButton>
    </PaginationContainer>
  );
}

export default AppPagination;
