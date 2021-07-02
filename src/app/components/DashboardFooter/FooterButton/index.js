import React from "react";
import styled from "styled-components";
import arrowIcon from "./arrow_icon.png";

const Container = styled.div`
  border-radius: 5px;

  height: 37px;
  border: 1px solid ${({ theme }) => theme.colors.neutralLighter};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 13px;

  margin-right: 9px;
  cursor: pointer;

  display: flex;
  justify-content: flex-start;
  align-items: center;
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
/*
.Buy_now {
.Lorem_ipsum_dolor_sit_amet__consect_turadipisci {
  font-size: 4.763px;
  font-family: "Arial";
  color: rgb( 130, 130, 130 );
  line-height: 1.4;
  text-align: left;
  -moz-transform: matrix( 3.19425813069175, 0, 0, 3.14939491975006, 0, 0);
  -webkit-transform: matrix( 3.19425813069175, 0, 0, 3.14939491975006, 0, 0);
  position: absolute;
  left: 789px;
  top: 902px;
  width: 237px;
  height: 35px;
  z-index: 176;
}

}

}

*/

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
