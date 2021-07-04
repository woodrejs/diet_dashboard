import React, { useState } from "react";
import MobileMenuItem from "./MobileMenuItem";
import { Container, MenuBox, MenuIcon, MenuCloseIcon } from "./index.css.js";
import hamburger_icon from "./icon_hamburger.svg";
import close_icon from "./icon_close.svg";

const HeaderMobileMenu = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen((currState) => !currState);

  return (
    <Container>
      <MenuIcon onClick={handleClick} src={hamburger_icon} alt="hamburger_menu_icon" />

      <MenuBox open={open}>
        <MenuCloseIcon onClick={handleClick} src={close_icon} alt="close_icon" />

        <MobileMenuItem to="#" title="Dashboard" />
        <MobileMenuItem to="#" title="Recipes" />
        <MobileMenuItem to="#" title="Challenge" />
      </MenuBox>
    </Container>
  );
};
export default HeaderMobileMenu;
