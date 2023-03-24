import styled from "styled-components";
import AppContainer from "../../components/AppContainer";
import AppTitle from "../../components/AppTitle";
import AppPagination from "../../components/AppPagination";
import BaseInputRadio from "../../components/base/BaseInputRadio";
import BaseTr from "../../components/base/BaseTr";
import BaseTh from "../../components/base/BaseTh";
import BaseTd from "../../components/base/BaseTd";
import BaseDiv from "../../components/base/BaseDiv";
import BaseSpan from "../../components/base/BaseSpan";
import BaseInput from "../../components/base/BaseInput";
import BaseSelect from "../../components/base/BaseSelect";
import BaseButton from "../../components/base/BaseButton";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import tapMenu from "../../data/tapMenu";
import notice from "../../data/notice";

const RadioGroupContainer = styled.div`
  position: relative;
  display: flex;
  width: 70%;
  min-width: 314px;
  margin: 0 auto 1.5rem;
  border: 2px solid var(--color-gray-500);
  border-radius: var(--radius-standard);
`;

const NoticeContainer = styled.div`
  position: relative;
  width: 70%;
  min-width: 314px;
  margin: 0 auto 1.5rem;
  padding: 0;
  border: 2px solid var(--color-gray-500);
  border-radius: var(--radius-standard);
`;

const NoticeTable = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  user-select: none;
`;

const NoticeTableThead = styled.thead`
  position: sticky;
  top: 0;
  color: white;
  background-color: var(--color-black);
  transition: var(--transition-300);
`;

const SearchGroupContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 8px;
  width: 70%;
  min-width: 314px;
  margin: 0 auto 1.5rem;
  @media all and (max-width: 47.9375rem) {
    justify-content: center;
    font-size: 0.8rem;
  }

  @media all and (max-width: 29.9375rem) {
  }
`;

function Notice() {
  // console.log("[Notice]");

  const CLASSNAME_TOTAL = "total";
  const CLASSNAME_TITLE = "title";
  const CLASSNAME_AUTHOR = "author";

  const [currentIndex, setCurrentIndex] = useState(0);

  const [limit, setLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const offset = (currentPage - 1) * limit;

  const [notices, setNotices] = useState([]);
  const [checkedTapMenu, setCheckedTapMenu] = useState();

  const [optionValue, setOptionValue] = useState(CLASSNAME_TITLE);
  const [inputValueSearch, setInputValueSearch] = useState("");

  useEffect(() => {
    setCheckedTapMenu(CLASSNAME_TOTAL);
    setNoticesArray();
  }, [checkedTapMenu]);

  const onHandleTapMenu = (i) => {
    setCurrentIndex(i);
    setCurrentPage(1);
  };

  const setCheckedArray = (arr, newArr) => {
    arr.forEach((cV) => {
      checkedTapMenu === cV.article_type && newArr.push(cV);
      setNotices(newArr);
    });
  };

  const setNoticesArray = () => {
    const newNotices = [];
    checkedTapMenu === CLASSNAME_TOTAL
      ? setNotices(notice)
      : setCheckedArray(notice, newNotices);
  };

  const onHandleSearch = () => {
    const newNotice = [];
    if (optionValue === CLASSNAME_TITLE) {
      notice.forEach((cV) => {
        if (
          cV.title.toLowerCase().indexOf(inputValueSearch.toLowerCase()) !== -1
        ) {
          if (checkedTapMenu === cV.article_type) {
            newNotice.push(cV);
          } else if (checkedTapMenu === CLASSNAME_TOTAL) {
            newNotice.push(cV);
          }
        }
      });
    } else if (optionValue === CLASSNAME_AUTHOR) {
      notice.forEach((cV) => {
        if (
          cV.author.toLowerCase().indexOf(inputValueSearch.toLowerCase()) !== -1
        ) {
          if (checkedTapMenu === cV.article_type) {
            newNotice.push(cV);
          } else if (checkedTapMenu === CLASSNAME_TOTAL) {
            newNotice.push(cV);
          }
        }
      });
    }
    setNotices(newNotice);
  };

  return (
    <AppContainer>
      <AppTitle>Notice</AppTitle>

      <RadioGroupContainer>
        {tapMenu.map((cV, i) => {
          return (
            <BaseInputRadio
              key={cV.uniq_no}
              htmlFor={cV.html_for}
              id={cV.id}
              value={cV.value}
              name={cV.name}
              onClick={() => {
                onHandleTapMenu(i);
                setCheckedTapMenu(cV.value);
              }}
              className={currentIndex === i ? "checked" : "checked-none"}
            >
              {cV.message}
            </BaseInputRadio>
          );
        })}
      </RadioGroupContainer>

      <NoticeContainer>
        <NoticeTable>
          <NoticeTableThead className='bg-gray-100 black'>
            <BaseTr>
              <BaseTh width={"20%"}>분류</BaseTh>
              <BaseTh width={"60%"}>제목</BaseTh>
              <BaseTh width={"20%"} className='tablet-display-none'>
                작성자
              </BaseTh>
              <BaseTh width={"20%"} className='tablet-display-none'>
                작성일
              </BaseTh>
            </BaseTr>
          </NoticeTableThead>
          <tbody>
            {notices.slice(offset, offset + limit).map((cV) => {
              return (
                <BaseTr
                  key={cV.uniq_no}
                  className='multiple-choice'
                  cursorPointer
                >
                  <BaseTd>
                    <BaseSpan
                      padding={"4px 8px"}
                      border={"1px solid var(--color-gray-500)"}
                      borderRadius={"var(--radius-standard)"}
                      userSelectNone
                    >
                      {cV.article}
                    </BaseSpan>
                  </BaseTd>
                  <BaseTd
                    textAlign={"start"}
                    whiteSpace={"nowrap"}
                    overflow={"hidden"}
                    textOverflow={"ellipsis"}
                  >
                    <BaseSpan userSelectNone>{cV.title}</BaseSpan>
                    <BaseDiv
                      className='mobile-display-show'
                      display={"none"}
                      padding={"0"}
                      whiteSpace={"nowrap"}
                      overflow={"hidden"}
                      textOverflow={"ellipsis"}
                      fontSize={"0.6rem"}
                      fontWeight={"500"}
                      color={"var(--color-gray-500)"}
                    >
                      {cV.create_date} / {cV.author}
                    </BaseDiv>
                  </BaseTd>
                  <BaseTd
                    className='tablet-display-none'
                    whiteSpace={"nowrap"}
                    overflow={"hidden"}
                    textOverflow={"ellipsis"}
                  >
                    <BaseSpan userSelectNone fontSize={"0.8rem"}>
                      {cV.author}
                    </BaseSpan>
                  </BaseTd>
                  <BaseTd className='tablet-display-none'>
                    <BaseSpan
                      userSelectNone
                      fontSize={"0.8rem"}
                      fontWeight={"300"}
                    >
                      {cV.create_date}
                    </BaseSpan>
                  </BaseTd>
                </BaseTr>
              );
            })}
          </tbody>
        </NoticeTable>
      </NoticeContainer>

      <SearchGroupContainer>
        <BaseSelect
          name=''
          id=''
          onChange={(e) => setOptionValue(e.target.value)}
        >
          <option value={CLASSNAME_TITLE}>제목</option>
          <option value={CLASSNAME_AUTHOR}>작성자</option>
        </BaseSelect>
        <BaseInput
          className='black'
          width={"30%"}
          padding={"6px 10px"}
          type={"text"}
          onChange={(e) => setInputValueSearch(e.target.value)}
          onKeyUp={(e) => e.key === "Enter" && onHandleSearch()}
        />
        <BaseButton onClick={() => onHandleSearch()}>검색</BaseButton>
        <BaseButton>글 작성</BaseButton>
      </SearchGroupContainer>

      <AppPagination
        total={notices.length}
        limit={limit}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </AppContainer>
  );
}

export default Notice;
