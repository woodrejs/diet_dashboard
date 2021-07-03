import React from "react";
import styled from "styled-components";

import appleIcon from "./apple_icon.png";
import androidIcon from "./android_icon.png";

import FooterButton from "./FooterButton";
import FooterCard from "./FooterCard";

const Section = styled.div`
  width: 100%;
  padding: 50px 0;

  @media ${({ theme }) => theme.device.mobileLandscape} {
    padding: 25px 0;
  }
`;
const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 23px;

  position: relative;
  display: flex;

  @media ${({ theme }) => theme.device.tablet} {
    justify-content: space-between;
  }
  @media ${({ theme }) => theme.device.mobileLandscape} {
    flex-direction: column;
    align-items: center;
  }
`;
const Line = styled.div`
  width: 1px;
  background-color: ${({ theme }) => theme.colors.light};

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
  @media ${({ theme }) => theme.device.mobileLandscape} {
    display: block;
    width: 100%;
    height: 1px;
    margin: 0;
  }
`;
const LineLeft = styled(Line)`
  margin-left: 45px;
  margin-right: 50px;
`;
const LineRight = styled(Line)`
  margin-left: 57px;
  margin-right: 40px;
`;

const DashboardFooter = () => {
  return (
    <Section>
      <Container>
        <FooterCard
          title="Running out of products?"
          text="Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet."
          buttons={<FooterButton title="Buy now" />}
        />

        <LineLeft />

        <FooterCard
          title="Bod•e Trainer in your pocket"
          text="Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet."
          buttons={
            <>
              <FooterButton src={appleIcon} title="IOS" />
              <FooterButton src={androidIcon} title="Android" />
            </>
          }
        />

        <LineRight />

        <FooterCard
          title="Frequently Asked Questions"
          text="Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet."
          buttons={<FooterButton title="Read FAQs" />}
        />
      </Container>
    </Section>
  );
};
export default DashboardFooter;
