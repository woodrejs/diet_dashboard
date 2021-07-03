import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 190px;
  width: 260px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${({ theme }) => theme.device.tablet} {
    width: 220px;
    height: auto;
  }
  @media ${({ theme }) => theme.device.mobileLandscape} {
    width: 100%;
    padding: 25px 0;
  }
`;
const Title = styled.span`
  font-family: HelveticaNeueLTStd;
  font-size: 28px;
  line-height: 29px;
  letter-spacing: 0.3;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkLighter};
  margin-bottom: 20px;
  letter-spacing: -0.5px;
`;
const Text = styled.span`
  font-family: HelveticaNeueLTStd;
  font-size: 15px;
  line-height: 21px;
  letter-spacing: 0.3;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkLighter};
  margin-bottom: 15px;
`;
const ButtonsBox = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
  }
  @media ${({ theme }) => theme.device.mobileLandscape} {
    align-items: flex-start;
    flex-direction: row;
  }
`;

const FooterCard = ({ buttons, title, text }) => {
  return (
    <Container>
      <Title children={title} />
      <Text children={text} />
      <ButtonsBox children={buttons} />
    </Container>
  );
};
export default FooterCard;
