import React, { memo } from "react";
import FooterButton from "../FooterButton";
import { Container, Title, Text, ButtonsBox } from "./index.css";

const FooterCard = ({ title, text, primaryButton, secondaryButton }) => {
  return (
    <Container>
      <Title children={title} />
      <Text children={text} />
      <ButtonsBox>
        {primaryButton && (
          <FooterButton src={primaryButton.src ?? null} title={primaryButton.title} />
        )}
        {secondaryButton && (
          <FooterButton src={secondaryButton.src ?? null} title={secondaryButton.title} />
        )}
      </ButtonsBox>
    </Container>
  );
};
export default memo(FooterCard);
