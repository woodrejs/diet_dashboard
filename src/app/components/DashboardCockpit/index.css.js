import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  height: 110px;

  @media ${({ theme }) => theme.device.tablet} {
    height: 160px;
  }
  @media ${({ theme }) => theme.device.mobileLandscape} {
    height: auto;
  }
`;
export const Container = styled.div`
  max-width: 1024px;
  height: 100%;
  width: 100%;
  padding: 0 23px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${({ theme }) => theme.device.mobileLandscape} {
    padding: 23px;
    flex-direction: column;
    align-items: flex-start;
  }
`;
