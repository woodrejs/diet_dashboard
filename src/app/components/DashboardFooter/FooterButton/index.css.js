import styled from "styled-components";

export const Container = styled.a`
  border-radius: 5px;
  height: 37px;
  padding: 13px;
  margin-right: 9px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.neutralLighter};
  background-color: ${({ theme }) => theme.colors.lightLightest};
  transition: 0.2s ease-in;
  transform-origin: left;

  :hover {
    transform: scale(0.95);
  }

  @media ${({ theme }) => theme.device.tablet} {
    margin-right: 0;
    margin-bottom: 9px;
    justify-content: flex-end;
  }
  @media ${({ theme }) => theme.device.mobileLandscape} {
    margin-right: 9px;
  }
`;
export const Text = styled.span`
  font-family: HelveticaNeueLTStd;
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.neutral};
`;
export const Arrow = styled.img`
  height: 13px;
  width: 7px;
`;
export const Icon = styled.img`
  margin-right: 10px;
`;
