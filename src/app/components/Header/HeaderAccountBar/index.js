import React from "react";
import { Container, Text, Avatar, Arrow } from "./index.css";
import avatar_icon from "./icon_avatar.png";
import button_icon from "./icon_drop_arrow.png";

const HeaderAccountBar = () => {
  const handleClick = () => {
    /*place for code ... */
  };
  return (
    <Container onClick={handleClick}>
      <Avatar src={avatar_icon} alt="avatar_icon" />
      <Text>olivia wilde</Text>
      <Arrow src={button_icon} alt="button_icon" />
    </Container>
  );
};
export default HeaderAccountBar;
