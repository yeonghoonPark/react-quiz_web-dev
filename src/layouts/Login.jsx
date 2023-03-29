import styled from "styled-components";
import AppContainer from "../components/AppContainer";
import AppTitle from "../components/AppTitle";
import BaseDiv from "../components/base/BaseDiv";
import BaseInput from "../components/base/BaseInput";
import BaseButton from "../components/base/BaseButton";
import BaseSpan from "../components/base/BaseSpan";
import iconKakao from "../../public/assets/images/icon_kakao.png";
import iconGoogle from "../../public/assets/images/icon_google.png";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { useRef, useLayoutEffect, useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onLogin, getAccessToken } from "../reducers/login";
import { useNavigate } from "react-router-dom";
import AppAlert from "../components/AppAlert";

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4rem;
  @media all and (max-width: 29.9375rem) {
    padding-bottom: 2rem;
  }
`;

const SocialLoginDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 4rem;

  @media all and (max-width: 29.9375rem) {
    padding-bottom: 2rem;
  }
`;

const ImageBoxDiv = styled.div`
  width: 48px;
  height: 48px;
  cursor: pointer;
`;

function Login() {
  // console.log("[Login]");

  const storeState = useSelector((state) => state);
  const dispatch = useDispatch();

  const inputRefId = useRef(null);
  const inputRefPassword = useRef(null);

  const [inputValueId, setInputValueId] = useState("");
  const [inputValuePassword, setInputValuePassword] = useState("");

  const [isNoneId, setIsNoneId] = useState(false);
  const [isNonePassword, setIsNonePassword] = useState(false);

  const [isAlert, setIsAlert] = useState(false);
  const [alertBackgroud, setAlertBackground] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const navigate = useNavigate();

  const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const setLoginAlert = (message, bg) => {
    setAlertMessage(message);
    setAlertBackground(bg);
    setIsAlert(true);
    setTimeout(() => {
      setIsAlert(false);
      navigate("/");
    }, 1500);
  };

  const onHandleLogin = (e) => {
    // console.log("[onHandleLogin]");
    e.preventDefault();
    if (inputValueId === "") {
      setIsNoneId(true);
      inputRefId.current.focus();
      return;
    } else if (inputValuePassword === "") {
      setIsNonePassword(true);
      inputRefPassword.current.focus();
      return;
    } else {
      storeState.login.user_id = inputValueId;
      storeState.login.user_password = inputRefPassword;
      dispatch(onLogin());
      setLoginAlert("로그인에 성공하였습니다.", "bg-primary");
    }
  };

  const onHandleLoginWithKakao = () => {
    Kakao.Auth.loginForm({
      success: function (auth) {
        Kakao.Auth.setAccessToken(auth.access_token);
        Kakao.API.request({
          url: "/v2/user/me",
          success: function (res) {
            // console.log(res, "response");
            storeState.login.user_id = res.kakao_account.email;
            storeState.login.access_token = auth.access_token;
            dispatch(onLogin());
            dispatch(getAccessToken());
            setLoginAlert("카카오로그인에 성공하였습니다.", "bg-primary");
          },
          fail: function (err) {
            alert(
              `카카로 로그인에 실패했습니다. 관리자에게 문의하세요.
                  ${JSON.stringify(err)}`,
            );
          },
        });
      },
      fail: function (err) {
        // console.log(err);
      },
    });
  };

  const googleLoginTest = {
    googleLoginTestSuccess: function (res) {
      // console.log(res);
      // console.log(res.wt.cu, "이메일");
      storeState.login.user_id = res.wt.cu;
      dispatch(onLogin());
      setLoginAlert("구글로그인에 성공하였습니다.", "bg-primary");
    },
    googleLoginTestFailure: function (err) {
      // console.log(err);
    },
  };

  useLayoutEffect(() => {
    inputRefId.current.focus();
  }, []);

  return (
    <AppContainer>
      {isAlert && (
        <AppAlert
          color={"var(--color-white)"}
          className={alertBackgroud}
          message={alertMessage}
        />
      )}
      <AppTitle>Login</AppTitle>

      <LoginForm>
        <BaseDiv width={"33%"} minWidth={"314px"} padding={"8px 0"}>
          <label htmlFor='user-id' style={{ display: "none" }} />
          <BaseInput
            className='black'
            width={"calc(100% - 38px)"}
            padding={"14px 18px"}
            inputRef={inputRefId}
            type={"text"}
            value={inputValueId}
            id={"user-id"}
            placeholder={"아이디 또는 이메일"}
            onChange={(e) => setInputValueId(e.target.value)}
          />
          {isNoneId && (
            <BaseSpan
              className='danger'
              display={"block"}
              fontSize={"0.8rem"}
              margin={"16px 20px 0"}
            >
              아이디 또는 이메일을 입력해주세요.
            </BaseSpan>
          )}
        </BaseDiv>
        <BaseDiv width={"33%"} minWidth={"314px"} padding={"8px 0"}>
          <label htmlFor='user-password' style={{ display: "none" }} />
          <BaseInput
            className='black'
            width={"calc(100% - 38px)"}
            padding={"14px 18px"}
            inputRef={inputRefPassword}
            type={"password"}
            value={inputValuePassword}
            id={"user-password"}
            placeholder={"비밀번호"}
            onChange={(e) => setInputValuePassword(e.target.value)}
          />
          {isNonePassword && (
            <BaseSpan
              className='danger'
              display={"block"}
              fontSize={"0.8rem"}
              margin={"16px 20px 0"}
            >
              비밀번호를 입력해주세요.
            </BaseSpan>
          )}
        </BaseDiv>
        <BaseDiv width={"33%"} minWidth={"314px"} padding={"8px 0"}>
          <BaseButton
            width={"100%"}
            padding={"14px 18px"}
            onClick={(e) => onHandleLogin(e)}
          >
            Login
          </BaseButton>
        </BaseDiv>
      </LoginForm>

      <SocialLoginDiv className='social-login-header'>
        <BaseDiv
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"33%"}
          minWidth={"314px"}
          padding={"8px 0"}
        >
          <hr style={{ width: "33%" }} />
          <BaseSpan width={"34%"} textAlign={"center"} userSelectNone>
            Social
          </BaseSpan>
          <hr style={{ width: "33%" }} />
        </BaseDiv>
      </SocialLoginDiv>

      <SocialLoginDiv className='social-login-body'>
        <BaseDiv
          display={"flex"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          width={"33%"}
          minWidth={"314px"}
          padding={"8px 0"}
        >
          <ImageBoxDiv onClick={() => onHandleLoginWithKakao()}>
            <img
              title='카카오 아이디로 로그인'
              src={iconKakao}
              alt='kakao_icon'
              style={{ borderRadius: "5px" }}
            />
          </ImageBoxDiv>

          <ImageBoxDiv>
            <GoogleLogin
              clientId={GOOGLE_CLIENT_ID}
              responseType={"id_token"}
              onSuccess={(res) => googleLoginTest.googleLoginTestSuccess(res)}
              onFailure={(err) => googleLoginTest.googleLoginTestFailure(err)}
              render={(renderProps) => (
                <img
                  onClick={renderProps.onClick}
                  title='구글 아이디로 로그인'
                  src={iconGoogle}
                  alt='google_icon'
                  style={{ border: "1px solid #4285F4", borderRadius: "5px" }}
                />
              )}
            />
          </ImageBoxDiv>
        </BaseDiv>
      </SocialLoginDiv>
    </AppContainer>
  );
}

export default Login;
