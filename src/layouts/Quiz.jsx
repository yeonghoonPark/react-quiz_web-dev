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
// import
// increaseCorrectNumber,
// resetCorrectNumber,
// testTimeAttack,
// "../reducers/record";

const TitleH1 = styled.h1`
  margin-bottom: 1.5rem;
  padding: 2.5rem 0;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  pointer-events: none;
  user-select: none;
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
  user-select: none;

  @media all and (max-width: 29.9375rem) {
    font-size: 1.3rem;
  }
`;

const QuizMultipleChoiceP = styled.p`
  width: auto;
  margin: 8px 0;
  font-size: 1.2rem;
  @media all and (max-width: 29.9375rem) {
    font-size: 1rem;
  }
`;

function Quiz() {
  console.log("[Quiz]");
  // const correctNumber = useSelector((state) => state.record.correct_number);
  let userId = useSelector((state) => state.login.user_id);
  const dispatch = useDispatch();

  const [quizzes, setQuizzes] = useState([]);

  const [minute, setMinute] = useState("00");
  const [second, setSecond] = useState("00");
  const [millisecond, setMillisecond] = useState("00");

  const [isReady, setIsReady] = useState(false);
  const [isCountdown, setIsCountdown] = useState(false);
  const [isStart, setIsStart] = useState(false);

  let [correctNumber, setCorrectNumber] = useState(0);
  let [count, setCount] = useState(3);

  const [timerInterval, setTimerInterval] = useState();
  const countIntervalRef = useRef(null);
  const CLASSNAME_HIDDEN = "hidden";

  const mixArrayRandomly = (array) => {
    console.log("[mixArrayRandomly]");
    return array.sort(() => Math.random() - 0.5);
  };

  const createHTMLString = () => {
    // console.log("[createHTMLString]");
    const result = [];
    for (let index = 0; index < 10; index++) {
      if (index === 0) {
        result.push(
          <BaseDiv className='quiz-box' padding={"0"} key={index}>
            <QuizTitleH2 className='bg-dark-blue'>
              {index + 1}.{quizzes[index]?.question}
            </QuizTitleH2>
            <QuizMultipleChoiceP>
              <BaseSpan
                className='multiple-choice'
                pointer
                userSelectNone
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
                userSelectNone
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
                userSelectNone
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
      } else {
        result.push(
          <BaseDiv className='quiz-box hidden' padding={"0"} key={index}>
            <QuizTitleH2 className='bg-dark-blue'>
              {index + 1}.{quizzes[index]?.question}
            </QuizTitleH2>
            <QuizMultipleChoiceP>
              <BaseSpan
                className='multiple-choice'
                pointer
                userSelectNone
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
                userSelectNone
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
                userSelectNone
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
      }
    }
    return result;
  };

  const removeElement = (e) => {
    // console.log("[removeElement]");
    const currentQuizBox = e.target.parentNode.parentNode;
    const nextQuizBox = currentQuizBox.nextSibling;

    nextQuizBox
      ? nextQuizBox.classList.remove(CLASSNAME_HIDDEN)
      : finishedQuiz();
    currentQuizBox.remove();
  };

  const countCorrect = (clickedItem, correct) => {
    console.log("[countCorrect]");
    if (clickedItem === correct) {
      console.log("정답");
      // dispatch(increaseCorrectNumber());
      setCorrectNumber((correctNumber += 1));
    } else {
      console.log("오답");
    }
  };

  const addZero = (number) => (number < 10 ? "0" + number : "" + number);

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
    setIsStart(true);
  };

  const onHandleStart = () => {
    console.log("[onHandleStart]");
    setIsCountdown(true);
    countIntervalRef.current = setInterval(() => {
      setCount((count -= 1));
      if (count === 0) {
        setCount("Go!!");
        clearInterval(countIntervalRef.current);
        countIntervalRef.current = null;
      }
    }, 1000);
    setTimeout(() => {
      setIsReady(true);
      setQuizzes(mixArrayRandomly(quiz.data));
      startTimer();
    }, 4000);
  };

  const finishedQuiz = () => {
    console.log("[finishedQuiz]");
    setIsStart(true);
    stopTimer();
  };

  const returnText = (correctNumber) => {
    // 0 ~ 1
    if (correctNumber < 2) {
      return `...위로의 말을 전합니다.`;
      // 2 ~ 5
    } else if (correctNumber > 1 && correctNumber < 6) {
      return `조금 더 분발해주세요.`;
      // 6 ~ 7
    } else if (correctNumber > 5 && correctNumber < 8) {
      return `상식이 뛰어나십니다.`;
      // 8 ~ 9
    } else if (correctNumber > 7 && correctNumber < 10) {
      return `훌륭해요!!`;
      // 10
    } else {
      return `축하합니다!!`;
    }
  };

  const onHandleRestart = () => {
    // dispatch(resetCorrectNumber());
    setCorrectNumber(0);
    setCount(3);
    setIsReady(false);
    setIsCountdown(false);
    setIsStart(false);
  };

  useEffect(() => {
    return () => {
      // dispatch(resetCorrectNumber());

      clearInterval(countIntervalRef.current);
      countIntervalRef.current = null;
      onHandleRestart();
    };
  }, []);

  return (
    <BaseContainer>
      <TitleH1>Quiz</TitleH1>
      {!isReady ? (
        <QuizContainer>
          <BaseDiv
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            padding={"3rem 0"}
          >
            {!isCountdown ? (
              <>
                <BaseSpan userSelectNone margin={"0 0 3rem"} fontSize={"2rem"}>
                  준비되셨나요?
                </BaseSpan>
                <BaseButton className={"large"} onClick={onHandleStart}>
                  Start
                </BaseButton>
              </>
            ) : (
              <BaseSpan userSelectNone margin={"1.8rem 0"} fontSize={"4rem"}>
                {count}
              </BaseSpan>
            )}
          </BaseDiv>
        </QuizContainer>
      ) : (
        <QuizContainer>
          {!isStart ? (
            <>
              <BaseDiv
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                padding={"0 0 1.5rem"}
                mobileFlexDirection={"column"}
                mobileAlignItems={"flex-start"}
              >
                <BaseSpan
                  className='tablet-margin-bottom mobile-font-s'
                  padding={"8px"}
                  border={"1px solid var(--color-gray-500)"}
                  borderRadius={"var(--radius-standard)"}
                  userSelectNone
                >
                  <FaCheckCircleIcon /> 맞춘 갯수:{" "}
                  <BaseSpan className={"danger"} userSelectNone>
                    {correctNumber}
                  </BaseSpan>
                </BaseSpan>
                <BaseSpan
                  className='mobile-font-s'
                  padding={"8px"}
                  border={"1px solid var(--color-gray-500)"}
                  borderRadius={"var(--radius-standard)"}
                  userSelectNone
                >
                  <FaClockIcon /> 소요 시간: {minute}:{second}.
                  <BaseSpan className={"danger"} userSelectNone>
                    {millisecond}
                  </BaseSpan>
                </BaseSpan>
              </BaseDiv>
              <div>{createHTMLString()}</div>
            </>
          ) : (
            <BaseDiv
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              padding={"3rem 0"}
            >
              <QuizTitleH2 className='bg-dark-blue'>'{userId}'</QuizTitleH2>
              <BaseSpan margin={"0 0 1.5rem"}>
                {returnText(correctNumber)}
              </BaseSpan>
              <BaseDiv
                display={"flex"}
                flexDirection={"column"}
                margin={"0 0 1.5rem"}
                padding={"0"}
              >
                <BaseSpan margin={"8px"}>
                  맞춘 갯수 :{" "}
                  <BaseSpan className={"danger"}>{correctNumber}</BaseSpan> 문제
                </BaseSpan>
                <BaseSpan margin={"8px"}>
                  소요 시간 : {minute}:{second}:
                  <BaseSpan className={"danger"}>{millisecond}</BaseSpan>
                </BaseSpan>
                <BaseSpan margin={"8px"}>등수 : 없음</BaseSpan>
              </BaseDiv>

              <BaseButton className={"large"} onClick={onHandleRestart}>
                재도전
              </BaseButton>
            </BaseDiv>
          )}
        </QuizContainer>
      )}
    </BaseContainer>
  );
}

export default Quiz;
