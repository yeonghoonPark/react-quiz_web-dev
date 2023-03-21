import styled from "styled-components";
import AppContainer from "../../components/AppContainer";
import AppTitle from "../../components/AppTitle";
import BaseInputRadio from "../../components/base/BaseInputRadio";
import BaseButton from "../../components/base/BaseButton";
import { Link } from "react-router-dom";
import { useCallback, useRef, useState } from "react";
import tapMenu from "../../data/tapMenu";

const RadioGroupContainer = styled.div`
  position: relative;
  display: flex;
  width: 70%;
  min-width: 314px;
  margin: 0 auto;
  border: 2px solid var(--color-gray-500);
  border-radius: var(--radius-standard);
`;

function Notice() {
  console.log("[Notice]");

  const [currentIndex, setCurrentIndex] = useState(0);

  const onHandleTapMenu = useCallback(
    (i) => {
      setCurrentIndex(i);
    },
    [currentIndex],
  );

  return (
    <AppContainer>
      <AppTitle>Notice</AppTitle>

      <RadioGroupContainer>
        {tapMenu.map((cV, i) => {
          return (
            <BaseInputRadio
              key={cV.uniq_no}
              htmlFor={cV.html_for}
              id={cV.id}
              value={cV.value}
              name={cV.name}
              onClick={() => onHandleTapMenu(i)}
              className={currentIndex === i ? "checked" : "checked-none"}
            >
              {cV.message}
            </BaseInputRadio>
          );
        })}
      </RadioGroupContainer>
    </AppContainer>
  );
}

export default Notice;
