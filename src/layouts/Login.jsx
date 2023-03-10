import styled from "styled-components";
import BaseContainer from "../components/base/BaseContainer";
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
import { onLogin } from "../reducers/login";
import { useNavigate } from "react-router-dom";

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
  console.log("[Login]");

  // state's
  // let userId = useSelector((state) => state.login.user_id);
  // let userPassword = useSelector((state) => state.login.user_password);
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
      // userId = inputValueId;
      // userPassword = inputValuePassword;
      storeState.login.user_id = inputValueId;
      storeState.login.user_password = inputRefPassword;
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
            dispatch(onLogin());
            navigate("/");
          },
          fail: function (err) {
            alert(
              `????????? ???????????? ??????????????????. ??????????????? ???????????????.
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

  const googleLoginTest = {
    googleLoginTestSuccess: function (res) {
      console.log(res);
      console.log(res.wt.cu, "?????????");
      storeState.login.user_id = res.wt.cu;
      dispatch(onLogin());
      navigate("/");
    },
    googleLoginTestFailure: function (err) {
      console.log(err);
    },
  };

  useLayoutEffect(() => {
    inputRefId.current.focus();
  }, []);

  return (
    <BaseContainer>
      <TitleH1>Login</TitleH1>

      <LoginForm>
        <BaseDiv width={"33%"} minWidth={"314px"} padding={"8px 0"}>
          <label htmlFor='userId' style={{ display: "none" }} />
          <BaseInput
            className='black'
            inputRef={inputRefId}
            type={"text"}
            value={inputValueId}
            id={"userId"}
            placeholder={"????????? ?????? ?????????"}
            onChange={(e) => setInputValueId(e.target.value)}
          />
          {isNoneId ? (
            <BaseSpan
              className='danger'
              display={"block"}
              fontSize={"0.8rem"}
              margin={"16px 20px 0"}
            >
              ????????? ?????? ???????????? ??????????????????.
            </BaseSpan>
          ) : null}
        </BaseDiv>
        <BaseDiv width={"33%"} minWidth={"314px"} padding={"8px 0"}>
          <label htmlFor='userPassword' style={{ display: "none" }} />
          <BaseInput
            className='black'
            inputRef={inputRefPassword}
            type={"password"}
            value={inputValuePassword}
            id={"userPassword"}
            placeholder={"????????????"}
            onChange={(e) => setInputValuePassword(e.target.value)}
          />
          {isNonePassword ? (
            <BaseSpan
              className='danger'
              display={"block"}
              fontSize={"0.8rem"}
              margin={"16px 20px 0"}
            >
              ??????????????? ??????????????????.
            </BaseSpan>
          ) : null}
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
              title='????????? ???????????? ?????????'
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
                  title='?????? ???????????? ?????????'
                  src={iconGoogle}
                  alt='google_icon'
                  style={{ border: "1px solid #4285F4", borderRadius: "5px" }}
                />
              )}
            />
          </ImageBoxDiv>
        </BaseDiv>
      </SocialLoginDiv>
    </BaseContainer>
  );
}

export default Login;
