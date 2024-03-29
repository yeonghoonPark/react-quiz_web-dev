import styled from "styled-components";

const StyledAppAlert = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
`;

const AlertMessageSpan = styled.span`
  position: fixed;
  top: 40%;
  left: 50%;
  padding: 8px 24px;
  font-size: 1.5rem;
  transform: translate(-50%, -40%);
  border-radius: var(--radius-standard);
  opacity: 0;
  transition: 0.3s;
  animation-duration: 1.4s;
  animation-name: slide;
  animation-timing-function: ease;
  @keyframes slide {
    0% {
      transform: translate(-140%, -150%);
      opacity: 0;
    }

    12% {
      transform: translate(-50%, -40%);
      opacity: 1;
    }

    30% {
      transform: translate(-50%, -40%);
      opacity: 1;
    }

    80% {
      transform: translate(-50%, -40%);
      opacity: 1;
    }

    100% {
      transform: translate(-50%, -40%);
      opacity: 0;
    }
  }

  @media all and (max-width: 29.9375rem) {
    font-size: 0.8rem;
  }
`;

function AppAlert({ className, message, color, backgroundColor }) {
  return (
    <StyledAppAlert>
      <AlertMessageSpan
        className={className}
        style={{ color: color, backgroundColor: backgroundColor }}
      >
        {message}
      </AlertMessageSpan>
    </StyledAppAlert>
  );
}

export default AppAlert;
