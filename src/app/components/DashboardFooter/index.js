import React from "react";
import FooterCard from "./FooterCard";
import { Section, Container, LineLeft, LineRight } from "./index.css";
import icon_apple from "./icon_apple.png";
import icon_android from "./icon_android.png";

const DashboardFooter = () => {
  return (
    <Section>
      <Container>
        <FooterCard
          title="Running out of products?"
          text="Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet."
          primaryButton={{ title: "Buy now" }}
        />

        <LineLeft />

        <FooterCard
          title="Bod•e Trainer in your pocket"
          text="Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet."
          primaryButton={{ title: "IOS", src: icon_apple }}
          secondaryButton={{ title: "Android", src: icon_android }}
        />

        <LineRight />

        <FooterCard
          title="Frequently Asked Questions"
          text="Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet."
          primaryButton={{ title: "Read FAQs" }}
        />
      </Container>
    </Section>
  );
};
export default DashboardFooter;
