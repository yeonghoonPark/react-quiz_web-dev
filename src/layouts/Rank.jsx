import styled from "styled-components";
import AppContainer from "../components/AppContainer";
import AppTitle from "../components/AppTitle";
import BaseSpan from "../components/base/BaseSpan";
import BaseButton from "../components/base/BaseButton";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import rank from "../data/rank";
import { useEffect, useState } from "react";

const RankContainer = styled.div`
  position: relative;
  width: 70%;
  min-width: 314px;
  height: 472px;
  margin: 0 auto;
  padding: 0;
  border: 2px solid var(--color-gray-500);
  border-radius: var(--radius-standard);
  overflow: auto;
`;

const BaseTr = styled.tr`
  border-bottom: 1px solid var(--color-gray-500);
  &:last-child {
    border-bottom: 1px solid transparent;
  }
`;

const BaseTh = styled.th`
  padding: 16px 8px;
  font-size: 1rem;
`;

const BaseTd = styled.td`
  padding: 16px;
`;

function Rank() {
  console.log("[Rank]");

  const dispatch = useDispatch();

  const [ranks, setRanks] = useState([]);

  const arrangeArray = (array) => {
    console.log("[arrangeArray]");
    array.sort((a, b) => {
      let aTimeTaken = a.minute + a.second + a.millisecond;
      let bTimeTaken = b.minute + b.second + b.millisecond;
      if (a.correct_number === b.correct_number) {
        return aTimeTaken - bTimeTaken;
      } else {
        return b.correct_number - a.correct_number;
      }
    });
  };

  useEffect(() => {
    arrangeArray(rank);
    setRanks(rank);
  }, [ranks]);

  const returnRankGrade = (index) => {
    if (index === 0) {
      return `👑`;
    } else if (index === 1) {
      return `♛`;
    } else if (index === 2) {
      return `♕`;
    } else {
      return index + 1;
    }
  };

  const createHTMLString = () => {
    console.log("[createHTMLString]");
    const result = [];
    for (let index = 0; index < 10; index++) {
      result.push(
        <BaseTr key={index}>
          <BaseTd>{returnRankGrade(index)}</BaseTd>
          <BaseTd>{ranks[index]?.user_id}</BaseTd>
          <BaseTd className='danger'>{ranks[index]?.correct_number}</BaseTd>
          <BaseTd>
            {ranks[index]?.minute}:{ranks[index]?.second}.
            <BaseSpan className='danger'>{ranks[index]?.millisecond}</BaseSpan>
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
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "center",
          }}
        >
          <colgroup>
            <col width={"10%"} />
            <col width={"50%"} />
            <col width={"25%"} />
            <col width={"25%"} />
          </colgroup>
          <thead
            className='bg-primary'
            style={{ position: "sticky", top: "0", color: "white" }}
          >
            <BaseTr>
              <BaseTh>순위</BaseTh>
              <BaseTh>사용자</BaseTh>
              <BaseTh>맞춘 갯수</BaseTh>
              <BaseTh>소요 시간</BaseTh>
            </BaseTr>
          </thead>
          <tbody>
            {createHTMLString()}
            {/* {rank.map((item, index) => {
              return (
                <BaseTr key={index}>
                  <BaseTd>{index + 1}</BaseTd>
                  <BaseTd>{item.user_id}</BaseTd>
                  <BaseTd>{item.correct_number}</BaseTd>
                  <BaseTd>
                    {item.minute}:{item.second}.{item.millisecond}
                  </BaseTd>
                </BaseTr>
              );
            })} */}
          </tbody>
        </table>
      </RankContainer>
    </AppContainer>
  );
}

export default Rank;
