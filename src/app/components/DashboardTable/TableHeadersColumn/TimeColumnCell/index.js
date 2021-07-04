import React, { memo } from "react";
import { Container, Text, SubText } from "./index.css";

const TimeColumnCell = ({ time, pm = false, last = false }) => {
  return (
    <Container last={last}>
      <SubText>{time}</SubText>
      <Text>{pm ? "pm" : "am"}</Text>
    </Container>
  );
};
export default memo(TimeColumnCell);
