import React from "react";
import styled from "styled-components";

const OutlineMask = styled.div`
  position: absolute;
  height: 70px;
  width: 2px;
  bottom: 0px;
  right: -2px;
  background-color: rgba(0, 0, 0, 0.08);
`;
const Outline = styled.div`
  position: absolute;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.secondary : "unset"};
`;
const OutlineTop = styled(Outline)`
  height: 2px;
  width: 100%;
  top: 0;
`;
const OutlineRight = styled(Outline)`
  height: 100%;
  width: 2px;
  top: 0;
  right: -2px;
`;
const OutlinBottom = styled(Outline)`
  height: 2px;
  width: 100%;
  bottom: 0;
`;
const OutlineLeft = styled(Outline)`
  height: 100%;
  width: 2px;
  top: 0;
  left: -2px;
`;

const MultiPartColumnOutline = ({ isActive }) => {
  return (
    <>
      <OutlineTop isActive={isActive} />
      <OutlineRight isActive={isActive} />
      <OutlinBottom isActive={isActive} />
      <OutlineLeft isActive={isActive} />
      <OutlineMask />
    </>
  );
};
export default MultiPartColumnOutline;
