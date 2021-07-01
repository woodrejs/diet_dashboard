import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import DashboardCockpit from "../../components/DashboardCockpit";
import DashboardTable from "../../components/DashboardTable";

const Container = styled.div``;

const Dashboard = () => {
  return (
    <Container>
      <Header />
      <DashboardCockpit />
      <DashboardTable />
    </Container>
  );
};
export default Dashboard;
