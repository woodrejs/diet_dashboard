import styled from "styled-components";

export const Container = styled.div`
  height: 190px;
  width: 260px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${({ theme }) => theme.device.tablet} {
    width: 220px;
    height: auto;
  }
  @media ${({ theme }) => theme.device.mobileLandscape} {
    width: 100%;
    padding: 25px 0;
  }
`;
export const Title = styled.span`
  font-family: HelveticaNeueLTStd;
  font-size: 28px;
  line-height: 29px;
  letter-spacing: 0.3;
  font-weight: 600;
  margin-bottom: 20px;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.colors.darkLighter};
`;
export const Text = styled.span`
  font-family: HelveticaNeueLTStd;
  font-size: 15px;
  line-height: 21px;
  font-weight: 400;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.darkLighter};
`;
export const ButtonsBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
  }
  @media ${({ theme }) => theme.device.mobileLandscape} {
    flex-direction: row;
    align-items: flex-start;
  }
`;
