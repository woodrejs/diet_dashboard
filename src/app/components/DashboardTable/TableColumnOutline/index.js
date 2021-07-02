import React from "react";
import styled from "styled-components";

const Outline = styled.div`
  position: absolute;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.secondary : "unset"};
`;
const OutlineTop = styled(Outline)`
  height: 2px;
  width: 100%;
  top: 0;
`;
const OutlineRight = styled(Outline)`
  height: 100%;
  width: 2px;
  top: 0;
  right: ${({ right }) => (right ? right : "-2px")};
`;
const OutlinBottom = styled(Outline)`
  height: 2px;
  width: 100%;
  bottom: 0;
`;
const OutlineLeft = styled(Outline)`
  height: 100%;
  width: 2px;
  top: 0;
  left: ${({ horizontalPosition }) => (horizontalPosition ? horizontalPosition : "-2px")};
`;
//??horizontalPosition
const TableColumnOutline = ({ isActive, right }) => {
  return (
    <>
      <OutlineTop isActive={isActive} />
      <OutlineRight isActive={isActive} right={right} />
      <OutlinBottom isActive={isActive} />
      <OutlineLeft isActive={isActive} />
    </>
  );
};
export default TableColumnOutline;
