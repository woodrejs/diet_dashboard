import React, { useRef, useEffect, useState, useCallback } from "react";
import dummyData from "../../../dummyData";
import { isActive, getSingleSlideWidth, isEmpty } from "./index.utils";
import TableHeadersColumn from "./TableHeadersColumn";
import TableShiftControlButtons from "./TableShiftControlButtons";
import TableSinglePartColumn from "./TableSinglePartColumn";
import TableMultiPartColumn from "./TableMultiPartColumn";

import { Container, Section, Table, TableBody, Slider } from "./index.css";

const DashboardTable = () => {
  const [sliderWidth, setSliderWidth] = useState(0);
  const [singleSlideWidth, setSingleSlideWidth] = useState(0);
  const [sliderShift, setSliderShift] = useState(0);

  const { days, currDay } = dummyData;
  const Ref = useRef(null);

  const handleShowPrevSlide = useCallback(
    () => sliderShift && setSliderShift((curr) => curr - 1),
    [sliderShift]
  );
  const handleShowNextSlide = useCallback(() => {
    const slidesOnScreen = Math.round(sliderWidth / singleSlideWidth);
    const slidesInSlider = 7;

    if (sliderShift < slidesInSlider - slidesOnScreen) setSliderShift((curr) => curr + 1);
  }, [sliderShift, sliderWidth, singleSlideWidth]);

  useEffect(() => setSliderWidth(Ref.current.clientWidth), []);
  useEffect(
    () => sliderWidth && setSingleSlideWidth(getSingleSlideWidth(sliderWidth)),
    [sliderWidth]
  );

  return (
    <Section>
      <Container>
        <Table>
          <TableHeadersColumn />

          <Slider ref={Ref}>
            <TableBody shift={sliderShift * singleSlideWidth}>
              {days.map(({ id, data, day }) =>
                isEmpty(data) ? (
                  <TableSinglePartColumn
                    key={id}
                    day={day}
                    active={isActive(currDay, day)}
                    width={singleSlideWidth}
                  />
                ) : (
                  <TableMultiPartColumn
                    key={id}
                    data={data}
                    day={day}
                    active={isActive(currDay, day)}
                    width={singleSlideWidth}
                  />
                )
              )}
            </TableBody>
          </Slider>

          {/* buttons visible on tablet & mobile only */}
          <TableShiftControlButtons
            handleNext={handleShowNextSlide}
            handlePrev={handleShowPrevSlide}
          />
        </Table>
      </Container>
    </Section>
  );
};
export default DashboardTable;
