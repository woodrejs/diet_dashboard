import React from "react";
import styled from "styled-components";
import TimeColumnCell from "./TimeColumnCell";
import TimeColumnFooter from "./TimeColumnFooter";

const Container = styled.div`
  height: 580px;
  width: 85px;
  padding-top: 52px;
`;

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
