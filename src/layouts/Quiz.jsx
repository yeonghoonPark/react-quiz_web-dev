import styled from "styled-components";
import BaseContainer from "../components/base/BaseContainer";
import BaseButton from "../components/base/BaseButton";
import BaseSpan from "../components/base/BaseSpan";
import BaseDiv from "../components/base/BaseDiv";
import { FaClock, FaCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import quiz from "../data/quiz.json";

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
  const [quizzes, setQuizzes] = useState([]);

  const mixArrayRandomly = (array) => {
    console.log("[mixArrayRandomly]");
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setQuizzes(mixArrayRandomly(quiz.data));
  }, []);

  const createHTMLString = () => {
    const result = [];
    for (let index = 0; index < 10; index++) {
      result.push(
        <BaseDiv padding={"0"} key={index}>
          <QuizTitleH2 className='bg-dark-blue'>
            {index + 1}.{quizzes[index]?.question}
          </QuizTitleH2>
          <QuizMultipleChoiceP>
            <BaseSpan className='multiple-choice' pointer>
              ① {quizzes[index]?.multiple_choice_view1}
            </BaseSpan>
          </QuizMultipleChoiceP>
          <QuizMultipleChoiceP>
            <BaseSpan className='multiple-choice' pointer>
              ② {quizzes[index]?.multiple_choice_view2}
            </BaseSpan>
          </QuizMultipleChoiceP>
          <QuizMultipleChoiceP>
            <BaseSpan className='multiple-choice' pointer>
              ③ {quizzes[index]?.multiple_choice_view3}
            </BaseSpan>
          </QuizMultipleChoiceP>
        </BaseDiv>,
      );
    }
    return result;
  };

  return (
    <BaseContainer>
      <button onClick={() => console.log(quizzes)}>버튼</button>
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

        {/* {quizzes.map((quiz, index) => {
          return (
            <BaseDiv padding={"0"} key={index}>
              <QuizTitleH2 className='bg-dark-blue'>
                {index + 1}.{quiz.question}
              </QuizTitleH2>
              <QuizMultipleChoiceP>
                <BaseSpan className='multiple-choice' pointer>
                  ① {quiz.multiple_choice_view1}
                </BaseSpan>
              </QuizMultipleChoiceP>
              <QuizMultipleChoiceP>
                <BaseSpan className='multiple-choice' pointer>
                  ② {quiz.multiple_choice_view2}
                </BaseSpan>
              </QuizMultipleChoiceP>
              <QuizMultipleChoiceP>
                <BaseSpan className='multiple-choice' pointer>
                  ③ {quiz.multiple_choice_view3}
                </BaseSpan>
              </QuizMultipleChoiceP>
            </BaseDiv>
          );
        })} */}

        {createHTMLString()}
      </QuizContainer>
    </BaseContainer>
  );
}

export default Quiz;
