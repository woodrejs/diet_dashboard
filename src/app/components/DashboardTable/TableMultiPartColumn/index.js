import React from "react";
import { Container } from "./index.css";

import TableHeader from "../TableHeader";
import TableColumnOutline from "../TableColumnOutline";
import MultiPartColumnCell from "./MultiPartColumnCell";
import MultiPartColumnFooter from "./MultiPartColumnFooter";

const TableMultiPartColumn = ({ data, day, active }) => {
  const { highCarbon, workoutCompleted, meals } = data;
  return (
    <Container>
      <TableHeader day={day} />

      {meals.map((meal) => (
        <MultiPartColumnCell key={meal.id} data={meal} active={active} />
      ))}

      <MultiPartColumnFooter isCompleted={workoutCompleted} highCarbon={highCarbon} />

      <TableColumnOutline active={active} />
    </Container>
  );
};
export default TableMultiPartColumn;
