import React from "react";
import styled from "styled-components";
import { primary, third } from "../../../../style/colors";

const MenuItemStyled = styled.div`
  padding: 16px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;
const SpanStyled = styled.span`
  font-family: HelveticaNeueLTStd;
  font-weight: 800;
  font-size: 14px;
  line-height: 46px;
  text-transform: uppercase;
  color: ${({ active }) => (active ? primary : third)};
`;
const LineStyled = styled.div`
  position: absolute;
  width: 25px;
  height: 2px;
  bottom: 22px;
  background-color: ${({ active }) => (active ? primary : third)};
`;

const MenuItem = ({ active, title }) => {
  return (
    <MenuItemStyled>
      <SpanStyled active={active} children={title} />
      {active && <LineStyled active={active} />}
    </MenuItemStyled>
  );
};

export default MenuItem;
