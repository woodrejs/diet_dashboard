import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  width: 100%;
  padding-left: 2px;
  background-color: ${({ theme }) => theme.colors.white};

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.span`
  font-family: HelveticaNeueLTStd;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.secondary : theme.colors.primary};
`;

const TableHeader = ({ day, isActive }) => {
  return (
    <Container>
      <Text isActive={isActive}>day {day}</Text>
    </Container>
  );
};

export default TableHeader;
