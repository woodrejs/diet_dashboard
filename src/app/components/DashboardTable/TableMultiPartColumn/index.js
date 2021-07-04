import React, { memo } from "react";
import { Container } from "./index.css";
import TableHeader from "../TableHeader";
import MultiPartColumnCell from "./MultiPartColumnCell";
import TableColumnOutline from "../TableColumnOutline";
import MultiPartColumnFooter from "./MultiPartColumnFooter";

const TableMultiPartColumn = ({ data, day, active, width }) => {
  const { highCarbon, workoutCompleted, meals } = data;
  return (
    <Container width={width}>
      <TableHeader day={day} />

      {/* display cells */}
      {meals.map((item) => (
        <MultiPartColumnCell key={item.id} data={item} active={active} />
      ))}

      <MultiPartColumnFooter isCompleted={workoutCompleted} highCarbon={highCarbon} />
      <TableColumnOutline active={active} />
    </Container>
  );
};
export default memo(TableMultiPartColumn);
