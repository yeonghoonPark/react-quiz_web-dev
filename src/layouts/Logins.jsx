import styled from "styled-components";
import BaseContainer from "../components/base/BaseContainer";
import BaseDiv from "../components/base/BaseDiv";
import BaseButton from "../components/base/BaseButton";

import { Link } from "react-router-dom";

const Title = styled.h1`
  padding: 1.5rem 0;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;

const BaseInput = styled.input`
  all: unset;
  width: calc(100% - 38px);
  padding: 14px 18px;
  border: 1px solid var(--color-gray-300);
  border-radius: 5px;
  background: var(--color-white);
  transition: var(--transition-300);
  &:focus {
    border: 1px solid var(--color-gray-500);
    box-shadow: 0 0 4px 2px var(--color-gray-400);
  }
  &::placeholder {
    color: var(--color-gray-500);
  }
`;

function Login() {
  return (
    <BaseContainer>
      <Title>Login</Title>

      <form
        action=''
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <BaseDiv width={"33%"} minWidth={"314px"} padding={"8px 0"}>
          <label htmlFor='userId' style={{ display: "none" }}>
            아이디
          </label>
          <BaseInput type='text' id='userId' placeholder='아이디 또는 이메일' />
        </BaseDiv>
        <BaseDiv width={"33%"} minWidth={"314px"} padding={"8px 0"}>
          <label htmlFor='userPassword' style={{ display: "none" }}>
            비밀번호
          </label>
          <BaseInput type='password' id='userPassword' placeholder='비밀번호' />
        </BaseDiv>

        <BaseButton message={"Login"} />
      </form>

      <span>social login</span>
    </BaseContainer>
  );
}

export default Login;
