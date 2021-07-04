import React, { memo } from "react";
import { Container, Text, Arrow, Icon } from "./index.css";
import icon_arrow from "./icon_arrow.png";

const FooterButton = ({ src, title }) => {
  return (
    <Container href="#">
      {src && <Icon src={src} alt="button_icon" />}
      <Text>{title}</Text>
      <Arrow src={icon_arrow} alt="arrow_icon" />
    </Container>
  );
};
export default memo(FooterButton);
