import React, { memo } from "react";
import { Slide } from "./index.css";

const SliderItem = ({ title, width }) => {
  return <Slide width={width}>{title}</Slide>;
};
export default memo(SliderItem);
