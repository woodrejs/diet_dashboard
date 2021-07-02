import React from "react";
import styled from "styled-components";
import weightColorIcon from "./weight_color_icon.png";
import weightGrayIcon from "./weight_gray_icon.png";
import arrowIcon from "./sm_arrow_icon.png";

const Container = styled.div`
  width: 128px;
  height: 70px;
  border-right: 2px solid rgba(0, 0, 0, 0.08);
`;
const TextBox = styled.div`
  height: 35px;
  width: 100%;
  padding-left: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.span`
  font-family: HelveticaNeueLTStd;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.darkLighter}; ;
`;
const ButtonBox = styled.div`
  height: 35px;
  width: 100%;
  position: relative;
  border-top: 2px solid rgba(0, 0, 0, 0.08);
  padding: 0 0 2px 2px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.img`
  height: 14px;
  width: 28px;
`;
const CheckIcon = styled.img`
  position: absolute;
  right: 32px;
`;

const MultiPartColumnFooter = ({ isCompleted }) => {
  return (
    <Container>
      <TextBox>
        <Text>high-carb</Text>
      </TextBox>

      <ButtonBox>
        {isCompleted ? (
          <>
            <Button src={weightColorIcon} alt="weightColorIcon" />
            <CheckIcon src={arrowIcon} alt="arrowIcon" />
          </>
        ) : (
          <Button src={weightGrayIcon} alt="weightGrayIcon" />
        )}
      </ButtonBox>
    </Container>
  );
};
export default MultiPartColumnFooter;
