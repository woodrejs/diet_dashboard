import React from "react";
import { Container, Title, Text, ButtonsBox } from "./index.css";

const FooterCard = ({ title, text, primaryButton, secondaryButton }) => {
  return (
    <Container>
      <Title children={title} />
      <Text children={text} />
      <ButtonsBox>
        {primaryButton}
        {secondaryButton}
      </ButtonsBox>
    </Container>
  );
};
export default FooterCard;
