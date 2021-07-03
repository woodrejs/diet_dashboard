import React from "react";
import TableTimeColumn from "./TableTimeColumn";
import { displayTableColumns } from "./index.utils";
import dummyData from "../../../dummyData";
import arrow_icon from "./icon_large_arrow.png";
import {
  Container,
  Section,
  Table,
  TableBody,
  ButtonLeft,
  ButtonRight,
} from "./index.css";

const DashboardTable = () => {
  const handleShowNextColumns = () => {
    /*place for code ... */
  };
  const handleShowPrevColumns = () => {
    /*place for code ... */
  };
  return (
    <Section>
      <Container>
        <Table>
          <TableTimeColumn />
          <TableBody children={displayTableColumns(dummyData.days, dummyData.currDay)} />

          {/* buttons visible on tablet & mobile only */}
          <ButtonLeft onClick={handleShowPrevColumns} src={arrow_icon} alt="prev_btn" />
          <ButtonRight onClick={handleShowNextColumns} src={arrow_icon} alt="next_btn" />
        </Table>
      </Container>
    </Section>
  );
};
export default DashboardTable;
