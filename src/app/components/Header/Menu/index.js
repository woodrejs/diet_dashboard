import React from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem/index";
import { fourth } from "../../../style/colors";

const MenuStyled = styled.div`
  height: 100%;
  margin-left: 118px;
  padding: 16px;
  display: flex;
  align-items: center;
  border-left: 1px solid ${fourth};
`;

const Menu = () => {
  return (
    <MenuStyled>
      <MenuItem title="Dashboard" active />
      <MenuItem title="Recipes" />
      <MenuItem title="Challenge" />
    </MenuStyled>
  );
};
export default Menu;

// const TMP = styled.div`
//   width: 100%;
//   height: 100%;
//   background-color: blue;
// `;
// <TMP/>
