import styled from "styled-components";
import { progressToScale } from "./index.utils";

export const Container = styled.div`
  width: 230px;
  padding-left: 2px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media ${({ theme }) => theme.device.mobileLandscape} {
    order: 1;
    margin-bottom: 10px;
  }
`;
export const Text = styled.span`
  font-family: HelveticaNeueLTStd;
  font-weight: 400;
  font-size: 9px;
  line-height: 100%;
  margin-bottom: 13px;
  text-transform: uppercase;
  color: ${({ theme, progress }) =>
    progress ? theme.colors.secondary : theme.colors.neutralLightest};
`;
export const ProgressBar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;
export const Line = styled.div`
  top: 4px;
  left: 0px;
  width: 100%;
  height: 2px;

  position: absolute;
  background-color: ${({ progress, theme }) =>
    progress ? theme.colors.primary : theme.colors.light};
  transform: scaleX(${({ progress }) => progressToScale(progress)});
  transform-origin: left;
`;
