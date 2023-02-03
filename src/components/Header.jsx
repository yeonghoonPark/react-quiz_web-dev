import styled from "styled-components";
import logo from "../../public/assets/images/logo.png";
import { FaBars } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
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

const LogoDiv = styled.div`
  width: 32px;
  height: 40px;
  margin-right: 8px;
  transition: 0.3s;
  &:hover {
    transform: rotate(17deg);
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

const Div = styled.div`
  display: ${(p) => p.display || {}};
  justify-content: ${(p) => p.justifyContent || {}};
  align-items: ${(p) => p.alignItems || {}};
  width: ${(p) => p.width || "auto"};
  margin: ${(p) => p.margin || {}};
  padding: ${(p) => p.padding || "8px"};
  box-shadow: ${(p) => p.boxShadow || {}};

  @media all and (max-width: 47.9375rem) {
    display: ${(p) => p.mobileDisplay || {}};
  }
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

const FaUserIcon = styled(FaUser)`
  margin-right: 4px;
  font-size: 17px;
  @media all and (max-width: 47.9375rem) {
    display: ;
  }
`;

const SideNav = styled.nav`
  position: fixed;
  top: 0;
  right: -100%;
  width: 400px;
  min-width: 360px;
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

const FaTimesIcon = styled(FaTimes)`
  font-size: 18px;
  cursor: pointer;
`;

const SideMenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
`;

const SideMenuTopDiv = styled(Div)`
  display: flex;

  justify-content: space-between;
  align-items: center;

  height: 66px;
`;

const SideMenuMiddleDiv = styled(Div)`
  display: flex;
  flex-direction: column;
`;

const SideMenuBottomDiv = styled(SideMenuTopDiv)`
  justify-content: flex-end;
`;

const SideMenuThemeDiv = styled(SideMenuBottomDiv)``;

const Span = styled.span`
  pointer-events: ${(p) => p.pointerEvents || "auto"};
  &:hover {
    text-shadow: ${(p) => p.textShadow || "2px 2px var(--color-gray-300)"};
  }
`;

const FaMoonIcon = styled(FaMoon)`
  font-size: 14px;
  cursor: pointer;
`;
const FaSunIcon = styled(FaSun)`
  font-size: 14px;
  cursor: pointer;
`;

const onHandleSideNav = () => {
  console.log("[onHandleSideNav]");
  const sideNav = document.querySelector(".side-nav");
  const blockLayer = document.querySelector(".block-layer");
  sideNav.classList.toggle("show"), blockLayer.classList.toggle("show");
};

function Header() {
  const storeState = useSelector((state) => state);
  const dispatch = useDispatch();
  const user_nickname = storeState.login.user_nickname;

  const [theme, setTheme] = useState("light");

  const onHandleTheme = () => {
    console.log("[onHandleTheme]");
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <StyledHeader>
      <Nav>
        <MenuLeftDiv>
          <LogoDiv>
            <Link to='/'>
              <img src={logo} alt='logo' />
            </Link>
          </LogoDiv>
          <Div mobileDisplay={"none"}>
            <Span>
              <Link to='/quiz'>Quiz</Link>
            </Span>
          </Div>
          <Div mobileDisplay={"none"}>
            <Span>
              <Link to='/quiz'>Ranking</Link>
            </Span>
          </Div>
          <Div mobileDisplay={"none"}>
            <Span>
              <Link to='/quiz'>Notice</Link>
            </Span>
          </Div>
          {user_nickname ? (
            <Div mobileDisplay={"none"}>
              <Span>
                <Link to='/write'>Write</Link>
              </Span>
            </Div>
          ) : null}
          <Div mobileDisplay={"none"}>
            <Span>
              <Link to='/quiz'>Help</Link>
            </Span>
          </Div>
        </MenuLeftDiv>
        <MenuRightDiv>
          {user_nickname ? (
            <Div mobileDisplay={"none"}>
              <Span>
                <Link to='' onClick={() => dispatch(onLogout())}>
                  Logout
                </Link>
              </Span>
            </Div>
          ) : (
            <Div mobileDisplay={"none"}>
              <Span>
                <Link to='' onClick={() => dispatch(onLogin())}>
                  Login
                </Link>
              </Span>
            </Div>
          )}
          {theme === "light" ? (
            <Div mobileDisplay={"none"} display={"flex"} alignItems={"center"}>
              <FaSunIcon onClick={() => onHandleTheme()} />
            </Div>
          ) : (
            <Div mobileDisplay={"none"} display={"flex"} alignItems={"center"}>
              <FaMoonIcon onClick={() => onHandleTheme()} />
            </Div>
          )}
          <FaBarsIcon onClick={() => onHandleSideNav()} />
        </MenuRightDiv>
      </Nav>

      <BlockLayer className='block-layer' onClick={() => onHandleSideNav()} />
      <SideNav className='side-nav'>
        <SideMenuDiv>
          <SideMenuTopDiv
            padding={"8px 0"}
            boxShadow={" 0 4px 4px -4px var(--color-gray-600)"}
          >
            <Div>
              <Span pointerEvents={"none"}>Quiz-Web</Span>
            </Div>

            <FaTimesIcon onClick={() => onHandleSideNav()} />
          </SideMenuTopDiv>

          <SideMenuMiddleDiv
            boxShadow={" 0 4px 4px -4px var(--color-gray-600)"}
          >
            <Div margin={"12px auto"}>
              <Span>
                <Link to='/quiz'>Quiz</Link>
              </Span>
            </Div>
            <Div margin={"12px auto"}>
              <Span>
                <Link to='/quiz'>Ranking</Link>
              </Span>
            </Div>
            <Div margin={"12px auto"}>
              <Span>
                <Link to='/quiz'>Notice</Link>
              </Span>
            </Div>
            {user_nickname ? (
              <Div margin={"12px auto"}>
                <Span>
                  <Link to='/quiz'>Write</Link>
                </Span>
              </Div>
            ) : null}
            <Div margin={"12px auto"}>
              <Span>
                <Link to=''>Help</Link>
              </Span>
            </Div>
          </SideMenuMiddleDiv>

          <SideMenuBottomDiv
            boxShadow={" 0 4px 4px -4px var(--color-gray-600)"}
          >
            {user_nickname ? (
              <Div>
                <Span>
                  <Link to='' onClick={() => dispatch(onLogout())}>
                    Logout
                  </Link>
                </Span>
              </Div>
            ) : (
              <Div>
                <Span>
                  <Link to='' onClick={() => dispatch(onLogin())}>
                    Login
                  </Link>
                </Span>
              </Div>
            )}
          </SideMenuBottomDiv>

          <SideMenuThemeDiv>
            {theme === "light" ? (
              <Div>
                <FaSunIcon onClick={() => onHandleTheme()} />
              </Div>
            ) : (
              <Div>
                <FaMoonIcon onClick={() => onHandleTheme()} />
              </Div>
            )}
          </SideMenuThemeDiv>
        </SideMenuDiv>
      </SideNav>
    </StyledHeader>
  );
}

export default Header;
