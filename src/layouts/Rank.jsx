import styled from "styled-components";
import AppContainer from "../components/AppContainer";
import AppTitle from "../components/AppTitle";
import BaseDiv from "../components/base/BaseDiv";
import BaseSpan from "../components/base/BaseSpan";
import BaseTr from "../components/base/BaseTr";
import BaseTh from "../components/base/BaseTh";
import BaseTd from "../components/base/BaseTd";
import BaseButton from "../components/base/BaseButton";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import rank from "../data/rank";

const RankContainer = styled.div`
  position: relative;
  width: 70%;
  min-width: 314px;
  height: 472px;
  margin: 0 auto 4rem;
  padding: 0;
  border: 2px solid var(--color-gray-500);
  border-radius: var(--radius-standard);
  overflow: auto;
`;

const RankTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
`;

const RankTableThead = styled.thead`
  position: sticky;
  top: 0;
  color: white;
  background-color: var(--color-black);
  transition: var(--transition-300);
`;

function Rank() {
  // console.log("[Rank]");

  const [ranks, setRanks] = useState([]);

  const arrangeArray = (arr) => {
    // console.log("[arrangeArray]");
    arr.sort((a, b) => {
      let aTimeTaken = a.minute + a.second + a.millisecond;
      let bTimeTaken = b.minute + b.second + b.millisecond;
      if (a.correct_number === b.correct_number) {
        return aTimeTaken - bTimeTaken;
      } else {
        return b.correct_number - a.correct_number;
      }
    });
  };

  const returnRankGrade = (i) => {
    if (i === 0) {
      return `👑`;
    } else if (i === 1) {
      return `♛`;
    } else if (i === 2) {
      return `♕`;
    } else {
      return i + 1;
    }
  };

  useEffect(() => {
    arrangeArray(rank);
    setRanks(rank);
  }, [ranks]);

  const createHTMLString = () => {
    // console.log("[createHTMLString]");
    const result = [];
    for (let i = 0; i < 10; i++) {
      result.push(
        <BaseTr key={i}>
          <BaseTd>{returnRankGrade(i)}</BaseTd>
          <BaseTd display={"flex"} flexDirection={"column"} gap={"4px"}>
            <BaseSpan>{ranks[i]?.user_id}</BaseSpan>
            <BaseSpan display={"none"} className='tablet-display-show'>
              <BaseSpan
                mobileFontSize={"0.6rem"}
                className='mobile-margin-right'
              >
                <BaseSpan className='danger'>
                  {ranks[i]?.correct_number}
                </BaseSpan>{" "}
                문제 /{" "}
                <BaseSpan mobileFontSize={"0.6rem"}>
                  {ranks[i]?.minute}:{ranks[i]?.second}.
                  <BaseSpan className='danger'>
                    {ranks[i]?.millisecond}
                  </BaseSpan>
                </BaseSpan>
              </BaseSpan>
            </BaseSpan>
          </BaseTd>
          <BaseTd className='danger tablet-display-none'>
            {ranks[i]?.correct_number}
          </BaseTd>
          <BaseTd className='tablet-display-none'>
            {ranks[i]?.minute}:{ranks[i]?.second}.
            <BaseSpan className='danger'>{ranks[i]?.millisecond}</BaseSpan>
          </BaseTd>
        </BaseTr>,
      );
    }
    return result;
  };

  return (
    <AppContainer>
      <AppTitle>Rank</AppTitle>

      <RankContainer>
        <RankTable>
          <RankTableThead className='bg-gray-100 black'>
            <BaseTr>
              <BaseTh width={"10%"}>순위</BaseTh>
              <BaseTh>사용자</BaseTh>
              <BaseTh width={"20%"} className='tablet-display-none'>
                맞춘 갯수
              </BaseTh>
              <BaseTh width={"20%"} className='tablet-display-none'>
                소요 시간
              </BaseTh>
            </BaseTr>
          </RankTableThead>
          <tbody>{createHTMLString()}</tbody>
        </RankTable>
      </RankContainer>

      <BaseDiv
        display={"flex"}
        justifyContent={"center"}
        padding={"0 8px 4rem"}
      >
        <Link to='/quiz'>
          <BaseButton className={"large"}>Quiz Start</BaseButton>
        </Link>
      </BaseDiv>
    </AppContainer>
  );
}

export default Rank;
