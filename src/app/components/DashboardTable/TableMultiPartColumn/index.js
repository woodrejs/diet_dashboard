import React from "react";
import styled from "styled-components";

import TableHeader from "../TableHeader";
import MultiPartColumnCell from "./MultiPartColumnCell";
import MultiPartColumnFooter from "./MultiPartColumnFooter";
import MultiPartColumnOutline from "./MultiPartColumnOutline";

const Container = styled.div`
  height: 100%;
  width: 128px;
  position: relative;
  border-right: 2px solid ${({ theme }) => theme.colors.light};
`;

const TableMultiPartColumn = ({ isActive, data, day }) => {
  return (
    <Container>
      <TableHeader day={day} />
      <MultiPartColumnCell
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        isShake
        isActive
        isCompleted
      />
      <MultiPartColumnCell
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        isShake
        isActive
        isCompleted
      />
      <MultiPartColumnCell
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        isShake
        isActive
        isCompleted
      />
      <MultiPartColumnCell
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        isShake
        isActive
        isCompleted
      />
      <MultiPartColumnCell
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
        isShake
        isActive
        isCompleted
      />
      <MultiPartColumnFooter />
      <MultiPartColumnOutline isActive={false} />
    </Container>
  );
};
export default TableMultiPartColumn;
