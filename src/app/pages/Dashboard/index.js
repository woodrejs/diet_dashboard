import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import OptionsBar from "../../components/OptionsBar";
import DashboardTable from "../../components/DashboardTable";

const Dashboard = () => {
  return (
    <DashboardStyled>
      <Header />
      <OptionsBar />
      <DashboardTable />
    </DashboardStyled>
  );
};
export default Dashboard;

const DashboardStyled = styled.div``;
