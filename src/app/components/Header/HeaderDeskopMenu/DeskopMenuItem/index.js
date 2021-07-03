import React from "react";
import { Container, Text, Line } from "./index.css";

const DeskopMenuItem = ({ active, title }) => {
  return (
    <Container href="#">
      <Text active={active} children={title} />
      {active && <Line />}
    </Container>
  );
};

export default DeskopMenuItem;
