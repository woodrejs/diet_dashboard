import React, { memo } from "react";
import { Container, Sphere, Label } from "./index.css";

const ProgressPanelItem = ({ title, isCompleted = false, current = false }) => {
  return (
    <Container>
      <Sphere isCompleted={isCompleted} current={current} />
      <Label children={title} />
    </Container>
  );
};

export default memo(ProgressPanelItem);
