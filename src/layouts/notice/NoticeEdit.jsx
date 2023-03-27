import styled from "styled-components";
import AppContainer from "../../components/AppContainer";
import AppTitle from "../../components/AppTitle";
import AppAlert from "../../components/AppAlert";
import BaseDiv from "../../components/base/BaseDiv";
import BaseSpan from "../../components/base/BaseSpan";
import BaseSelect from "../../components/base/BaseSelect";
import BaseInput from "../../components/base/BaseInput";
import BaseTextarea from "../../components/base/BaseTextarea";
import BaseButton from "../../components/base/BaseButton";
import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import notice from "../../data/notice";

const NoticeEditContainer = styled.div`
  position: relative;
  width: 70%;
  min-width: 314px;
  margin: 0 auto 1.5rem;
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

const ButtonGroupContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 8px;
  width: 70%;
  min-width: 314px;
  margin: 0 auto 1.5rem;
  padding: 0;
`;

function NoticeEdit() {
  console.log("[NoticeEdit]");

  const CLASSNAME_ANNOUNCEMENT = "announcement";
  const CLASSNAME_CHITCHAT = "chitchat";
  const CLASSNAME_REQUEST = "request";

  const storeState = useSelector((state) => state);

  const { uniqNo } = useParams();
  const navigate = useNavigate();

  const [selectedNotice, setSelectedNotice] = useState();

  const selectRef = useRef(null);
  const inputRefTitle = useRef(null);
  const textareaRefContent = useRef(null);

  const [isAlert, setIsAlert] = useState(false);
  const [alertBackgroud, setAlertBackground] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const [optionValue, setOptionValue] = useState("");
  const [inputValueTitle, setInputValueTitle] = useState("");
  const [textareaValueContent, setTextareaValueContent] = useState("");

  const addZero = (number) => (number < 10 ? "0" + number : "" + number);
  const date = new Date();
  const years = String(date.getFullYear()).substring(2, 5);
  const months = addZero(date.getMonth() + 1);
  const dates = addZero(date.getDate());
  const hours = String(date.getHours());
  const minutes = addZero(date.getMinutes());
  const seconds = addZero(date.getSeconds());

  const newNoticeItem = {
    uniq_no: null,
    article: null,
    article_type: "",
    title: null,
    content: null,
    author: null,
    hits: "",
    create_date: null,
    create_detail_date: null,
    edited_date: null,
  };

  const findEditedNotice = () => {
    notice.find((cV) => {
      if (cV.uniq_no === parseInt(uniqNo)) {
        setSelectedNotice(cV);
        setOptionValue(cV.article_type);
        setInputValueTitle(cV.title);
        setTextareaValueContent(cV.content);
      }
    });
  };

  const setWriteAlert = (message, bg, el) => {
    setAlertMessage(message);
    setAlertBackground(bg);
    setIsAlert(true);
    setTimeout(() => {
      setIsAlert(false);
      el ? el.current.focus() : navigate(`/notice/detail/${uniqNo}`);
    }, 1500);
  };

  const editData = () => {
    if (optionValue === "") {
      setWriteAlert("글 분류를 선택해주세요.", "bg-danger", selectRef);
      return;
    } else if (!inputValueTitle) {
      setWriteAlert("글 제목을 입력해주세요.", "bg-danger", inputRefTitle);
      return;
    } else if (!textareaValueContent) {
      setWriteAlert("글 내용을 입력해주세요.", "bg-danger", textareaRefContent);
      return;
    } else {
      newNoticeItem.uniq_no = selectedNotice?.uniq_no;
      newNoticeItem.article = optionValue === "chitchat" ? "잡담" : "요청";
      newNoticeItem.article_type = optionValue;
      newNoticeItem.title = inputValueTitle;
      newNoticeItem.content = textareaValueContent;
      newNoticeItem.author = selectedNotice?.author;
      newNoticeItem.create_date = selectedNotice?.create_date;
      newNoticeItem.create_detail_date = selectedNotice?.create_detail_date;
      newNoticeItem.edited_date = `${years}.${months}.${dates} ${hours}:${minutes}:${seconds}`;

      const index = notice.findIndex((cV) => cV.uniq_no === parseInt(uniqNo));
      notice.splice(index, 1, newNoticeItem);
      setWriteAlert("글 수정이 완료되었습니다.", "bg-success");
    }
  };

  useEffect(() => {
    findEditedNotice();
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
      <AppTitle>Edit</AppTitle>

      <NoticeEditContainer>
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
          <BaseSelect
            selectRef={selectRef}
            name=''
            id=''
            padding={"4px 8px"}
            value={optionValue}
            onChange={(e) => setOptionValue(e.target.value)}
          >
            <option value=''>선택</option>
            {storeState.login.user_id === "운영자" && (
              <option value={CLASSNAME_ANNOUNCEMENT}>공지</option>
            )}
            <option value={CLASSNAME_CHITCHAT}>잡담</option>
            <option value={CLASSNAME_REQUEST}>요청</option>
          </BaseSelect>
        </BaseDiv>

        <Hr />

        <BaseDiv display={"flex"} alignItems={"center"} padding={"16px 8px"}>
          <BaseSpan width={"30%"} textAlign={"center"}>
            글 제목
          </BaseSpan>
          <label htmlFor='notice-title' style={{ display: "none" }} />
          <BaseInput
            inputRef={inputRefTitle}
            className='black'
            width={"calc(70% - 36px)"}
            padding={"4px 8px"}
            type={"text"}
            id={"notice-title"}
            value={inputValueTitle}
            onChange={(e) => setInputValueTitle(e.target.value)}
          />
        </BaseDiv>

        <Hr />

        <BaseDiv display={"flex"} alignItems={"start"} padding={"16px 8px"}>
          <BaseSpan width={"30%"} textAlign={"center"}>
            글 내용
          </BaseSpan>
          <label htmlFor='notice-content' style={{ display: "none" }} />
          <BaseTextarea
            textareaRef={textareaRefContent}
            className='black'
            width={"calc(70% - 36px)"}
            height={"164px"}
            padding={"4px 8px"}
            type={"text"}
            id={"notice-content"}
            value={textareaValueContent}
            onChange={(e) => setTextareaValueContent(e.target.value)}
          />
        </BaseDiv>
      </NoticeEditContainer>

      <ButtonGroupContainer>
        <BaseButton
          className='btn-gray-600'
          onClick={() => navigate("/notice")}
        >
          목록
        </BaseButton>
        <BaseButton className='btn-green' onClick={editData}>
          글 수정완료
        </BaseButton>
      </ButtonGroupContainer>
    </AppContainer>
  );
}

export default NoticeEdit;
