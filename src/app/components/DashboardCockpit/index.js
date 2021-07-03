import React from "react";
import { Section, Container } from "./index.css";
import CockpitProgressPanel from "./CockpitProgressPanel";
import CockpitWeekSwitch from "./CockpitWeekSwitch";
import CockpitOptionsPanel from "./CockpitOptionsPanel";

const DashboardCockpit = () => {
  return (
    <Section>
      <Container>
        <CockpitProgressPanel progress={7} />
        <CockpitWeekSwitch />
        <CockpitOptionsPanel />
      </Container>
    </Section>
  );
};

export default DashboardCockpit;
