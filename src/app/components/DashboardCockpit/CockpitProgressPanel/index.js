import React from "react";
import { Container, Text, ProgressBar, Line } from "./index.css";
import { displayProgressSpheres } from "./index.utils";

const CockpitProgressPanel = ({ progress }) => {
  return (
    <Container>
      <Text>your 12 week progress</Text>
      <ProgressBar>
        {displayProgressSpheres(12, progress)}
        <Line />
        <Line progress={progress} />
      </ProgressBar>
    </Container>
  );
};
export default CockpitProgressPanel;
