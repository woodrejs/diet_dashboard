import React from "react";
import styled from "styled-components";
import { eighth } from "../../../style/colors";
import broccoli_icon from "./broccoli_icon.png";
import cheese_icon from "./cheese_icon.png";
import fish_icon from "./fish_crossed_icon.png";
import chicken_icon from "./chicken_crossed _icon.png";
import meat_icon from "./meat_icon.png";

const ContainerStyled = styled.div`
  width: 205px;
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
const ButtonsContainerStyled = styled.div`
  margin-top: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ButtonStyled = styled.img`
  height: 25px;
  width: 25px;
  cursor: pointer;
`;
//
//zly format zdjec??
const OptionsPanel = () => {
  return (
    <ContainerStyled>
      <TitleStyled children="select your protein options" />
      <ButtonsContainerStyled>
        <ButtonStyled src={broccoli_icon} alt="broccoli_icon" />
        <ButtonStyled src={cheese_icon} alt="cheese_icon" />
        <ButtonStyled src={meat_icon} alt="meat_icon" />
        <ButtonStyled src={fish_icon} alt="fish_icon" />
        <ButtonStyled src={chicken_icon} alt="chicken_icon" />
      </ButtonsContainerStyled>
    </ContainerStyled>
  );
};
export default OptionsPanel;
