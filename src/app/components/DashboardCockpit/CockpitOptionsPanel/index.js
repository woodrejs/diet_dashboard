import React from "react";
import { Container, Text, ButtonBox, Button } from "./index.css";
// ?? more cross icons ???
import broccoli_icon from "./icon_broccoli.png";
import cheese_icon from "./icon_cheese.png";
import fish_crossed_icon from "./icon_fish_crossed.png";
import chicken_crossed_icon from "./icon_chicken_crossed.png";
import meat_icon from "./icon_meat.png";

const CockpitOptionsPanel = () => {
  return (
    <Container>
      <Text>select your protein options</Text>
      <ButtonBox>
        <Button src={broccoli_icon} alt="broccoli_icon" />
        <Button src={cheese_icon} alt="cheese_icon" />
        <Button src={meat_icon} alt="meat_icon" />
        <Button src={fish_crossed_icon} alt="fish_icon" />
        <Button src={chicken_crossed_icon} alt="chicken_icon" />
      </ButtonBox>
    </Container>
  );
};
export default CockpitOptionsPanel;
