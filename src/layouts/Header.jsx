import styled from "styled-components";
import logo from "../../public/assets/images/logo.png";
import AppAlert from "../components/AppAlert";
import BaseDiv from "../components/base/BaseDiv";
import BaseSpan from "../components/base/BaseSpan";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onLogout } from "../reducers/login";
import { useEffect, useState } from "react";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 66px;
  padding: 0.75rem 0;
  box-shadow: 0 4px 4px -4px var(--color-black);
  background-color: var(--color-white);
`;

const LogoDiv = styled.div`
  width: 32px;
  height: 40px;
  margin-right: 12px;
  padding: 0;
  transition: 0.3s;
  &:hover {
    transform: rotate(17deg);
  }
  @media all and (max-width: 47.9375rem) {
    margin-right: 0;
`;

const Nav = styled.nav`
  postion: relative;
  display: felx;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  @media all and (max-width: 47.9375rem) {
    justify-contents: center;
  }
`;

const MenuLeftDiv = styled.div`
  display: felx;
  align-items: center;
`;

const MenuRightDiv = styled.div`
  display: flex;
  align-items: center;
`;

const SideNav = styled.nav`
  position: fixed;
  top: 0;
  right: -364px;
  width: 360px;
  height: 100vh;
  box-shadow: -4px 0 4px -4px var(--color-black);
  background: var(--color-white);
  transition: var(--transition-500);
  &.show {
    right: 0;
  }
`;

const BlockLayer = styled.div`
  position: fixed;
  top: -100%;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  transition: var(--transition-500);
  opacity: 0;
  &.show {
    top: 0;
    opacity: 1;
  }
`;

const SideMenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
`;

const SideMenuTopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 66px;
  box-shadow: 0 4px 4px -4px var(--color-black);
`;

const SideMenuMiddleDiv = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 4px -4px var(--color-black);
`;

const SideMenuBottomDiv = styled(SideMenuTopDiv)`
  justify-content: flex-end;
`;

const SideMenuThemeDiv = styled(SideMenuBottomDiv)`
  box-shadow: none;
`;

const FaBarsIcon = styled(FaBars)`
  display: none;
  font-size: 18px;
  cursor: pointer;
  @media all and (max-width: 47.9375rem) {
    position: absolute;
    right: 0;
    display: block;
    margin-right: 1.5rem;
  }
`;

const FaTimesIcon = styled(FaTimes)`
  font-size: 18px;
  cursor: pointer;
`;

const FaMoonIcon = styled(FaMoon)`
  font-size: 14px;
  cursor: pointer;
`;
const FaSunIcon = styled(FaSun)`
  font-size: 14px;
  cursor: pointer;
`;

function Header() {
  // console.log("[Header]");

  const storeState = useSelector((state) => state);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [theme, setTheme] = useState("light");

  const [isAlert, setIsAlert] = useState(false);
  const [alertBackgroud, setAlertBackground] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const onHandleTheme = () => {
    // console.log("[onHandleTheme]");
    setTheme(theme === "light" ? "dark" : "light");
  };

  const onHandleSideNav = () => {
    // console.log("[onHandleSideNav]");
    const sideNav = document.querySelector(".side-nav");
    const blockLayer = document.querySelector(".block-layer");
    sideNav.classList.toggle("show"), blockLayer.classList.toggle("show");
  };

  const setLogoutAlert = (message, bg) => {
    setAlertMessage(message);
    setAlertBackground(bg);
    setIsAlert(true);
    setTimeout(() => {
      setIsAlert(false);
      navigate("/");
    }, 1500);
  };

  const onHandleLogout = () => {
    // console.log("[onHandleLogout]");
    if (storeState.login.access_token) {
      if (!Kakao.Auth.getAccessToken()) {
        return;
      }
      Kakao.Auth.logout(() => {
        setLogoutAlert("로그아웃에 성공하였습니다.", "bg-primary");
        dispatch(onLogout());
      });
    } else {
      setLogoutAlert("로그아웃에 성공하였습니다.", "bg-primary");
      dispatch(onLogout());
    }
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <StyledHeader>
      {isAlert && (
        <AppAlert
          color={"var(--color-white)"}
          className={alertBackgroud}
          message={alertMessage}
        />
      )}
      <Nav>
        <MenuLeftDiv>
          <LogoDiv>
            <Link to='/'>
              <img src={logo} alt='logo' />
            </Link>
          </LogoDiv>
          <BaseDiv tabletDisplayNone padding={"8px"}>
            <Link to='/quiz'>
              <BaseSpan textShadow userSelectNone>
                Quiz
              </BaseSpan>
            </Link>
          </BaseDiv>
          <BaseDiv tabletDisplayNone padding={"8px"}>
            <Link to='/ranking'>
              <BaseSpan textShadow userSelectNone>
                Rank
              </BaseSpan>
            </Link>
          </BaseDiv>
          <BaseDiv tabletDisplayNone padding={"8px"}>
            <Link to='/notice'>
              <BaseSpan textShadow userSelectNone>
                Notice
              </BaseSpan>
            </Link>
          </BaseDiv>
          {storeState.login.user_id && (
            <BaseDiv tabletDisplayNone padding={"8px"}>
              <Link to='/notice/write'>
                <BaseSpan textShadow userSelectNone>
                  Write
                </BaseSpan>
              </Link>
            </BaseDiv>
          )}
          {/* <BaseDiv tabletDisplayNone padding={"8px"}>
            <BaseSpan pointer textShadow userSelectNone>
              Help
            </BaseSpan>
          </BaseDiv> */}
        </MenuLeftDiv>
        <MenuRightDiv>
          {storeState.login.user_id ? (
            <BaseDiv tabletDisplayNone padding={"8px"} onClick={onHandleLogout}>
              <BaseSpan textShadow userSelectNone pointer>
                Logout
              </BaseSpan>
            </BaseDiv>
          ) : (
            <BaseDiv tabletDisplayNone padding={"8px"}>
              <Link to='/login'>
                <BaseSpan textShadow userSelectNone>
                  Login
                </BaseSpan>
              </Link>
            </BaseDiv>
          )}
          {theme === "light" ? (
            <BaseDiv
              tabletDisplayNone
              display={"flex"}
              alignItems={"center"}
              padding={"8px"}
            >
              <FaSunIcon onClick={() => onHandleTheme()} />
            </BaseDiv>
          ) : (
            <BaseDiv
              tabletDisplayNone
              display={"flex"}
              alignItems={"center"}
              padding={"8px"}
            >
              <FaMoonIcon onClick={() => onHandleTheme()} />
            </BaseDiv>
          )}
          <FaBarsIcon onClick={() => onHandleSideNav()} />
        </MenuRightDiv>
      </Nav>

      <BlockLayer className='block-layer' onClick={() => onHandleSideNav()} />
      <SideNav className='side-nav'>
        <SideMenuDiv>
          <SideMenuTopDiv>
            <BaseDiv padding={"8px"}>
              <BaseSpan userSelectNone>Quiz-Web</BaseSpan>
            </BaseDiv>

            <FaTimesIcon onClick={() => onHandleSideNav()} />
          </SideMenuTopDiv>

          <SideMenuMiddleDiv>
            <BaseDiv margin={"12px auto"} padding={"8px"}>
              <Link to='/quiz' onClick={() => onHandleSideNav()}>
                <BaseSpan textShadow userSelectNone>
                  Quiz
                </BaseSpan>
              </Link>
            </BaseDiv>
            <BaseDiv margin={"12px auto"} padding={"8px"}>
              <Link to='/ranking' onClick={() => onHandleSideNav()}>
                <BaseSpan textShadow userSelectNone>
                  Rank
                </BaseSpan>
              </Link>
            </BaseDiv>
            <BaseDiv margin={"12px auto"} padding={"8px"}>
              <Link to='/notice' onClick={() => onHandleSideNav()}>
                <BaseSpan textShadow userSelectNone>
                  Notice
                </BaseSpan>
              </Link>
            </BaseDiv>
            {storeState.login.user_id && (
              <BaseDiv margin={"12px auto"} padding={"8px"}>
                <Link to='/notice/write' onClick={() => onHandleSideNav()}>
                  <BaseSpan textShadow userSelectNone>
                    Write
                  </BaseSpan>
                </Link>
              </BaseDiv>
            )}
            {/* <BaseDiv margin={"12px auto"} padding={"8px"}>
              <BaseSpan pointer textShadow onClick={() => onHandleSideNav()}>
                Help
              </BaseSpan>
            </BaseDiv> */}
          </SideMenuMiddleDiv>

          <SideMenuBottomDiv>
            {storeState.login.user_id ? (
              <BaseDiv padding={"8px"} onClick={onHandleLogout}>
                <BaseSpan textShadow userSelectNone pointer>
                  Logout
                </BaseSpan>
              </BaseDiv>
            ) : (
              <BaseDiv padding={"8px"}>
                <Link to='/login' onClick={() => onHandleSideNav()}>
                  <BaseSpan textShadow userSelectNone>
                    Login
                  </BaseSpan>
                </Link>
              </BaseDiv>
            )}
          </SideMenuBottomDiv>

          <SideMenuThemeDiv>
            {theme === "light" ? (
              <BaseDiv padding={"8px"}>
                <FaSunIcon onClick={() => onHandleTheme()} />
              </BaseDiv>
            ) : (
              <BaseDiv padding={"8px"}>
                <FaMoonIcon onClick={() => onHandleTheme()} />
              </BaseDiv>
            )}
          </SideMenuThemeDiv>
        </SideMenuDiv>
      </SideNav>
    </StyledHeader>
  );
}

export default Header;
