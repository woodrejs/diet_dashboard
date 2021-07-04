import styled from "styled-components";

export const Container = styled.div`
  width: 205px;
  margin-left: 24px;

  @media ${({ theme }) => theme.device.tablet} {
    margin-left: 0;
  }
  @media ${({ theme }) => theme.device.mobileLandscape} {
    order: 2;
    margin-bottom: 30px;
  }
`;
export const Text = styled.span`
  font-family: HelveticaNeueLTStd;
  font-weight: 400;
  font-size: 9px;
  line-height: 16px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.neutralLightest};
`;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  padding-bottom: 2px;
`;
