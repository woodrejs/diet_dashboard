import shake_color from "./img_shake_color.png";
import shake_gray from "./img_shake_gray.png";

export const setBackground = (isShake, isActive) => {
  let result = "unset";

  if (isShake && isActive) result = shake_color;
  if (isShake && !isActive) result = shake_gray;

  return result;
};
