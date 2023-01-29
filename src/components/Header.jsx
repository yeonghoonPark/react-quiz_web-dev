import styled from "styled-components";
import logo from "../../public/assets/images/logo.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 66px;
  padding: 0.75rem 0;
  box-shadow: 0 4px 4px -4px var(--color-black);
  background-color: var(--color-white);
  text-align: center;
`;

const Nav = styled.nav`
  postion: relative;
  display: felx;
  justify-contents: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  background-color: ;
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
  @media all and (min-width: 30rem) and (max-width: 47.9375rem) {
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
  width: ${(p) => p.width || {}};
  height: ${(p) => p.height || {}};
  padding: 8px;
  margin-right: ${(p) => p.marginRight || {}};
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
    display: block;
    position: absolute;
    right: 0;
    margin-right: 1.5rem;
  }
`;

function Header() {
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
          <Div>
            <Link to='/quiz'>Help</Link>
          </Div>
        </MenuLeftDiv>
        <MenuRightDiv>
          <Div>
            <Link to='/login'>Login</Link>
          </Div>
          <FaBarsIcon />
        </MenuRightDiv>
      </Nav>
    </StyledHeader>
  );
}

export default Header;
