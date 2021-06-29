import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import OptionsBar from "../../components/OptionsBar";

const Dashboard = () => {
  return (
    <DashboardStyled>
      <Header />
      <OptionsBar />
    </DashboardStyled>
  );
};
export default Dashboard;

const DashboardStyled = styled.div``;
