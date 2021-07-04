import React, { useRef, useEffect, useState } from "react";
import SliderItem from "./SliderItem";
import { Container, Button, SliderBox, Slider } from "./index.css";
import icon_next_arrow from "./icon_next_arrow.png";
import icon_prev_arrow from "./icon_prev_arrow.png";

const CockpitSlider = () => {
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
      <Button onClick={handleShowPrev} src={icon_prev_arrow} alt="icon_prev_arrow" />
      <SliderBox ref={sliderBoxRef}>
        <Slider ref={sliderRef} shift={currSlide * slideWidth}>
          <SliderItem title="week 1" width={slideWidth} />
          <SliderItem title="week 2" width={slideWidth} />
          <SliderItem title="week 3" width={slideWidth} />
          <SliderItem title="week 4" width={slideWidth} />
          <SliderItem title="week 5" width={slideWidth} />
          <SliderItem title="week 6" width={slideWidth} />
          <SliderItem title="week 7" width={slideWidth} />
          <SliderItem title="week 8" width={slideWidth} />
          <SliderItem title="week 9" width={slideWidth} />
          <SliderItem title="week 10" width={slideWidth} />
          <SliderItem title="week 11" width={slideWidth} />
          <SliderItem title="week 12" width={slideWidth} />
        </Slider>
      </SliderBox>
      <Button onClick={handleShowNext} src={icon_next_arrow} alt="icon_next_arrow" />
    </Container>
  );
};
export default CockpitSlider;
