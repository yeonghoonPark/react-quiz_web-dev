import styled from "styled-components";
import AppContainer from "../../components/AppContainer";
import AppTitle from "../../components/AppTitle";
import AppAlert from "../../components/AppAlert";
import AppCard from "../../components/AppCard";
import BaseDiv from "../../components/base/BaseDiv";
import BaseSpan from "../../components/base/BaseSpan";
import BaseButton from "../../components/base/BaseButton";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import notice from "../../data/notice";
import { useSelector } from "react-redux";

const NoticeDetailContainer = styled.div`
  position: relative;
  width: 70%;
  min-width: 314px;
  margin: 0 auto 1rem;
  padding: 0;
  border: 2px solid var(--color-gray-500);
  border-radius: var(--radius-standard);

  @media all and (max-width: 47.9375rem) {
  }

  @media all and (max-width: 29.9375rem) {
    font-size: 0.8rem;
  }
`;

const Hr = styled.hr`
  width: 90%;
  height: 1px;
  margin: 0 auto;
  border: 0;
  background-color: var(--color-gray-500);
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 70%;
  min-width: 314px;
  margin: 0 auto 1rem;
  padding: 0;
`;

const ButtonGroupContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 8px;
  width: 70%;
  min-width: 314px;
  margin: 0 auto 1.5rem;
  padding: 0;
`;

function NoticeDetail() {
  // console.log("[NoticeDetail]");
  const storeState = useSelector((state) => state);

  const { uniqNo } = useParams();
  const navigate = useNavigate();

  const [selectedNotice, setSelectedNotice] = useState();

  const [isAlert, setIsAlert] = useState(false);
  const [alertBackgroud, setAlertBackground] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const [isAppCard, setIsAppCard] = useState(false);

  const findSelectedNotice = () => {
    notice.find(
      (cV) => cV.uniq_no === parseInt(uniqNo) && setSelectedNotice(cV),
    );
  };

  const setEditAndDeleteAlert = (message, bg) => {
    setAlertMessage(message);
    setAlertBackground(bg);
    setIsAlert(true);
    setTimeout(() => {
      setIsAlert(false);
    }, 1500);
  };

  const onHandleEditButton = () => {
    selectedNotice?.author !== storeState.login.user_id
      ? setEditAndDeleteAlert("작성자만 수정 가능합니다.", "bg-danger")
      : navigate(`/notice/detail/edit/${uniqNo}`);
  };

  const onHandleDeleteButton = () => {
    selectedNotice?.author !== storeState.login.user_id
      ? setEditAndDeleteAlert("작성자만 삭제 가능합니다.", "bg-danger")
      : setIsAppCard(true);
  };

  const deleteData = () => {
    // console.log("[deleteData]");
    const index = notice.findIndex((cV) => cV.uniq_no === parseInt(uniqNo));
    notice.splice(index, 1);
    setIsAppCard(false);
    setEditAndDeleteAlert("글 삭제가 완료되었습니다.", "bg-success");
    setTimeout(() => {
      navigate("/notice");
    }, 1500);
  };

  useEffect(() => {
    findSelectedNotice();
  }, [selectedNotice]);

  return (
    <AppContainer>
      {isAlert && (
        <AppAlert
          color={"var(--color-white)"}
          className={alertBackgroud}
          message={alertMessage}
        />
      )}
      {isAppCard && (
        <AppCard
          message={
            "한 번 삭제한 자료는 복구 할 수 없습니다, 그래도 삭제하시겠습니까?"
          }
          onClickCancle={() => setIsAppCard(false)}
          onClickConfirm={deleteData}
        />
      )}
      <AppTitle>{selectedNotice?.author}의 글</AppTitle>

      <NoticeDetailContainer>
        <BaseDiv display={"flex"} alignItems={"center"} padding={"20px 8px"}>
          <BaseSpan width={"30%"} textAlign={"center"}>
            작성자
          </BaseSpan>
          <BaseSpan width={"70%"}>{selectedNotice?.author}</BaseSpan>
        </BaseDiv>

        <Hr />

        <BaseDiv display={"flex"} alignItems={"center"} padding={"16px 8px"}>
          <BaseSpan width={"30%"} textAlign={"center"}>
            글 분류
          </BaseSpan>
          <BaseSpan
            padding={"4px 8px"}
            border={"1px solid var(--color-gray-500)"}
            borderRadius={"var(--radius-standard)"}
            userSelectNone
          >
            {selectedNotice?.article}
          </BaseSpan>
        </BaseDiv>

        <Hr />

        <BaseDiv display={"flex"} alignItems={"center"} padding={"20px 8px"}>
          <BaseSpan width={"30%"} textAlign={"center"}>
            글 제목
          </BaseSpan>
          <BaseSpan width={"70%"}>{selectedNotice?.title}</BaseSpan>
        </BaseDiv>

        <Hr />

        <BaseDiv display={"flex"} padding={"20px 8px"}>
          <BaseSpan width={"30%"} textAlign={"center"}>
            글 내용
          </BaseSpan>
          <BaseDiv
            className='word-break-all'
            width={"70%"}
            height={"166px"}
            overflow={"auto"}
          >
            {selectedNotice?.content}
          </BaseDiv>
        </BaseDiv>
      </NoticeDetailContainer>

      <DateContainer>
        <BaseSpan fontSize={"0.8rem"} color={"var(--color-gray-500)"}>
          작성일 {selectedNotice?.create_detail_date}
        </BaseSpan>
        {selectedNotice?.edited_date && (
          <BaseSpan fontSize={"0.8rem"} color={"var(--color-gray-500)"}>
            수정일 {selectedNotice?.edited_date}
          </BaseSpan>
        )}
      </DateContainer>

      <ButtonGroupContainer>
        <BaseButton
          className='btn-gray-600'
          onClick={() => navigate("/notice")}
        >
          목록
        </BaseButton>
        <BaseButton className='btn-green' onClick={onHandleEditButton}>
          수정
        </BaseButton>
        <BaseButton className='btn-red' onClick={onHandleDeleteButton}>
          삭제
        </BaseButton>
      </ButtonGroupContainer>
    </AppContainer>
  );
}

export default NoticeDetail;
