import styled from "styled-components";
import BaseContainer from "../components/base/BaseContainer";
import BaseDiv from "../components/base/BaseDiv";
import BaseInput from "../components/base/BaseInput";
import BaseButton from "../components/base/BaseButton";

const Title = styled.h1`
  padding: 1.5rem 0;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
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
          <BaseInput
            type={"text"}
            id={"userId"}
            placeholder={"아이디 또는 이메일"}
          />
        </BaseDiv>
        <BaseDiv width={"33%"} minWidth={"314px"} padding={"8px 0"}>
          <label htmlFor='userPassword' style={{ display: "none" }}>
            비밀번호
          </label>
          <BaseInput
            type={"password"}
            id={"userPassword"}
            placeholder={"비밀번호"}
          />
        </BaseDiv>

        <BaseButton message={"Login"} />
      </form>

      <span>social login</span>
    </BaseContainer>
  );
}

export default Login;
