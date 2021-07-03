import React from "react";
import { Container, TextBox, Text, ButtonBox, Button, CheckIcon } from "./index.css";
import weight_color_icon from "./icon_weight_color.png";
import weight_gray_icon from "./icon_weight_gray.png";
import arrow_icon from "./icon_sm_arrow.png";

const MultiPartColumnFooter = ({ isCompleted, highCarbon }) => {
  return (
    <Container>
      <TextBox>
        <Text>{highCarbon ? "high-carb" : "low-carb"}</Text>
      </TextBox>

      <ButtonBox>
        {isCompleted ? (
          <>
            <Button src={weight_color_icon} alt="weight_color_icon" />
            <CheckIcon src={arrow_icon} alt="arrow_icon" />
          </>
        ) : (
          <Button src={weight_gray_icon} alt="weight_gray_icon" />
        )}
      </ButtonBox>
    </Container>
  );
};
export default MultiPartColumnFooter;
