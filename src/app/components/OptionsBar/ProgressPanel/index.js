import React from "react";
import styled from "styled-components";
import ProgressItem from "./ProgressItem";
import { secoundary, eighth, ninth } from "../../../style/colors";

const ContainerStyled = styled.div`
  width: 230px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const TitleStyled = styled.span`
  font-family: HelveticaNeueLTStd;
  font-weight: 400;
  font-size: 9px;
  line-height: 100%;
  margin: 34px 0 14px 0;
  text-transform: uppercase;
  color: ${eighth};
`;
const ProgressBarStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;
const LineStyled = styled.div`
  position: absolute;
  top: 4px;
  left: 0px;
  width: 230px;
  height: 2px;
  background-color: ${({ active }) => (active ? secoundary : ninth)};
  transform: scaleX(${({ progress }) => progress / 10});
  transform-origin: left;
`;

const displayItems = (qnt, curr) => {
  const items = [];
  for (let index = 0; index < qnt; index++) {
    items.push(
      <ProgressItem
        title={index + 1}
        current={curr === index + 1 ? true : false}
        completed={curr > index + 1 ? true : false}
      />
    );
  }
  return items;
};

const ProgressPanel = () => {
  return (
    <ContainerStyled>
      <TitleStyled children="your 12 week progress" />
      <ProgressBarStyled>
        {displayItems(12, 7)}
        <LineStyled progress={10} />
        <LineStyled progress={1} active />
      </ProgressBarStyled>
    </ContainerStyled>
  );
};
export default ProgressPanel;
