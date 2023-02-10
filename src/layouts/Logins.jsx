import styled from "styled-components";
import BaseContainer from "../components/base/BaseContainer";
import BaseDiv from "../components/base/BaseDiv";
import BaseInput from "../components/base/BaseInput";
import BaseButton from "../components/base/BaseButton";
import BaseSpan from "../components/base/BaseSpan";
import naverIcon from "../../public/assets/images/icon_naver.png";
import kakaoIcon from "../../public/assets/images/icon_kakao.png";
import { useEffect, useState, useCallback, memo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onLogin } from "../reducers/login";

const TitleH1 = styled.h1`
  margin-bottom: 1.5rem;
  padding: 2.5rem 0;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
`;

const SocialLoginDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
`;

const ImageBoxDiv = styled.div`
  width: 48px;
  height: 48px;
  cursor: pointer;
`;

function Login() {
  console.log("[Login]");
  const storeState = useSelector((state) => state);
  const dispatch = useDispatch();

  const enteredId = useRef(null);
  const enteredPassword = useRef(null);

  const getUserId = (e) => {
    console.log("[getUserId]");
    enteredId.current = e.target.value;
  };

  const getUserPassword = (e) => {
    console.log("[getUserPassword]");
    enteredPassword.current = e.target.value;
  };

  const onHandleLogin = (e) => {
    console.log("[onHandleLogin]");
    e.preventDefault();
    storeState.login.user_id = enteredId.current;
    storeState.login.user_password = enteredPassword.current;
    dispatch(onLogin());
    console.log(storeState, "@중앙스테이트 로그인");
  };

  return (
    <BaseContainer>
      <TitleH1>Login</TitleH1>

      <LoginForm>
        <BaseDiv width={"33%"} minWidth={"314px"} padding={"8px 0"}>
          <label htmlFor='userId' style={{ display: "none" }} />
          <BaseInput
            type={"text"}
            id={"userId"}
            placeholder={"아이디 또는 이메일"}
            onChange={(e) => getUserId(e)}
          />
        </BaseDiv>
        <BaseDiv width={"33%"} minWidth={"314px"} padding={"8px 0"}>
          <label htmlFor='userPassword' style={{ display: "none" }} />
          <BaseInput
            type={"password"}
            id={"userPassword"}
            placeholder={"비밀번호"}
            onChange={(e) => getUserPassword(e)}
          />
        </BaseDiv>
        <BaseDiv width={"33%"} minWidth={"314px"} padding={"8px 0"}>
          <BaseButton
            message={"Login"}
            width={"100%"}
            padding={"14px 18px"}
            onClick={(e) => onHandleLogin(e)}
          />
        </BaseDiv>
      </LoginForm>

      <SocialLoginDiv>
        <BaseDiv
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"33%"}
          minWidth={"314px"}
          padding={"8px 0"}
        >
          <hr style={{ width: "33%" }} />
          <BaseSpan width={"34%"} textAlign={"center"}>
            Social
          </BaseSpan>
          <hr style={{ width: "33%" }} />
        </BaseDiv>
      </SocialLoginDiv>

      <SocialLoginDiv>
        <BaseDiv
          display={"flex"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          width={"33%"}
          minWidth={"314px"}
          padding={"8px 0"}
        >
          <ImageBoxDiv>
            <img
              src={naverIcon}
              alt='naver_icon'
              style={{ borderRadius: "5px" }}
            />
          </ImageBoxDiv>
          <ImageBoxDiv>
            <img
              src={kakaoIcon}
              alt='kakao_icon'
              style={{ borderRadius: "5px" }}
            />
          </ImageBoxDiv>
        </BaseDiv>
      </SocialLoginDiv>
    </BaseContainer>
  );
}

export default memo(Login);
