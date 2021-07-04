import React, { useRef, useEffect, useState } from "react";
import TableTimeColumn from "./TableTimeColumn";
import TableSinglePartColumn from "./TableSinglePartColumn";
import TableMultiPartColumn from "./TableMultiPartColumn";
import dummyData from "../../../dummyData";
import arrow_icon from "./icon_large_arrow.png";
import {
  Container,
  Section,
  Table,
  TableBody,
  ButtonPrev,
  ButtonNext,
  Slider,
} from "./index.css";

const DashboardTable = () => {
  const [sliderWidth, setSliderWidth] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [currSlide, setCurrSlide] = useState(0);

  const tableBodyRef = useRef(null);
  const sliderRef = useRef(null);

  const handleShowNextColumns = () => {
    const columnsOnScreen = Math.round(sliderWidth / slideWidth);
    const columnsInTable = 7;
    if (currSlide < columnsInTable - columnsOnScreen)
      setCurrSlide((currState) => currState + 1);
  };
  const handleShowPrevColumns = () => {
    currSlide && setCurrSlide((currState) => currState - 1);
  };

  useEffect(() => setSliderWidth(sliderRef.current.clientWidth), []);
  useEffect(
    () => setSlideWidth(tableBodyRef.current.firstChild.offsetWidth),
    [sliderWidth]
  );

  return (
    <Section>
      <Container>
        <Table>
          <TableTimeColumn />

          <Slider ref={sliderRef}>
            <TableBody ref={tableBodyRef} shift={currSlide * slideWidth}>
              {dummyData.days.map(({ id, data, day }) => {
                const active = dummyData.currDay === day ? true : false;

                return data.hasOwnProperty("meals") ? (
                  <TableMultiPartColumn
                    key={id}
                    data={data}
                    day={day}
                    active={active}
                    width={sliderWidth}
                  />
                ) : (
                  <TableSinglePartColumn
                    key={id}
                    day={day}
                    active={active}
                    width={sliderWidth}
                  />
                );
              })}
            </TableBody>
          </Slider>

          {/* buttons visible on tablet & mobile only */}
          <ButtonNext onClick={handleShowNextColumns} src={arrow_icon} alt="next_btn" />
          <ButtonPrev onClick={handleShowPrevColumns} src={arrow_icon} alt="prev_btn" />
        </Table>
      </Container>
    </Section>
  );
};
export default DashboardTable;
