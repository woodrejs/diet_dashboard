import React from "react";
import styled from "styled-components";
import ProgressPanel from "./ProgressPanel";
import WeekPanel from "./WeekPanel";
import OptionsPanel from "./OptionsPanel";

const SectionStyled = styled.div`
  width: 100%;
  height: 111px;
`;
const ContainerStyled = styled.div`
  max-width: 1024px;
  height: 100%;
  width: 100%;
  padding: 0 23px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OptionsBar = () => {
  return (
    <SectionStyled>
      <ContainerStyled>
        <ProgressPanel />
        <WeekPanel />
        <OptionsPanel />
      </ContainerStyled>
    </SectionStyled>
  );
};

export default OptionsBar;
