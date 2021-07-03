import React from "react";
import { Container, Button, Title } from "./index.css";
import icon_large_arrow from "./icon_large_arrow.png";

const CockpitWeekSwitch = () => {
  const handleShowNext = () => {
    /*place for code ... */
  };
  const handleShowPrev = () => {
    /*place for code ... */
  };

  return (
    <Container>
      <Button onClick={handleShowPrev} src={icon_large_arrow} alt="prev_icon" prev />
      <Title>week 7</Title>
      <Button onClick={handleShowNext} src={icon_large_arrow} alt="next_icon" />
    </Container>
  );
};
export default CockpitWeekSwitch;
