import styled from "styled-components";

export const Slide = styled.div`
  width: ${({ width }) => `${width}px`};

  font-family: HelveticaNeueLTStd;
  font-weight: 400;
  font-size: 48px;
  line-height: 46px;
  letter-spacing: 0.5px;
  padding-left: 9px;

  text-align: center;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.secondary};

  @media ${({ theme }) => theme.device.tablet} {
    padding: 0;
  }
`;
