import styled from "styled-components";
import BaseContainer from "../components/base/BaseContainer";
import BaseButton from "../components/base/BaseButton";
import BaseSpan from "../components/base/BaseSpan";
import BaseDiv from "../components/base/BaseDiv";
import { Link } from "react-router-dom";

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
  border: 2px solid var(--color-gray-500);
  border-radius: var(--radius-standard);
`;

const FaClockIcon = styled(FaClock)`
  font-size: 12px;
`;

const FaCheckCircleIcon = styled(FaCheckCircle)`
  font-size: 12px;
`;

const QuizTitleH2 = styled.h2`
  padding: 16px 8px;
  border: 1px solid var(--color-gray-500);
  border-radius: var(--radius-standard);
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  background-color: var(--color-light-blue);
  pointer-events: none;
`;

const QuizMultipleChoiceP = styled.p`
  width: auto;
  margin: 8px 0;
  font-size: 1.2rem;
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
          <BaseSpan
            className='tablet-margin-bottom'
            padding={"8px"}
            border={"1px solid var(--color-gray-500)"}
            borderRadius={"var(--radius-standard)"}
            pointerEventsNone
          >
            <FaCheckCircleIcon /> 맞춘 갯수:{" "}
            <BaseSpan className={"danger"} pointerEventsNone>
              1
            </BaseSpan>
          </BaseSpan>
          <BaseSpan
            padding={"8px"}
            border={"1px solid var(--color-gray-500)"}
            borderRadius={"var(--radius-standard)"}
            pointerEventsNone
          >
            <FaClockIcon /> 소요 시간: 01:56.
            <BaseSpan className={"danger"} pointerEventsNone>
              34
            </BaseSpan>
          </BaseSpan>
        </BaseDiv>

        <BaseDiv padding={"0"}>
          <QuizTitleH2 className='bg-dark-blue'>
            1. 스프레이 방식으로 만들어진 페인트의 경우 스프레이통 안에서 구슬이
            들어 있어 흔들면 소리가 납니다, 스프레이 통 안에 구슬을 넣는 이유는
            무엇일까요?
          </QuizTitleH2>
          <QuizMultipleChoiceP>
            <BaseSpan className='multiple-choice' pointer>
              ① 잘 섞이라고
            </BaseSpan>
          </QuizMultipleChoiceP>
          <QuizMultipleChoiceP>
            <BaseSpan className='multiple-choice' pointer>
              ② 심심해서
            </BaseSpan>
          </QuizMultipleChoiceP>
          <QuizMultipleChoiceP>
            <BaseSpan className='multiple-choice' pointer>
              ③ 안흔들면 서운해서
            </BaseSpan>
          </QuizMultipleChoiceP>
        </BaseDiv>
      </QuizContainer>
    </BaseContainer>
  );
}

export default Quiz;
