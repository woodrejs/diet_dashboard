import React from "react";
import TableHeader from "../TableHeader";
import TableColumnOutline from "../TableColumnOutline";
import smile_icon from "./icon_smile.png";
import print_icon from "./icon_print.png";
import {
  Container,
  Cell,
  CellBox,
  CellText,
  CellIcon,
  Footer,
  FooterBox,
  FooterIcon,
  FooterText,
} from "./index.css.js";

const TableSinglePartColumn = ({ day, active, width }) => {
  const handleClick = () => {
    /*place for code ... */
  };

  return (
    <Container width={width}>
      <TableHeader day={day} />

      <Cell>
        <CellBox>
          <CellText>GUILT-FREE DAY</CellText>
          <CellIcon src={smile_icon} alt="smile_icon" />
        </CellBox>
      </Cell>

      <Footer>
        <FooterBox onClick={handleClick}>
          <FooterIcon src={print_icon} alt="print_icon" />
          <FooterText>print</FooterText>
        </FooterBox>
      </Footer>

      <TableColumnOutline active={active} right="0" />
    </Container>
  );
};
export default TableSinglePartColumn;
