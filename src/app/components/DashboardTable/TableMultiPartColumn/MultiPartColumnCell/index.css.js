import styled from "styled-components";
import { setBackground } from "./index.utils";

export const Container = styled.div`
  width: 100%;
  height: 92px;
  padding: 9px 5px 9px 14px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
  border-top: 2px solid ${({ theme }) => theme.colors.lightLighter};

  background-image: url(${({ isShake, active }) => setBackground(isShake, active)});
  background-repeat: no-repeat;
  background-position: center bottom;

  :hover {
    background-color: ${({ theme }) => theme.colors.lightLightest};
    background-image: url(${({ isShake }) => setBackground(isShake, true)});
  }
`;
export const Text = styled.span`
  max-width: 105px;
  max-height: 100%;
  font-size: 13px;
  line-height: 18px;

  overflow: hidden;
  white-space: wrap;

  font-family: Arial;
  color: ${({ theme, isChecked }) =>
    isChecked ? theme.colors.black : theme.colors.darkLighter};

  ${Container}:hover & {
    color: ${({ theme }) => theme.colors.black};
  }
`;
export const Icon = styled.img`
  margin-top: -3px;
  float: left;
`;
