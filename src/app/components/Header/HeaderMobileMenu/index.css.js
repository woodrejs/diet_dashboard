import styled from "styled-components";

export const Container = styled.div`
  display: none;

  @media ${({ theme }) => theme.device.mobileLandscape} {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;
export const MenuBox = styled.div`
  height: 100vh;
  width: 40vw;
  padding: 20px;
  top: 0;
  left: 0;
  transform: ${({ open }) => `translateX(${open ? 0 : "-40vw"})`};
  z-index: 999;
  transition: 0.3s ease-in-out;

  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.neutralLightest};

  @media ${({ theme }) => theme.device.mobileLandscape} {
    width: 60vw;
    transform: ${({ open }) => `translateX(${open ? 0 : "-60vw"})`};
  }
`;
export const MenuIcon = styled.img`
  height: 30px;
  width: 30px;

  display: none;
  cursor: pointer;
  transition: 0.2s ease-in;

  :hover {
    transform: scale(1.08);
  }

  @media ${({ theme }) => theme.device.mobileLandscape} {
    display: block;
  }
`;
export const MenuCloseIcon = styled.img`
  height: 20px;
  width: 20px;
  transition: 0.2s ease-in;
  align-self: flex-end;
  cursor: pointer;

  :hover {
    transform: scale(1.08);
  }
`;
