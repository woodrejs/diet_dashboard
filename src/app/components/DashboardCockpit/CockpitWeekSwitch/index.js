import React from "react";
import { Container, Button, Title } from "./index.css";
import icon_large_arrow from "./icon_large_arrow.png";

const CockpitWeekSwitch = () => {
  const handleClick = () => {
    /*future handler*/
  };
  return (
    <Container>
      <Button onClick={handleClick} src={icon_large_arrow} alt="prev_arrow_icon" prev />
      <Title>week 7</Title>
      <Button onClick={handleClick} src={icon_large_arrow} alt="next_arrow_icon" />
    </Container>
  );
};
export default CockpitWeekSwitch;
