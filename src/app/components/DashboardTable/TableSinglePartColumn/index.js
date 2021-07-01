import React from "react";
import styled from "styled-components";

import TableHeader from "../TableHeader";
import TableColumnOutline from "../TableColumnOutline";
import smileIcon from "./smile_icon.png";
import printIcon from "./print_icon.png";

const Container = styled.div`
  width: 125px;
  height: 100%;
  border-top-right-radius: 5px;
  overflow: hidden;
  position: relative;
`;
const Cell = styled.div`
  height: 460px;
  border-top: 2px solid ${({ theme }) => theme.colors.light};
  padding-bottom: 2px;

  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CellBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CellText = styled.span`
  font-family: HelveticaNeueLTStd;
  font-weight: 200;
  font-size: 35px;
  line-height: 46px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textLighter};

  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotateZ(180deg);
`;
const CellIcon = styled.img`
  height: 32px;
  width: 32px;
  margin-top: 28px;
`;
const Footer = styled.div`
  height: 70px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const FooterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FooterIcon = styled.img`
  height: 27px;
  width: 23px;
  margin-right: 13px;
`;
const FooterText = styled.span`
  font-family: HelveticaNeueLTStd;
  font-weight: 400;
  font-size: 18px;
  line-height: 16px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.gray};
`;

const TableSinglePartColumn = ({ day, isActive }) => {
  return (
    <Container>
      <TableHeader day={day} />
      <Cell>
        <CellBox>
          <CellText>GUILT-FREE DAY</CellText>
          <CellIcon src={smileIcon} alt="smile_icon" />
        </CellBox>
      </Cell>
      <Footer>
        <FooterBox>
          <FooterIcon src={printIcon} alt="printIcon" />
          <FooterText>print</FooterText>
        </FooterBox>
      </Footer>
      <TableColumnOutline isActive={isActive} horizontalPosition="0" />
    </Container>
  );
};
export default TableSinglePartColumn;
