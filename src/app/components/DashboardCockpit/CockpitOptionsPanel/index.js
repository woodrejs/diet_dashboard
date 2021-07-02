import React from "react";
import styled from "styled-components";

import broccoli_icon from "./broccoli_icon.png";
import cheese_icon from "./cheese_icon.png";
import fish_icon from "./fish_crossed_icon.png";
import chicken_icon from "./chicken_crossed _icon.png";
import meat_icon from "./meat_icon.png";

const Container = styled.div`
  width: 205px;
`;
const Text = styled.span`
  font-family: HelveticaNeueLTStd;
  font-weight: 400;
  font-size: 9px;
  line-height: 100%;
  margin: 34px 0 14px 0;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.neutralLightest};
`;
const ButtonBox = styled.div`
  margin-top: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Button = styled.img`
  height: 25px;
  width: 25px;
  cursor: pointer;
`;

//zly format zdjec??
const CockpitOptionsPanel = () => {
  return (
    <Container>
      <Text>select your protein options</Text>
      <ButtonBox>
        <Button src={broccoli_icon} alt="broccoli_icon" />
        <Button src={cheese_icon} alt="cheese_icon" />
        <Button src={meat_icon} alt="meat_icon" />
        <Button src={fish_icon} alt="fish_icon" />
        <Button src={chicken_icon} alt="chicken_icon" />
      </ButtonBox>
    </Container>
  );
};
export default CockpitOptionsPanel;
