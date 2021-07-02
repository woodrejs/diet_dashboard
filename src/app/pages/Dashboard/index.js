import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import DashboardCockpit from "../../components/DashboardCockpit";
import DashboardTable from "../../components/DashboardTable";
import DashboardFooter from "../../components/DashboardFooter";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.lightLightest};
`;

const Dashboard = () => {
  return (
    <Container>
      <Header />
      <DashboardCockpit />
      <DashboardTable />
      <DashboardFooter />
    </Container>
  );
};
export default Dashboard;
