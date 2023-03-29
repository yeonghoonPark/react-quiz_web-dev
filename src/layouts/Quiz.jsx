import styled from "styled-components";
import AppContainer from "../components/AppContainer";
import AppTitle from "../components/AppTitle";
import AppAlert from "../components/AppAlert";
import AppCard from "../components/AppCard";
import BaseButton from "../components/base/BaseButton";
import BaseSpan from "../components/base/BaseSpan";
import BaseDiv from "../components/base/BaseDiv";
import { FaClock, FaCheckCircle } from "react-icons/fa";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import quiz from "../data/quiz";
import rank from "../data/rank";

const QuizContainer = styled.div`
  position: relative;
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
  // console.log("[Quiz]");

  const userId = useSelector((state) => state.login.user_id);

  const navigate = useNavigate();

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

  const [isAlert, setIsAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertBackground, setAlertBackground] = useState("");

  const [isAppCard, setIsAppCard] = useState(false);

  const [newRank, setNewRank] = useState();

  const newRankObj = {
    user_id: null,
    correct_number: null,
    minute: null,
    second: null,
    millisecond: null,
  };

  const mixArrayRandomly = useCallback(
    (array) => {
      // console.log("[mixArrayRandomly]");
      return array.sort(() => Math.random() - 0.5);
    },
    [quizzes],
  );

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
    // console.log("[countCorrect]");
    clickedItem === correct ? setCorrectNumber((correctNumber += 1)) : null;
  };

  const onClickMultipleChoiceView = (e, clickedItem, correct) => {
    if (clickedItem === correct) {
      setAlertMessage("정답입니다.");
      setAlertBackground("bg-primary");
    } else {
      setAlertMessage("오답입니다.");
      setAlertBackground("bg-danger");
    }
    setIsAlert(true);
    setTimeout(() => {
      countCorrect(clickedItem, correct);
      removeElement(e);
      setIsAlert(false);
    }, 1500);
  };

  const returnQuizBoxClassName = (i) =>
    i === 0 ? "quiz-box" : "quiz-box hidden";

  const createHTMLString = () => {
    // console.log("[createHTMLString]");
    const result = [];
    for (let i = 0; i < 10; i++) {
      result.push(
        <BaseDiv
          className={returnQuizBoxClassName(i)}
          padding={"0"}
          key={quizzes[i].uniq_no}
        >
          <QuizTitleH2 className='bg-dark-blue'>
            {i + 1}.{quizzes[i]?.question}
          </QuizTitleH2>
          <QuizMultipleChoiceP>
            <BaseSpan
              className='multiple-choice'
              pointer
              userSelectNone
              onClick={(e) => {
                onClickMultipleChoiceView(
                  e,
                  quizzes[i]?.multiple_choice_view1,
                  quizzes[i]?.correct,
                );
              }}
            >
              ① {quizzes[i]?.multiple_choice_view1}
            </BaseSpan>
          </QuizMultipleChoiceP>
          <QuizMultipleChoiceP>
            <BaseSpan
              className='multiple-choice'
              pointer
              userSelectNone
              onClick={(e) => {
                onClickMultipleChoiceView(
                  e,
                  quizzes[i]?.multiple_choice_view2,
                  quizzes[i]?.correct,
                );
              }}
            >
              ② {quizzes[i]?.multiple_choice_view2}
            </BaseSpan>
          </QuizMultipleChoiceP>
          <QuizMultipleChoiceP>
            <BaseSpan
              className='multiple-choice'
              pointer
              userSelectNone
              onClick={(e) => {
                onClickMultipleChoiceView(
                  e,
                  quizzes[i]?.multiple_choice_view3,
                  quizzes[i]?.correct,
                );
              }}
            >
              ③ {quizzes[i]?.multiple_choice_view3}
            </BaseSpan>
          </QuizMultipleChoiceP>
        </BaseDiv>,
      );
    }
    return result;
  };

  const addZero = (number) => (number < 10 ? "0" + number : "" + number);

  const startTimer = () => {
    // console.log("[startTimer]");
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
    // console.log("[stopTimer]");
    clearInterval(timerInterval);
    setIsStart(true);
  };

  const onHandleStart = () => {
    // console.log("[onHandleStart]");
    if (!userId) {
      setIsAppCard(true);
      return;
    }
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
      setQuizzes(mixArrayRandomly(quiz));
      startTimer();
    }, 4000);
  };

  const pushNewRank = () => {
    newRankObj.user_id = userId;
    newRankObj.correct_number = String(correctNumber);
    newRankObj.minute = minute;
    newRankObj.second = second;
    newRankObj.millisecond = millisecond;
    rank.push(newRankObj);
  };

  const arrangeArray = (array) => {
    // console.log("[arrangeArray]");
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

  const setRank = (array) => {
    // console.log("[setRank]");
    array.forEach((item, index) => {
      if (
        item.user_id === userId &&
        item.correct_number === String(correctNumber) &&
        item.minute === minute &&
        item.second === second &&
        item.millisecond === millisecond
      ) {
        setNewRank(index + 1);
      }
    });
  };

  const returnRecordMessage = (correctNumber) => {
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

  const finishedQuiz = () => {
    // console.log("[finishedQuiz]");
    stopTimer();
    pushNewRank();
    arrangeArray(rank);
    setRank(rank);
    setIsStart(true);
  };

  const onHandleRestart = () => {
    // console.log("[onHandleRestart]");
    setCorrectNumber(0);
    setCount(3);
    setIsReady(false);
    setIsCountdown(false);
    setIsStart(false);
  };

  useEffect(() => {
    return () => {
      clearInterval(countIntervalRef.current);
      countIntervalRef.current = null;
      onHandleRestart();
    };
  }, []);

  return (
    <AppContainer>
      {isAlert && (
        <AppAlert
          color={"var(--color-white)"}
          className={alertBackground}
          message={alertMessage}
        />
      )}
      {isAppCard && (
        <AppCard
          message={
            "로그인 후 퀴즈이용이 가능합니다, 로그인페이지로 이동하시겠습니까?"
          }
          onClickCancle={() => setIsAppCard(false)}
          onClickConfirm={() => navigate("/login")}
        />
      )}
      <AppTitle>Quiz</AppTitle>
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
                tabletFlexDirection={"column"}
                tabletAlignItems={"flex-start"}
              >
                <BaseSpan
                  className='tablet-margin-bottom'
                  mobileFontSize={"0.8rem"}
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
                  mobileFontSize={"0.8rem"}
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
                {returnRecordMessage(correctNumber)}
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
                {newRank < 11 ? (
                  <BaseSpan margin={"8px"}>
                    등수 : <BaseSpan className={"danger"}>{newRank}</BaseSpan>{" "}
                    등
                  </BaseSpan>
                ) : (
                  <BaseSpan margin={"8px"}>등수 : 없음</BaseSpan>
                )}
              </BaseDiv>

              <BaseButton className={"large"} onClick={onHandleRestart}>
                재도전
              </BaseButton>
            </BaseDiv>
          )}
        </QuizContainer>
      )}
    </AppContainer>
  );
}

export default Quiz;
