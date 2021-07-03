import React from "react";
import { Container, Text, Icon } from "./index.css";
import check_icon from "./icon_check.png";

//?? custom props ??
const MultiPartColumnCell = ({ data, active }) => {
  const { text, isCompleted, isShake } = data;
  return (
    <Container isShake={isShake} active={active}>
      <Text active={active}>{text}</Text>
      {isCompleted && <Icon src={check_icon} alt="check_icon" />}
    </Container>
  );
};
export default MultiPartColumnCell;
