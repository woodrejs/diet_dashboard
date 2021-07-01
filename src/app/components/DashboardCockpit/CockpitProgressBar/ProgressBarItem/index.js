import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
`;
//??background-color
const Sphere = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  margin-bottom: 5px;
  border: 2px solid
    ${({ isCompleted, theme }) =>
      isCompleted ? theme.colors.primary : theme.colors.lightest};

  background-color: ${({ isCompleted, theme }) =>
    isCompleted ? theme.colors.primary : theme.colors.lightest};

  background-color: ${({ current, theme }) => current && theme.colors.white};
`;
const Label = styled.span`
  font-family: HelveticaNeueLTStd;
  font-weight: 400;
  font-size: 9px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.textLight};
`;

const ProgressBarItem = ({ title, isCompleted = false, current = false }) => {
  return (
    <Container>
      <Sphere isCompleted={isCompleted} current={current} />
      <Label children={title} />
    </Container>
  );
};

export default ProgressBarItem;
