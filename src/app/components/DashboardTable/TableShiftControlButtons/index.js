import React, { memo } from "react";
import { ButtonPrev, ButtonNext } from "./index.css";
import icon_next_arrow from "./icon_next_arrow.png";
import icon_prev_arrow from "./icon_prev_arrow.png";

const TableShiftControlButtons = ({ handleNext, handlePrev }) => {
  return (
    <>
      <ButtonNext onClick={handleNext} src={icon_next_arrow} alt="icon_next_arrow" />
      <ButtonPrev onClick={handlePrev} src={icon_prev_arrow} alt="icon_prev_arrow" />
    </>
  );
};
export default memo(TableShiftControlButtons);
