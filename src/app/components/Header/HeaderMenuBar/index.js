import React from "react";
import styled from "styled-components";
import MenuBarItem from "./MenuBarItem";

const Container = styled.div`
  height: 100%;
  margin-left: 118px;
  padding: 16px;
  display: flex;
  align-items: center;
  border-left: 1px solid ${({ theme }) => theme.colors.light};
`;

const HeaderMenuBar = () => {
  return (
    <Container>
      <MenuBarItem title="Dashboard" isActive />
      <MenuBarItem title="Recipes" />
      <MenuBarItem title="Challenge" />
    </Container>
  );
};
export default HeaderMenuBar;
