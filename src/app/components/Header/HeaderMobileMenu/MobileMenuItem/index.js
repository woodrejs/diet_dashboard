import React, { memo } from "react";
import { Container } from "./index.css.js";

const MobileMenuItem = ({ to, title }) => {
  return <Container href={to}>{title}</Container>;
};
export default memo(MobileMenuItem);
