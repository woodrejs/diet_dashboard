import React from "react";
import styled from "styled-components";
import weightColorIcon from "./weight_color_icon.png";
import weightGrayIcon from "./weight_gray_icon.png";
import arrowIcon from "./sm_arrow_icon.png";

const Container = styled.div`
  width: 100%;
  height: 70px;
`;
const TextBox = styled.div`
  height: 35px;
  width: 100%;

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
  color: ${({ theme }) => theme.colors.textLight}; ;
`;
const ButtonBox = styled.div`
  height: 35px;
  width: 100%;
  position: relative;
  border-top: 2px solid rgba(0, 0, 0, 0.08);
  padding-bottom: 2px;
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

const MultiPartColumnFooter = ({ isCompleted, isActive }) => {
  return (
    <Container>
      <TextBox>
        <Text>high-carb</Text>
      </TextBox>

      <ButtonBox>
        {isCompleted || isActive ? (
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
