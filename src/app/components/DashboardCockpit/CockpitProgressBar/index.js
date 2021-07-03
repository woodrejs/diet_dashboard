import React from "react";
import { Container, Text, ProgressBar, Line } from "./index.css";
import ProgressBarItem from "./ProgressBarItem";

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

//?? progress issue ??
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
