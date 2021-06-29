import React from "react";
import styled from "styled-components";
import { secoundary, eighth, ninth } from "../../../style/colors";

const SphereBoxStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
`;
const SphereStyled = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  margin-bottom: 5px;
  border: 2px solid ${({ completed }) => (completed ? secoundary : ninth)};
  background-color: ${({ completed }) => (completed ? secoundary : ninth)};
  background-color: ${({ current }) => current && "white"};
`;
const LabelStyled = styled.span`
  font-family: HelveticaNeueLTStd;
  font-weight: 400;
  font-size: 9px;
  line-height: 100%;
  color: ${eighth};
`;

const ProgressItem = ({ title, completed = false, current = false }) => {
  return (
    <SphereBoxStyled>
      <SphereStyled completed={completed} current={current} />
      <LabelStyled children={title} />
    </SphereBoxStyled>
  );
};

export default ProgressItem;
