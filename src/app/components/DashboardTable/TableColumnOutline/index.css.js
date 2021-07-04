import styled from "styled-components";

const Outline = styled.div`
  position: absolute;
  background-color: ${({ theme, active }) => (active ? theme.colors.secondary : "unset")};
`;
export const OutlineTop = styled(Outline)`
  height: 2px;
  width: 100%;
  top: 0;
`;
export const OutlineRight = styled(Outline)`
  height: 100%;
  width: 2px;
  top: 0;
  right: ${({ right }) => (right ? right : "-2px")};
`;
export const OutlinBottom = styled(Outline)`
  height: 2px;
  width: 100%;
  bottom: 0;
`;
export const OutlineLeft = styled(Outline)`
  height: 100%;
  width: 2px;
  top: 0;
`;
