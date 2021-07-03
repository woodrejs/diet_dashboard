import React from "react";
import { Container, Sphere, Label } from "./index.css";

const ProgressBarItem = ({ title, isCompleted = false, current = false }) => {
  return (
    <Container>
      <Sphere isCompleted={isCompleted} current={current} />
      <Label children={title} />
    </Container>
  );
};

export default ProgressBarItem;
