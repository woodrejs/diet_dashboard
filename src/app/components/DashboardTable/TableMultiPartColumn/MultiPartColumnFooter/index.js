import React, { useState } from "react";
import { Container, TextBox, Text, ButtonBox, Button, CheckIcon } from "./index.css";
import weight_color_icon from "./icon_weight_color.png";
import weight_gray_icon from "./icon_weight_gray.png";
import arrow_icon from "./icon_sm_arrow.png";

const MultiPartColumnFooter = ({ isCompleted, highCarbon }) => {
  const [isChecked, setIsChecked] = useState(isCompleted);

  const handleClick = () => setIsChecked((currState) => !currState);

  return (
    <Container>
      <TextBox>
        <Text>{highCarbon ? "high-carb" : "low-carb"}</Text>
      </TextBox>

      <ButtonBox>
        {isChecked ? (
          <>
            <Button
              onClick={handleClick}
              src={weight_color_icon}
              alt="weight_color_icon"
            />
            <CheckIcon src={arrow_icon} alt="arrow_icon" />
          </>
        ) : (
          <Button onClick={handleClick} src={weight_gray_icon} alt="weight_gray_icon" />
        )}
      </ButtonBox>
    </Container>
  );
};
export default MultiPartColumnFooter;
