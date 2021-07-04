import React, { memo } from "react";
import { Button } from "./index.css";

const OptionsPanelButton = ({ src }) => {
  const handleClick = () => {
    /*place for code ... */
  };
  return <Button onClick={handleClick} src={src} alt="options_panel_button" />;
};
export default memo(OptionsPanelButton);
