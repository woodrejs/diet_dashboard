import React from "react";
import { Container, MenuBox, MenuIcon, MenuItem, MenuCloseIcon } from "./index.css.js";
import hamburger_icon from "./icon_hamburger.svg";
import close_icon from "./icon_close.svg";

const HeaderMobileMenu = () => {
  const handleCloseMenu = () => {
    /*place for code ... */
  };
  const handleOpenMenu = () => {
    /*place for code ... */
  };
  return (
    <Container>
      <MenuIcon onClick={handleOpenMenu} src={hamburger_icon} alt="hamburger_menu_icon" />

      <MenuBox>
        <MenuCloseIcon onClick={handleCloseMenu} src={close_icon} alt="close_icon" />

        <MenuItem href="#" children="Dashboard" />
        <MenuItem href="#" children="Recipes" />
        <MenuItem href="#" children="Challenge" />
      </MenuBox>
    </Container>
  );
};
export default HeaderMobileMenu;
