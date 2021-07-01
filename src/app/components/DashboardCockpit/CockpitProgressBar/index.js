import React from "react";
import styled from "styled-components";
import ProgressBarItem from "./ProgressBarItem";

const Container = styled.div`
  width: 230px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Text = styled.span`
  font-family: HelveticaNeueLTStd;
  font-weight: 400;
  font-size: 9px;
  line-height: 100%;
  margin: 34px 0 14px 0;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.lightest};
`;
const ProgressBar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;
const Line = styled.div`
  position: absolute;
  top: 4px;
  left: 0px;
  width: 230px;
  height: 2px;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primary : theme.colors.lightest};
  transform: scaleX(${({ progress }) => progress / 10});
  transform-origin: left;
`;
const displayItems = (qnt, curr) => {
  const items = [];
  for (let index = 0; index < qnt; index++) {
    items.push(
      <ProgressBarItem
        title={index + 1}
        current={curr === index + 1 ? true : false}
        isCompleted={curr > index + 1 ? true : false}
      />
    );
  }
  return items;
};

//progress issue
const CockpitProgressBar = () => {
  return (
    <Container>
      <Text>your 12 week progress</Text>
      <ProgressBar>
        {displayItems(12, 7)}
        <Line progress={10} />
        <Line progress={5} isActive />
      </ProgressBar>
    </Container>
  );
};
export default CockpitProgressBar;
