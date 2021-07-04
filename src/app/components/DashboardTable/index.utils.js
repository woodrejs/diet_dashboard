import { size } from "../../style/media";

const toNumber = (string) => Number(string.replace("px", ""));
export const isActive = (currDay, day) => (currDay === day ? true : false);
export const getSingleSlideWidth = (sliderWidth) => {
  const viewWidth = window.innerWidth;
  const { mobile, mobileLandscape, tablet } = size;
  let singleSlideWidth = 0;

  switch (true) {
    case viewWidth <= toNumber(mobile):
      singleSlideWidth = sliderWidth;
      break;
    case viewWidth <= toNumber(mobileLandscape):
      singleSlideWidth = sliderWidth / 2;
      break;
    case viewWidth <= toNumber(tablet):
      singleSlideWidth = sliderWidth / 5;
      break;
    default:
      singleSlideWidth = sliderWidth / 7;
      break;
  }

  return Math.round(singleSlideWidth);
};
export const isEmpty = (obj) => !obj.hasOwnProperty("meals");
