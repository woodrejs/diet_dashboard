import React, { memo } from "react";
import { OutlineTop, OutlineRight, OutlinBottom, OutlineLeft } from "./index.css";

const TableColumnOutline = ({ active, right }) => {
  return (
    <>
      <OutlineTop active={active} />
      <OutlineRight active={active} right={right} />
      <OutlinBottom active={active} />
      <OutlineLeft active={active} />
    </>
  );
};
export default memo(TableColumnOutline);
