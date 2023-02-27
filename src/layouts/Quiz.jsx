import styled from "styled-components";
import BaseContainer from "../components/base/BaseContainer";
import BaseButton from "../components/base/BaseButton";
import { Link } from "react-router-dom";
import BaseDiv from "../components/base/BaseDiv";

import { FaClock, FaCheckCircle } from "react-icons/fa";

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

const QuizContainer = styled.div`
  width: 70%;
  min-width: 314px;

  margin: 0 auto;
  padding: 1.5rem;
  border: 1px solid red;
`;

const FaClockIcon = styled(FaClock)`
  font-size: 12px;
`;

const FaCheckCircleIcon = styled(FaCheckCircle)`
  font-size: 12px;
`;

function Quiz() {
  return (
    <BaseContainer>
      <TitleH1>Quiz</TitleH1>
      <QuizContainer>
        <BaseDiv
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          padding={"0 0 1.5rem"}
          mobileFlexDirection={"column"}
          mobileAlignItems={"flex-start"}
        >
          <span style={{ padding: "8px", border: "1px solid red" }}>
            <FaCheckCircleIcon /> 맞춘 갯수: 1
          </span>
          <span style={{ padding: "8px", border: "1px solid red" }}>
            <FaClockIcon /> 소요 시간: 01:56.34
          </span>
        </BaseDiv>

        <h2
          style={{
            padding: "16px 8px",
            border: "1px solid red",
            fontSize: "1.5rem",
            marginBottom: "1.5rem",
          }}
        >
          1. 스프레이 방식으로 만들어진 페인트의 경우 스프레이통 안에서 구슬이
          들어 있어 흔들면 소리가 납니다, 스프레이 통 안에 구슬을 넣는 이유는
          무엇일까요?
        </h2>
        <p style={{ padding: "8px 0", fontSize: "1.2rem" }}>1. 잘 섞이라고</p>
        <p style={{ padding: "8px 0", fontSize: "1.2rem" }}>2. 심심해서</p>
        <p style={{ padding: "8px 0", fontSize: "1.2rem" }}>
          3. 안흔들면 서운해서
        </p>
      </QuizContainer>
    </BaseContainer>
  );
}

export default Quiz;
