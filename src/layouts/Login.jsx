import styled from "styled-components";
import BaseContainer from "../components/base/BaseContainer";
import BaseDiv from "../components/base/BaseDiv";
import BaseInput from "../components/base/BaseInput";
import BaseButton from "../components/base/BaseButton";
import BaseSpan from "../components/base/BaseSpan";
// import iconNaver from "../../public/assets/images/icon_naver.png";
import iconKakao from "../../public/assets/images/icon_kakao.png";
import { useRef, useLayoutEffect, useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onLogin, onLoginWithKakao } from "../reducers/login";
import { useNavigate } from "react-router-dom";

import iconGoogle from "../../public/assets/images/icon_google.png";

import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";

const TitleH1 = styled.h1`
  margin-bottom: 1.5rem;
  padding: 2.5rem 0;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  pointer-events: none;
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

function GoogleTestBtn() {
  //   useEffect(() => {
  //     function start() {
  //       gapi.client.init({
  //         clientId,
  //         scope: "email",
  //       });
  //     }

  //     gapi.load("client:auth2", start);
  //   });

  //   const onSuccess = async (res) => {
  //     console.log(res);
  //     console.log(res.wt.cu, "이메일");
  //   };
  //   const onFailure = (err) => {
  //     console.log(err);
  //   };

  return (
    <GoogleLogin
      clientId={clientId}
      responseType={"id_token"}
      onSuccess={onSuccess}
      onFailure={onFailure}
      render={(renderProps) => (
        <ImageBoxDiv>
          <img
            onClick={renderProps.onClick}
            title='구글 아이디로 로그인'
            src={iconGoogle}
            alt='google_icon'
            style={{ border: "1px solid #4285F4", borderRadius: "5px" }}
          />
        </ImageBoxDiv>
      )}
    />
  );
}

function Login() {
  console.log("[Login]");

  // state's
  const storeState = useSelector((state) => state);
  const dispatch = useDispatch();

  const inputRefId = useRef(null);
  const inputRefPassword = useRef(null);

  const [inputValueId, setInputValueId] = useState("");
  const [inputValuePassword, setInputValuePassword] = useState("");

  const [isNoneId, setIsNoneId] = useState(false);
  const [isNonePassword, setIsNonePassword] = useState(false);

  const navigate = useNavigate();

  const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  // function's
  useLayoutEffect(() => {
    inputRefId.current.focus();
  }, []);

  const onHandleLogin = (e) => {
    console.log("[onHandleLogin]");
    e.preventDefault();
    if (inputValueId === "") {
      setIsNoneId(true);
      inputRefId.current.focus();
    } else if (inputValuePassword === "") {
      setIsNonePassword(true);
      inputRefPassword.current.focus();
    } else {
      storeState.login.user_id = inputValueId;
      storeState.login.user_password = inputValuePassword;
      dispatch(onLogin());
      navigate("/");
    }
  };

  const onHandleLoginWithKakao = () => {
    Kakao.Auth.loginForm({
      success: function (auth) {
        Kakao.Auth.setAccessToken(auth.access_token);
        Kakao.API.request({
          url: "/v2/user/me",
          success: function (res) {
            console.log(res, "response");
            storeState.login.user_id = res.kakao_account.email;
            dispatch(onLoginWithKakao());
            navigate("/");
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
        console.log(err);
      },
    });
  };

  // const onLoginWithNaver = () => {
  //   const naver_id_login = new window.naver_id_login(
  //     "R8QiGDSVueMO56TC5PVt",
  //     "http://127.0.0.1:5173",
  //   );
  //   const state = naver_id_login.getUniqState();
  //   naver_id_login.setButton("green", 1, 48.71);
  //   naver_id_login.setDomain("http://127.0.0.1:5173");
  //   naver_id_login.setState(state);
  //   // naver_id_login.setPopup();
  //   naver_id_login.init_naver_id_login();

  //   // navigate("/");
  // };

  // useEffect(() => {
  //   onLoginWithNaver();
  // }, []);

  const googleLoginTest = {
    googleLoginTestSuccess: function (res) {
      console.log(res);
      console.log(res.wt.cu, "이메일");
      storeState.login.user_id = res.wt.cu;
      dispatch(onLogin());
      navigate("/");
    },
    googleLoginTestFailure: function (err) {
      console.log(err);
    },
  };

  return (
    <BaseContainer>
      <TitleH1>Login</TitleH1>

      <LoginForm>
        <BaseDiv width={"33%"} minWidth={"314px"} padding={"8px 0"}>
          <label htmlFor='userId' style={{ display: "none" }} />
          <BaseInput
            inputRef={inputRefId}
            type={"text"}
            value={inputValueId}
            id={"userId"}
            placeholder={"아이디 또는 이메일"}
            onChange={(e) => setInputValueId(e.target.value)}
          />
          {isNoneId ? (
            <BaseSpan
              className='danger'
              display={"block"}
              fontSize={"0.8rem"}
              margin={"16px 20px 0"}
            >
              아이디 또는 이메일을 입력해주세요.
            </BaseSpan>
          ) : null}
        </BaseDiv>
        <BaseDiv width={"33%"} minWidth={"314px"} padding={"8px 0"}>
          <label htmlFor='userPassword' style={{ display: "none" }} />
          <BaseInput
            inputRef={inputRefPassword}
            type={"password"}
            value={inputValuePassword}
            id={"userPassword"}
            placeholder={"비밀번호"}
            onChange={(e) => setInputValuePassword(e.target.value)}
          />
          {isNonePassword ? (
            <BaseSpan
              className='danger'
              display={"block"}
              fontSize={"0.8rem"}
              margin={"16px 20px 0"}
            >
              비밀번호를 입력해주세요.
            </BaseSpan>
          ) : null}
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
          <BaseSpan width={"34%"} textAlign={"center"} pointerEventsNone>
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
          {/* <ImageBoxDiv id='naver_id_login'>
            <img
              src={iconNaver}
              alt='naver_icon'
              style={{ borderRadius: "5px" }}
            />
          </ImageBoxDiv> */}
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
          {/* <GoogleTestBtn /> */}
        </BaseDiv>
      </SocialLoginDiv>
    </BaseContainer>
  );
}

export default Login;
