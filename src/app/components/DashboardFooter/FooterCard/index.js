import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 190px;
  width: 260px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Title = styled.span`
  font-family: HelveticaNeueLTStd;
  font-size: 28px;
  line-height: 29px;
  letter-spacing: 0.3;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.darkLighter};
  margin-bottom: 20px;
`;
const Text = styled.span`
  font-family: HelveticaNeueLTStd;
  font-size: 15px;
  line-height: 21px;
  letter-spacing: 0.3;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkLighter};
  margin-bottom: 20px;
`;
const ButtonsBox = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
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
