import React from "react";
import styled from "styled-components";
import { ten, black, white } from "../../../../style/colors";
import check_icon from "./check_icon.png";
import shakeColor from "./shake_color.png";
import shakeGray from "./shake_gray.png";

const setBackground = (isShake, isActive) => {
  let result = "unset";

  if (isShake && isActive) result = shakeColor;
  if (isShake && !isActive) result = shakeGray;

  return result;
};
const Container = styled.div`
  height: 92px;
  border-top: 2px solid ${({ theme }) => theme.colors.light};
  padding: 6px 6px 8px 8px;
  background-color: ${({ theme }) => theme.colors.white};

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  background-image: url(${({ isShake, isActive }) => setBackground(isShake, isActive)});
  background-repeat: no-repeat;
  background-position: center bottom;
`;
const Text = styled.span`
  font-family: Arial;
  font-size: 13px;
  line-height: 18px;
  text-transform: capitalize;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.textDark : theme.colors.textLight};

  color: ${({ isActive }) => (isActive ? black : ten)};
`;
const Icon = styled.img`
  width: 17px;
  height: 16px;
  float: left;
`;

const MultiPartColumnCell = ({ text, isCompleted, isShake, isActive }) => {
  return (
    <Container isShake={isShake} isActive={isActive}>
      <Text children={text} isActive={isActive} />
      {isCompleted && <Icon src={check_icon} alt="check_icon" />}
    </Container>
  );
};
export default MultiPartColumnCell;
