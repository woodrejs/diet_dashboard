import React, { useCallback, memo } from "react";
import { Container, Text, ProgressBar, Line } from "./index.css";
import { displayProgressSpheres } from "./index.utils";

const CockpitProgressPanel = ({ progress }) => {
  const memonizedFn = useCallback(() => displayProgressSpheres(12, progress), [progress]);

  return (
    <Container>
      <Text>your 12 week progress</Text>
      <ProgressBar>
        {memonizedFn()}
        <Line />
        <Line progress={progress} />
      </ProgressBar>
    </Container>
  );
};
export default memo(CockpitProgressPanel);
