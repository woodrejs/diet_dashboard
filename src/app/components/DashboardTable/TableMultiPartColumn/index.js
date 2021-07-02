import React from "react";
import styled from "styled-components";

import TableHeader from "../TableHeader";
import TableColumnOutline from "../TableColumnOutline";
import MultiPartColumnCell from "./MultiPartColumnCell";
import MultiPartColumnFooter from "./MultiPartColumnFooter";

const Container = styled.div`
  height: 100%;
  width: 128px;
  position: relative;
  border-right: 2px solid ${({ theme }) => theme.colors.lightLighter};
`;

const TableMultiPartColumn = ({ isActive, data, day, workoutCompleted }) => {
  return (
    <Container>
      <TableHeader day={day} />

      {data.map(({ id, text, isShake, isCompleted }) => (
        <MultiPartColumnCell
          key={id}
          text={text}
          isActive={isActive}
          isShake={isShake}
          isCompleted={isCompleted}
        />
      ))}
      <MultiPartColumnFooter isCompleted={workoutCompleted} />
      <TableColumnOutline isActive={isActive} />
    </Container>
  );
};
export default TableMultiPartColumn;
