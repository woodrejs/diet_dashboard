import React from "react";
import { Section, Container } from "./index.css";
import CockpitProgressPanel from "./CockpitProgressPanel";
import CockpitWeekSlider from "./CockpitWeekSlider";
import CockpitOptionsPanel from "./CockpitOptionsPanel";

const DashboardCockpit = () => {
  return (
    <Section>
      <Container>
        <CockpitProgressPanel progress={7} />
        <CockpitWeekSlider />
        <CockpitOptionsPanel />
      </Container>
    </Section>
  );
};

export default DashboardCockpit;
