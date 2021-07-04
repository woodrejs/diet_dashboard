import React from "react";
import { Container } from "./index.css";
import Header from "../../components/Header";
import DashboardCockpit from "../../components/DashboardCockpit";
import DashboardTable from "../../components/DashboardTable";
import DashboardFooter from "../../components/DashboardFooter";

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
