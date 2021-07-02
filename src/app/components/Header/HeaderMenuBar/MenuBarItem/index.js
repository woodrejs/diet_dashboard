import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;
const Text = styled.span`
  font-family: HelveticaNeueLTStd;
  font-weight: 800;
  font-size: 14px;
  line-height: 46px;
  text-transform: uppercase;
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.secondary : theme.colors.dark};
`;
const Line = styled.div`
  position: absolute;
  width: 25px;
  height: 2px;
  bottom: 22px;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.secondary : theme.colors.dark};
`;

const MenuBarItem = ({ isActive, title }) => {
  return (
    <Container>
      <Text isActive={isActive}>{title}</Text>
      {isActive && <Line isActive={isActive} />}
    </Container>
  );
};

export default MenuBarItem;
