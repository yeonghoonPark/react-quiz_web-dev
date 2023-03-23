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
import BaseButton from "../../components/base/BaseButton";
import { Link } from "react-router-dom";
import { useCallback, useRef, useState } from "react";
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
  margin: 0 auto 4rem;
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

function Notice() {
  console.log("[Notice]");

  const [currentIndex, setCurrentIndex] = useState(0);

  const [limit, setLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const offset = (currentPage - 1) * limit;

  const onHandleTapMenu = useCallback(
    (i) => {
      setCurrentIndex(i);
    },
    [currentIndex],
  );

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
              onClick={() => onHandleTapMenu(i)}
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
            {/* <BaseTr className='multiple-choice' cursorPointer>
              <BaseTd>
                <BaseSpan
                  padding={"4px 8px"}
                  border={"1px solid var(--color-gray-500)"}
                  borderRadius={"var(--radius-standard)"}
                  userSelectNone
                >
                  잡담
                </BaseSpan>
              </BaseTd>
              <BaseTd
                textAlign={"start"}
                whiteSpace={"nowrap"}
                overflow={"hidden"}
                textOverflow={"ellipsis"}
              >
                <BaseSpan>
                  코로나 사태에 따른 임시 휴업 공지입니다. 필독
                </BaseSpan>
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
                  23.01.12 / dbsdlsgh0466@hanmilasdasdasdasd.net
                </BaseDiv>
              </BaseTd>
              <BaseTd
                className='tablet-display-none'
                whiteSpace={"nowrap"}
                overflow={"hidden"}
                textOverflow={"ellipsis"}
              >
                <BaseSpan fontSize={"0.8rem"}>dbsdlsgh0466@hanmil.net</BaseSpan>
              </BaseTd>
              <BaseTd className='tablet-display-none'>
                <BaseSpan fontSize={"0.8rem"} fontWeight={"300"}>
                  23.01.12
                </BaseSpan>
              </BaseTd>
            </BaseTr> */}
            {notice.slice(offset, offset + limit).map((cV) => {
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

      <AppPagination
        total={notice.length}
        limit={limit}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </AppContainer>
  );
}

export default Notice;
