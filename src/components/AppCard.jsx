import styled from "styled-components";
import BaseButton from "./base/BaseButton";

const StyledLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
`;

const StyledCard = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  width: 30%;
  min-width: 282px;
  height: 200px;
  border: 2px solid var(--color-gray-500);
  border-radius: var(--radius-standard);
  background: var(--color-light-blue);
  text-align: center;
  overflow: hidden;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 42px;
  color: var(--color-white);
  font-size: 1.2rem;

  @media all and (max-width: 47.9375rem) {
  }

  @media all and (max-width: 29.9375rem) {
    font-size: 1rem;
  }
`;

const CardBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 0 16px;
  word-break: break-all;
  @media all and (max-width: 29.9375rem) {
    font-size: 0.8rem;
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

function AppCard({ message, onClickConfirm, onClickCancle, onKeyUpCancle }) {
  return (
    <StyledLayer>
      <StyledCard className='bg-dark-blue'>
        <CardHeader className='bg-primary'>알림</CardHeader>
        <CardBody>{message}</CardBody>
        <CardFooter>
          <BaseButton onClick={onClickConfirm}>확인</BaseButton>
          <BaseButton
            className='btn-red'
            onClick={onClickCancle}
            onKeyUp={onKeyUpCancle}
          >
            취소
          </BaseButton>
        </CardFooter>
      </StyledCard>
    </StyledLayer>
  );
}

export default AppCard;
