import React from "react";
import styled from "styled-components";
import CockpitProgressBar from "./CockpitProgressBar";
import CockpitWeekSwitch from "./CockpitWeekSwitch";
import CockpitOptionsPanel from "./CockpitOptionsPanel";

const Section = styled.div`
  width: 100%;
  height: 111px;
`;
const Container = styled.div`
  max-width: 1024px;
  height: 100%;
  width: 100%;
  padding: 0 23px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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
