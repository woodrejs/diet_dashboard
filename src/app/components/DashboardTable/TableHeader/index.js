import React from "react";
import { Container, Text } from "./index.css";

const TableHeader = ({ day, isActive }) => {
  return (
    <Container>
      <Text isActive={isActive}>day {day}</Text>
    </Container>
  );
};

export default TableHeader;
