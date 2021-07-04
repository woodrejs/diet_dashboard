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
  width: 26px;
  transform: rotateZ(${({ prev }) => (prev ? "180deg" : "unset")});
  cursor: pointer;
`;
export const SliderBox = styled.div`
  width: 100%;
  height: 100%;
  min-height: 46px;
  overflow: hidden;
  position: relative;
`;
export const Slider = styled.div`
  height: 100%;
  left: 0;

  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transform: ${({ shift }) => `translateX(-${shift}px)`};
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
`;
export const Slide = styled.div`
  width: ${({ width }) => `${width}px`};

  font-family: HelveticaNeueLTStd;
  font-weight: 400;
  font-size: 48px;
  line-height: 46px;
  letter-spacing: 0.5px;

  text-align: center;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.secondary};

  @media ${({ theme }) => theme.device.tablet} {
    padding: 0;
  }
`;
