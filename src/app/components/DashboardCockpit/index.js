import React from "react";
import { Section, Container } from "./index.css";
import CockpitProgressBar from "./CockpitProgressBar";
import CockpitWeekSwitch from "./CockpitWeekSwitch";
import CockpitOptionsPanel from "./CockpitOptionsPanel";

const DashboardCockpit = () => {
  return (
    <Section>
      <Container>
        <CockpitProgressBar />
        <CockpitWeekSwitch />
        <CockpitOptionsPanel />
      </Container>
    </Section>
  );
};

export default DashboardCockpit;
