import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 300px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 0;
    width: 30vw;
  }
  @media ${({ theme }) => theme.device.mobileLandscape} {
    order: 3;
    width: 100%;
  }
`;
export const Button = styled.img`
  transform: rotateZ(${({ prev }) => (prev ? "180deg" : "unset")});
  cursor: pointer;
`;
export const Title = styled.span`
  font-family: HelveticaNeueLTStd;
  font-weight: 400;
  font-size: 48px;
  line-height: 46px;
  padding: 0 33px 2px 40px;
  letter-spacing: 0.5px;

  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.secondary};

  @media ${({ theme }) => theme.device.tablet} {
    padding: 0;
  }
`;
