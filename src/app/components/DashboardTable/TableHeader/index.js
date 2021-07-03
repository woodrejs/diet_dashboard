import React from "react";
import { Container, Text } from "./index.css";

const TableHeader = ({ day, active }) => {
  return (
    <Container>
      <Text active={active}>day {day}</Text>
    </Container>
  );
};

export default TableHeader;
