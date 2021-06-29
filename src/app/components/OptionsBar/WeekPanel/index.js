import React from "react";
import styled from "styled-components";
import arrowIcon from "./large_arrow_icon.png";
import { primary } from "../../../style/colors";

const ContainerStyled = styled.div`
  width: 297px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
//change to btn ???
const ButtonStyled = styled.img`
  transform: rotateZ(${({ prev }) => (prev ? "180deg" : "unset")});
  height: 42px;
  width: 24px;
  cursor: pointer;
`;
const TitleStyled = styled.span`
  font-family: HelveticaNeueLTStd;
  font-weight: 400;
  font-size: 48px;
  line-height: 46px;
  text-transform: capitalize;
  color: ${primary};
`;

const WeekPanel = () => {
  const handleClick = () => {};
  return (
    <ContainerStyled>
      <ButtonStyled onClick={handleClick} src={arrowIcon} alt="prev_arrow_icon" prev />
      <TitleStyled children="week 7" />
      <ButtonStyled onClick={handleClick} src={arrowIcon} alt="next_arrow_icon" />
    </ContainerStyled>
  );
};
export default WeekPanel;
