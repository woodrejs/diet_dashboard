import React from "react";
import { Container } from "./index.css";
import { displayMultiPartColumnCells } from "./index.utils";
import TableHeader from "../TableHeader";
import TableColumnOutline from "../TableColumnOutline";
import MultiPartColumnFooter from "./MultiPartColumnFooter";

const TableMultiPartColumn = ({ data, day, active, width }) => {
  const { highCarbon, workoutCompleted, meals } = data;
  return (
    <Container width={width}>
      <TableHeader day={day} />
      {displayMultiPartColumnCells(meals, active)}
      <MultiPartColumnFooter isCompleted={workoutCompleted} highCarbon={highCarbon} />

      <TableColumnOutline active={active} />
    </Container>
  );
};
export default TableMultiPartColumn;
