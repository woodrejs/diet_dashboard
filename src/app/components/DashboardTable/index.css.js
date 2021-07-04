import styled from "styled-components";
import mask_img from "./img_mask.jpg";

export const Container = styled.div`
  max-width: 1024px;
  height: 580px;
  width: 100%;
  padding: 0 23px;

  margin: 0 auto;
  display: flex;
`;
export const Section = styled.div`
  width: 100%;
  height: 580px;
`;

export const Slider = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;
export const Table = styled.div`
  width: 100%;
  border-radius: 5px;

  display: flex;
  position: relative;
  overflow: hidden;

  background-image: url(${mask_img});
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const TableBody = styled.div`
  display: flex;
  position: absolute;
  transform: ${({ shift }) => `translateX(-${shift}px)`};
`;

const Button = styled.img`
  height: 30px;
  z-index: 100;
  top: 10px;

  position: absolute;
  cursor: pointer;
  display: none;
  background-color: red;

  @media ${({ theme }) => theme.device.tablet} {
    display: block;
  }
`;
export const ButtonPrev = styled(Button)`
  left: 90px;
  transform: rotateZ(180deg);
`;
export const ButtonNext = styled(Button)`
  right: 5px;
`;
