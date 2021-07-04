import styled from "styled-components";

const Button = styled.img`
  height: 30px;
  z-index: 100;
  top: 10px;

  position: absolute;
  cursor: pointer;
  display: none;
  transition: 0.2s ease-in;

  :hover {
    transform: scale(0.95);
  }

  @media ${({ theme }) => theme.device.tablet} {
    display: block;
  }
`;
export const ButtonPrev = styled(Button)`
  left: 90px;
`;
export const ButtonNext = styled(Button)`
  right: 5px;
`;
