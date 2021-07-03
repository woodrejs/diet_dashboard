import React from "react";
import { Container, Text, ButtonBox } from "./index.css";
import OptionsPanelButton from "./OptionsPanelButton";

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
        <OptionsPanelButton src={broccoli_icon} />
        <OptionsPanelButton src={cheese_icon} />
        <OptionsPanelButton src={meat_icon} />
        <OptionsPanelButton src={fish_crossed_icon} />
        <OptionsPanelButton src={chicken_crossed_icon} />
      </ButtonBox>
    </Container>
  );
};
export default CockpitOptionsPanel;
