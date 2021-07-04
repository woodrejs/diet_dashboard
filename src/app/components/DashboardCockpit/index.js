import React from "react";
import { Section, Container } from "./index.css";
import CockpitProgressPanel from "./CockpitProgressPanel";
import CockpitSlider from "./CockpitSlider";
import CockpitOptionsPanel from "./CockpitOptionsPanel";

const DashboardCockpit = () => {
  return (
    <Section>
      <Container>
        <CockpitProgressPanel progress={7} />
        <CockpitSlider />
        <CockpitOptionsPanel />
      </Container>
    </Section>
  );
};

export default DashboardCockpit;
