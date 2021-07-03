import React from "react";
import { Section, Container, LineLeft, LineRight } from "./index.css";
import icon_apple from "./icon_apple.png";
import icon_android from "./icon_android.png";

import FooterButton from "./FooterButton";
import FooterCard from "./FooterCard";

const DashboardFooter = () => {
  return (
    <Section>
      <Container>
        <FooterCard
          title="Running out of products?"
          text="Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet."
          primaryButton={<FooterButton title="Buy now" />}
        />
        <LineLeft />
        <FooterCard
          title="Bod•e Trainer in your pocket"
          text="Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet."
          primaryButton={<FooterButton src={icon_apple} title="IOS" />}
          secondaryButton={<FooterButton src={icon_android} title="Android" />}
        />
        <LineRight />
        <FooterCard
          title="Frequently Asked Questions"
          text="Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet."
          primaryButton={<FooterButton title="Read FAQs" />}
        />
      </Container>
    </Section>
  );
};
export default DashboardFooter;
