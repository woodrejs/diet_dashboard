import React from "react";
import styled from "styled-components";
import userAvatar from "./user_avatar.png"; //bad export
import dropArrow from "./drop_arrow_icon.png"; //bad export
import { third } from "../../../style/colors";

const AccountBarStyled = styled.div`
  height: 100%;
  margin-right: 23px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const SpanStyled = styled.span`
  font-family: HelveticaNeueLTStd;
  font-weight: 400;
  font-size: 15px;
  line-height: 46px;
  padding: 0 10px;
  text-transform: capitalize;
  color: ${third};
`;
const StyledAvatar = styled.img`
  width: 34px;
  height: 34px;
`;
//?? width & height ??
const StyledArrow = styled.img`
  width: 4px;
  height: 8px;
  transform: rotateZ(90deg);
`;

const AccountBar = () => {
  return (
    <AccountBarStyled>
      <StyledAvatar src={userAvatar} alt="user_avatar" />
      <SpanStyled children="olivia wilde" />
      <StyledArrow src={dropArrow} alt="drop_arrow" />
    </AccountBarStyled>
  );
};
export default AccountBar;
