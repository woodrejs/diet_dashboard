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
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
`;


