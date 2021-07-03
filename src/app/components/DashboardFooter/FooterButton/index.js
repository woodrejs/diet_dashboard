import React from "react";
import styled from "styled-components";
import arrowIcon from "./arrow_icon.png";

const Container = styled.div`
  border-radius: 5px;

  height: 37px;
  border: 1px solid ${({ theme }) => theme.colors.neutralLighter};
  background-color: ${({ theme }) => theme.colors.lightLightest};
  padding: 13px;

  margin-right: 9px;
  cursor: pointer;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media ${({ theme }) => theme.device.tablet} {
    margin-right: 0;
    margin-bottom: 9px;
    justify-content: flex-end;
  }
  @media ${({ theme }) => theme.device.mobileLandscape} {
    margin-right: 9px;
  }
`;
const Text = styled.span`
  font-family: HelveticaNeueLTStd;
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.neutral};
`;
const Arrow = styled.img`
  height: 13px;
  width: 7px;
`;
const Icon = styled.img`
  margin-right: 10px;
`;

const FooterButton = ({ src, title }) => {
  return (
    <Container>
      {src && <Icon src={src} alt="button_icon" />}
      <Text children={title} />
      <Arrow src={arrowIcon} alt="arrow_icon" />
    </Container>
  );
};
export default FooterButton;
