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
  cursor: pointer;
  transition: 0.2s ease-in;

  :hover {
    transform: scale(0.95);
  }
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
