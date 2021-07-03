import React from "react";
import { Container } from "./index.css";
import DeskopMenuItem from "./DeskopMenuItem";

const HeaderDeskopMenu = () => {
  return (
    <Container>
      <DeskopMenuItem title="Dashboard" active />
      <DeskopMenuItem title="Recipes" />
      <DeskopMenuItem title="Challenge" />
    </Container>
  );
};
export default HeaderDeskopMenu;
