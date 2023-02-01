import styled from "styled-components";
import logo from "../../public/assets/images/logo.png";
import { FaBars } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
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
  justify-contents: space-between;
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
  padding: 8px;
  &:hover {
    text-shadow: 2px 2px var(--color-gray-300);
  }
  @media all and (max-width: 47.9375rem) {
    display: none;
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
  @media all and (max-width: 47.9375rem) {
    display: none;
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

const testFunction = () => {
  console.log("테스트");
  const SideNav = document.querySelector(".side-nav");
  console.log(SideNav);
  SideNav.style.right = "0";
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
          <Div>
            <Link to='/quiz'>Quiz</Link>
          </Div>
          <Div>
            <Link to='/quiz'>Ranking</Link>
          </Div>
          <Div>
            <Link to='/quiz'>Notice</Link>
          </Div>
          {user_nickname ? (
            <Div>
              <Link to='/write'>Write</Link>
            </Div>
          ) : null}
          <Div>
            <Link to='/quiz'>Help</Link>
          </Div>
        </MenuLeftDiv>
        <MenuRightDiv>
          {user_nickname ? (
            <>
              <FaUserCheckIcon />
              <Div>{user_nickname}</Div>
              <Div>
                <Link to='' onClick={() => dispatch(onLogout())}>
                  Logout
                </Link>
              </Div>
            </>
          ) : (
            <Div>
              <Link to='' onClick={() => dispatch(onLogin())}>
                Login
              </Link>
            </Div>
          )}
          <FaBarsIcon onClick={() => testFunction()} />
        </MenuRightDiv>
      </Nav>

      {/* <BlockLayer /> */}
      <SideNav className='side-nav'></SideNav>
    </StyledHeader>
  );
}

export default Header;
