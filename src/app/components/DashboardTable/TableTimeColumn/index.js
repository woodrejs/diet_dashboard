import React from "react";
import { Container } from "./index.css";
import TimeColumnCell from "./TimeColumnCell";
import TimeColumnFooter from "./TimeColumnFooter";

const TableTimeColumn = () => {
  return (
    <Container>
      <TimeColumnCell time="6:00" />
      <TimeColumnCell time="9:00" />
      <TimeColumnCell time="12:00" pm />
      <TimeColumnCell time="3:00" pm />
      <TimeColumnCell time="6:00" pm last />

      <TimeColumnFooter title="workout" />
    </Container>
  );
};
export default TableTimeColumn;
