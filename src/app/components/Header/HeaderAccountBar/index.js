import React from "react";
import styled from "styled-components";
import userAvatar from "./user_avatar.png"; //bad export
import dropArrow from "./drop_arrow_icon.png"; //bad export

const Container = styled.div`
  height: 100%;
  margin-right: 23px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Text = styled.span`
  font-family: HelveticaNeueLTStd;
  font-weight: 400;
  font-size: 15px;
  line-height: 46px;
  padding: 0 10px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.dark};
`;
const Avatar = styled.img`
  width: 34px;
  height: 34px;
`;
const Arrow = styled.img`
  width: 4px;
  height: 8px;
  transform: rotateZ(90deg);
`;

const HeaderAccountBar = () => {
  return (
    <Container>
      <Avatar src={userAvatar} alt="user_avatar" />
      <Text>olivia wilde</Text>
      <Arrow src={dropArrow} alt="drop_arrow" />
    </Container>
  );
};
export default HeaderAccountBar;
