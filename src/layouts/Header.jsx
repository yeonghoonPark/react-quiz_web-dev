import styled from "styled-components";
import logo from "../../public/assets/images/logo.png";
import BaseDiv from "../components/base/BaseDiv";
import BaseSpan from "../components/base/BaseSpan";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onLogin, onLogout } from "../reducers/login";
import { useEffect, useState } from "react";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
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
  console.log("[Header]");

  // let userId = useSelector((state) => state.login.user_id);
  const storeState = useSelector((state) => state);
  const dispatch = useDispatch();

  const [theme, setTheme] = useState("light");

  const onHandleTheme = () => {
    console.log("[onHandleTheme]");
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  const onHandleSideNav = () => {
    console.log("[onHandleSideNav]");
    const sideNav = document.querySelector(".side-nav");
    const blockLayer = document.querySelector(".block-layer");
    sideNav.classList.toggle("show"), blockLayer.classList.toggle("show");
  };

  return (
    <StyledHeader>
      <Nav>
        <MenuLeftDiv>
          <LogoDiv>
            <Link to='/'>
              <img src={logo} alt='logo' />
            </Link>
          </LogoDiv>
          <BaseDiv mobileDisplayNone>
            <Link to='/quiz'>
              <BaseSpan textShadow userSelectNone>
                Quiz
              </BaseSpan>
            </Link>
          </BaseDiv>
          <BaseDiv mobileDisplayNone>
            <Link to='/ranking'>
              <BaseSpan textShadow userSelectNone>
                Ranking
              </BaseSpan>
            </Link>
          </BaseDiv>
          <BaseDiv mobileDisplayNone>
            <Link to='/notice'>
              <BaseSpan textShadow userSelectNone>
                Notice
              </BaseSpan>
            </Link>
          </BaseDiv>
          {storeState.login.user_id ? (
            <BaseDiv mobileDisplayNone>
              <Link to='/notice/write'>
                <BaseSpan textShadow userSelectNone>
                  Write
                </BaseSpan>
              </Link>
            </BaseDiv>
          ) : null}
          <BaseDiv mobileDisplayNone>
            <BaseSpan pointer textShadow userSelectNone>
              Help
            </BaseSpan>
          </BaseDiv>
        </MenuLeftDiv>
        <MenuRightDiv>
          {storeState.login.user_id ? (
            <BaseDiv mobileDisplayNone>
              <Link to='' onClick={() => dispatch(onLogout())}>
                <BaseSpan textShadow userSelectNone>
                  Logout
                </BaseSpan>
              </Link>
            </BaseDiv>
          ) : (
            <BaseDiv mobileDisplayNone>
              <Link to='/login'>
                <BaseSpan textShadow userSelectNone>
                  Login
                </BaseSpan>
              </Link>
            </BaseDiv>
          )}
          {theme === "light" ? (
            <BaseDiv mobileDisplayNone display={"flex"} alignItems={"center"}>
              <FaSunIcon onClick={() => onHandleTheme()} />
            </BaseDiv>
          ) : (
            <BaseDiv mobileDisplayNone display={"flex"} alignItems={"center"}>
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
            <BaseDiv>
              <BaseSpan userSelectNone>Quiz-Web</BaseSpan>
            </BaseDiv>

            <FaTimesIcon onClick={() => onHandleSideNav()} />
          </SideMenuTopDiv>

          <SideMenuMiddleDiv>
            <BaseDiv margin={"12px auto"}>
              <Link to='/quiz' onClick={() => onHandleSideNav()}>
                <BaseSpan textShadow userSelectNone>
                  Quiz
                </BaseSpan>
              </Link>
            </BaseDiv>
            <BaseDiv margin={"12px auto"}>
              <Link to='/ranking' onClick={() => onHandleSideNav()}>
                <BaseSpan textShadow userSelectNone>
                  Ranking
                </BaseSpan>
              </Link>
            </BaseDiv>
            <BaseDiv margin={"12px auto"}>
              <Link to='/notice' onClick={() => onHandleSideNav()}>
                <BaseSpan textShadow userSelectNone>
                  Notice
                </BaseSpan>
              </Link>
            </BaseDiv>
            {storeState.login.user_id ? (
              <BaseDiv margin={"12px auto"}>
                <Link to='/notice/write' onClick={() => onHandleSideNav()}>
                  <BaseSpan textShadow userSelectNone>
                    Write
                  </BaseSpan>
                </Link>
              </BaseDiv>
            ) : null}
            <BaseDiv margin={"12px auto"}>
              <BaseSpan pointer textShadow onClick={() => onHandleSideNav()}>
                Help
              </BaseSpan>
            </BaseDiv>
          </SideMenuMiddleDiv>

          <SideMenuBottomDiv>
            {storeState.login.user_id ? (
              <BaseDiv>
                <Link to='' onClick={() => dispatch(onLogout())}>
                  <BaseSpan textShadow userSelectNone>
                    Logout
                  </BaseSpan>
                </Link>
              </BaseDiv>
            ) : (
              <BaseDiv>
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
              <BaseDiv>
                <FaSunIcon onClick={() => onHandleTheme()} />
              </BaseDiv>
            ) : (
              <BaseDiv>
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
