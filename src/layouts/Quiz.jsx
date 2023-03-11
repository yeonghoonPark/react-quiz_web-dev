import styled from "styled-components";
import BaseContainer from "../components/base/BaseContainer";
import BaseButton from "../components/base/BaseButton";
import BaseSpan from "../components/base/BaseSpan";
import BaseDiv from "../components/base/BaseDiv";
import { FaClock, FaCheckCircle } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import quiz from "../data/quiz.json";

import { useDispatch, useSelector } from "react-redux";
import { increaseCorrectNumber, testTimeAttack } from "../reducers/record";

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
  console.log("[Quiz]");
  const [quizzes, setQuizzes] = useState([]);
  const CLASSNAME_HIDDEN = "hidden";

  const correctNumber = useSelector((state) => state.record.correct_number);
  const dispatch = useDispatch();

  const [minute, setMinute] = useState("00");
  const [second, setSecond] = useState("00");
  const [millisecond, setMillisecond] = useState("00");

  const mixArrayRandomly = (array) => {
    console.log("[mixArrayRandomly]");
    return array.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setQuizzes(mixArrayRandomly(quiz.data));
    displayItems();
  }, []);

  const createHTMLString = () => {
    const result = [];
    for (let index = 0; index < 10; index++) {
      result.push(
        <BaseDiv className='quiz-box' padding={"0"} key={index}>
          <QuizTitleH2 className='bg-dark-blue'>
            {index + 1}.{quizzes[index]?.question}
          </QuizTitleH2>
          <QuizMultipleChoiceP>
            <BaseSpan
              className='multiple-choice'
              pointer
              onClick={(e) => {
                countCorrect(
                  quizzes[index]?.multiple_choice_view1,
                  quizzes[index]?.correct,
                );
                removeElement(e);
              }}
            >
              ① {quizzes[index]?.multiple_choice_view1}
            </BaseSpan>
          </QuizMultipleChoiceP>
          <QuizMultipleChoiceP>
            <BaseSpan
              className='multiple-choice'
              pointer
              onClick={(e) => {
                countCorrect(
                  quizzes[index]?.multiple_choice_view2,
                  quizzes[index]?.correct,
                );
                removeElement(e);
              }}
            >
              ② {quizzes[index]?.multiple_choice_view2}
            </BaseSpan>
          </QuizMultipleChoiceP>
          <QuizMultipleChoiceP>
            <BaseSpan
              className='multiple-choice'
              pointer
              onClick={(e) => {
                countCorrect(
                  quizzes[index]?.multiple_choice_view3,
                  quizzes[index]?.correct,
                );
                removeElement(e);
              }}
            >
              ③ {quizzes[index]?.multiple_choice_view3}
            </BaseSpan>
          </QuizMultipleChoiceP>
        </BaseDiv>,
      );
      // displayItems();
    }
    return result;
  };

  const displayItems = () => {
    console.log("[displayItems]");
    const quizBoxes = document.querySelectorAll(".quiz-box");

    quizBoxes.forEach((quizBox, index) =>
      index !== 0 ? quizBox.classList.add(CLASSNAME_HIDDEN) : null,
    );
  };

  const removeElement = (e) => {
    // console.log("[removeElement]");
    const currentQuizBox = e.target.parentNode.parentNode;
    const nextQuizBox = currentQuizBox.nextSibling;

    nextQuizBox ? nextQuizBox.classList.remove(CLASSNAME_HIDDEN) : stopTimer();

    currentQuizBox.remove();
  };

  const countCorrect = (clickedItem, correct) => {
    console.log("[countCorrect]");
    if (clickedItem === correct) {
      console.log("정답");
      dispatch(increaseCorrectNumber());
    } else {
      console.log("오답");
    }
  };

  const addZero = (number) => (number < 10 ? "0" + number : "" + number);

  const [timerInterval, setTimerInterval] = useState();

  const startTimer = () => {
    console.log("[startTimer]");
    let startingPoint = Date.now();
    setTimerInterval(
      setInterval(() => {
        let currentPoint = new Date(Date.now() - startingPoint);
        setMinute(addZero(currentPoint.getMinutes()));
        setSecond(addZero(currentPoint.getSeconds()));
        setMillisecond(
          addZero(Math.floor(currentPoint.getMilliseconds() / 10)),
        );
      }, 1),
    );
  };

  const stopTimer = () => {
    console.log("[stopTimer]");
    clearInterval(timerInterval);
  };

  return (
    <BaseContainer>
      <button
        onClick={() => {
          startTimer();
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          stopTimer();
        }}
      >
        Stop
      </button>
      <button onClick={() => {}}>Incease</button>
      <span>{}</span>
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
              {correctNumber}
            </BaseSpan>
          </BaseSpan>
          <BaseSpan
            padding={"8px"}
            border={"1px solid var(--color-gray-500)"}
            borderRadius={"var(--radius-standard)"}
            pointerEventsNone
          >
            <FaClockIcon /> 소요 시간: {minute}:{second}.
            <BaseSpan className={"danger"} pointerEventsNone>
              {millisecond}
            </BaseSpan>
          </BaseSpan>
        </BaseDiv>

        {createHTMLString()}
      </QuizContainer>
    </BaseContainer>
  );
}

export default Quiz;
