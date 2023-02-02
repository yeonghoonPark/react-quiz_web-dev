import styled from "styled-components";
import logo from "../../public/assets/images/logo.png";
import { FaBars } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onLogin, onLogout } from "../reducers/login";

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
  font-size: 1rem;
  cursor: pointer;
  @media all and (max-width: 47.9375rem) {
    position: absolute;
    right: 0;
    display: block;
    margin-right: 1.5rem;
  }
`;

const FaUserCheckIcon = styled(FaUserCheck)`
  margin-right: 8px;
  font-size: 18px;
  @media all and (max-width: 47.9375rem) {
    display: ;
  }
`;

const SideNav = styled.nav`
  position: fixed;
  top: 0;
  right: -406px;
  width: 400px;
  min-width: 360px;
  height: 100vh;
  box-shadow: -4px 0 4px -4px var(--color-black);
  background: var(--color-white);
`;

const BlockLayer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
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

const FaRegWindowCloseIcon = styled(FaRegWindowClose)`
  font-size: 18px;
`;

const SideMenuMiddleDiv = styled(Div)`
  display: flex;
  flex-direction: column;
`;

const SideMenuBottomDiv = styled(SideMenuTopDiv)`
  justify-content: ${(p) => p.justifyContent || "space-between"};
`;

const Span = styled.span`
  pointer-events: ${(p) => p.pointerEvents || "auto"};
  &:hover {
    text-shadow: ${(p) => p.textShadow || "2px 2px var(--color-gray-300)"};
  }
`;

const testFunction = () => {
  console.log("테스트");
  const SideNav = document.querySelector(".side-nav");
  console.log(SideNav);
  SideNav.style.right = "0";
};

const testFunction2 = () => {
  console.log("테스트");
  const SideNav = document.querySelector(".side-nav");
  console.log(SideNav);
  SideNav.style.right = "-406px";
};

function Header() {
  const storeState = useSelector((state) => state);
  const dispatch = useDispatch();
  const user_nickname = storeState.login.user_nickname;

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
            <>
              <Div
                mobileDisplay={"none"}
                display={"flex"}
                alignItems={"center"}
              >
                <FaUserCheckIcon />
                <Span pointerEvents={"none"} textShadow={"none"}>
                  {user_nickname}
                </Span>
              </Div>
              <Div mobileDisplay={"none"}>
                <Span>
                  <Link to='' onClick={() => dispatch(onLogout())}>
                    Logout
                  </Link>
                </Span>
              </Div>
            </>
          ) : (
            <Div mobileDisplay={"none"}>
              <Span>
                <Link to='' onClick={() => dispatch(onLogin())}>
                  Login
                </Link>
              </Span>
            </Div>
          )}
          <FaBarsIcon onClick={() => testFunction()} />
        </MenuRightDiv>
      </Nav>

      {/* <BlockLayer /> */}
      <SideNav className='side-nav'>
        <SideMenuDiv>
          <SideMenuTopDiv
            padding={"8px 0"}
            boxShadow={" 0 4px 4px -4px var(--color-gray-600)"}
          >
            <Div>
              <Span pointerEvents={"none"}>Quiz-Web</Span>
            </Div>

            <FaRegWindowCloseIcon onClick={() => testFunction2()} />
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
          {user_nickname ? (
            <SideMenuBottomDiv>
              <Div display={"flex"} alignItems={"center"}>
                <FaUserCheckIcon />
                <Span pointerEvents={"none"} textShadow={"none"}>
                  {user_nickname}
                </Span>
              </Div>
              <Div>
                <Span>
                  <Link to='' onClick={() => dispatch(onLogout())}>
                    Logout
                  </Link>
                </Span>
              </Div>
            </SideMenuBottomDiv>
          ) : (
            <SideMenuBottomDiv justifyContent={"flex-end"}>
              <Div>
                <Span>
                  <Link to='' onClick={() => dispatch(onLogin())}>
                    Login
                  </Link>
                </Span>
              </Div>
            </SideMenuBottomDiv>
          )}
        </SideMenuDiv>
      </SideNav>
    </StyledHeader>
  );
}

export default Header;
