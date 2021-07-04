import React, { useRef, useEffect, useState } from "react";
import { Container, Button, Slide, SliderBox, Slider } from "./index.css";
import icon_large_arrow from "./icon_large_arrow.png";

const CockpitWeekSwitch = () => {
  const [slideWidth, setSlideWidth] = useState(0);
  const [currSlide, setCurrSlide] = useState(6);

  const sliderBoxRef = useRef(null);
  const sliderRef = useRef(null);

  const handleShowNext = () => {
    const childrenQnty = sliderRef.current.children.length;
    if (currSlide < childrenQnty - 1) setCurrSlide((currState) => currState + 1);
  };
  const handleShowPrev = () => {
    currSlide && setCurrSlide((currState) => currState - 1);
  };

  useEffect(() => setSlideWidth(sliderBoxRef.current.offsetWidth), []);

  return (
    <Container>
      <Button onClick={handleShowPrev} src={icon_large_arrow} alt="prev_icon" prev />
      <SliderBox ref={sliderBoxRef}>
        <Slider ref={sliderRef} shift={currSlide * slideWidth}>
          <Slide width={slideWidth}>week 1</Slide>
          <Slide width={slideWidth}>week 2</Slide>
          <Slide width={slideWidth}>week 3</Slide>
          <Slide width={slideWidth}>week 4</Slide>
          <Slide width={slideWidth}>week 5</Slide>
          <Slide width={slideWidth}>week 6</Slide>
          <Slide width={slideWidth}>week 7</Slide>
          <Slide width={slideWidth}>week 8</Slide>
          <Slide width={slideWidth}>week 9</Slide>
          <Slide width={slideWidth}>week 10</Slide>
        </Slider>
      </SliderBox>
      <Button onClick={handleShowNext} src={icon_large_arrow} alt="next_icon" />
    </Container>
  );
};
export default CockpitWeekSwitch;
