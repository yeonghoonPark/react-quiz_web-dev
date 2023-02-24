import styled from "styled-components";
import BaseContainer from "../components/base/BaseContainer";
import BaseDiv from "../components/base/BaseDiv";
import BaseSpan from "../components/base/BaseSpan";
import BaseButton from "../components/base/BaseButton";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const TitleH1 = styled.h1`
  margin-bottom: 1.5rem;
  padding: 2.5rem 0;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  pointer-events: none;
  @media all and (max-width: 29.9375rem) {
    padding: 1.5rem 0;
    font-size: 1.5rem;
  }
`;

const LogoDiv = styled.div`
  width: 200px;
  height: 165px;
  margin: 0 auto 1.5rem;
  background-image: url(../../public/assets/images/logo.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const SubTitleH2 = styled.h2`
  margin: 0 auto 1.5rem;
  font-size: 3.5rem;
  font-weight: 700;
  text-align: center;
  word-break: break-word;
  @media all and (max-width: 47.9375rem) {
    font-size: 2.5rem;
  }
  @media all and (max-width: 29.9375rem) {
    font-size: 1.2rem;
  }
`;

const SubTitleP = styled.p`
  margin: 0 auto 4rem;
  padding: 0 4rem;
  text-align: center;
  @media all and (max-width: 47.9375rem) {
    padding: 0;
    font-size: 0.8rem;
  }
  @media all and (max-width: 29.9375rem) {
  }
`;

function Home() {
  console.log("[Home]");

  const storeState = useSelector((state) => state);

  return (
    <BaseContainer>
      {storeState.login.user_id ? (
        <TitleH1>Welcome {storeState.login.user_id}</TitleH1>
      ) : (
        <TitleH1>Welcome Your visit</TitleH1>
      )}
      <LogoDiv />

      <BaseDiv width={"80%"} padding={"8px 8px 0"} margin={"0 auto"}>
        <SubTitleH2>
          You can acquire various knowledge with{" "}
          <BaseSpan className='danger'>Q</BaseSpan>
          uiz-
          <BaseSpan className='primary'>W</BaseSpan>eb
        </SubTitleH2>
        <SubTitleP>
          This website offers quizzes in various fields, solve the questions and
          increase your knowledge and challenge the ranking.
        </SubTitleP>
      </BaseDiv>

      <BaseDiv
        display={"flex"}
        justifyContent={"center"}
        padding={"0 8px 4rem"}
      >
        <Link to='/quiz'>
          <BaseButton width={"22%"} minWidth={"218px"} padding={"14px 18px"}>
            Quiz Start
          </BaseButton>
        </Link>
      </BaseDiv>
    </BaseContainer>
  );
}

export default Home;
