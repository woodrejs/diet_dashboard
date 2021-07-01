import React from "react";
import styled from "styled-components";
import arrowIcon from "./large_arrow_icon.png";

const Container = styled.div`
  width: 297px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
//change to btn ???
const Button = styled.img`
  transform: rotateZ(${({ prev }) => (prev ? "180deg" : "unset")});
  height: 42px;
  width: 24px;
  cursor: pointer;
`;
const Title = styled.span`
  font-family: HelveticaNeueLTStd;
  font-weight: 400;
  font-size: 48px;
  line-height: 46px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.secondary};
`;

const CockpitWeekSwitch = () => {
  const handleClick = () => {};
  return (
    <Container>
      <Button onClick={handleClick} src={arrowIcon} alt="prev_arrow_icon" prev />
      <Title>week 7</Title>
      <Button onClick={handleClick} src={arrowIcon} alt="next_arrow_icon" />
    </Container>
  );
};
export default CockpitWeekSwitch;
