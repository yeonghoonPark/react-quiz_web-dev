import styled from "styled-components";
import logo from "../../public/assets/images/logo.png";
import AppContainer from "../components/AppContainer";
import AppTitle from "../components/AppTitle";
import BaseDiv from "../components/base/BaseDiv";
import BaseSpan from "../components/base/BaseSpan";
import BaseButton from "../components/base/BaseButton";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const LogoDiv = styled.div`
  width: 200px;
  height: 165px;
  margin: 0 auto 1.5rem;
`;

const Img = styled.img`
  widht: 100%;
  height: 100%;
  object-fit: contain;
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
    font-size: 1.5rem;
  }
`;

const SubTitleP = styled.p`
  margin: 0 auto 3.5rem;
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
  // console.log("[Home]");

  const storeState = useSelector((state) => state);

  return (
    <AppContainer>
      {storeState.login.user_id ? (
        <AppTitle>Welcome {storeState.login.user_id}</AppTitle>
      ) : (
        <AppTitle>Welcome Your visit</AppTitle>
      )}
      <LogoDiv>
        <Img src={logo} alt='logo' />
      </LogoDiv>

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
          <BaseButton className={"large"}>Quiz Start</BaseButton>
        </Link>
      </BaseDiv>
    </AppContainer>
  );
}

export default Home;
