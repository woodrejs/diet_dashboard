import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 128px;

  position: relative;
  border-right: 2px solid ${({ theme }) => theme.colors.lightLighter};

  @media ${({ theme }) => theme.device.tablet} {
    width: ${({ width }) => `${width / 5}px`};
  }
  @media ${({ theme }) => theme.device.mobileLandscape} {
    width: ${({ width }) => `${width / 2}px`};
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: ${({ width }) => `${width}px`};
  }
`;
