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
  left: -40vw;
  z-index: 999;

  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.neutralLightest};

  @media ${({ theme }) => theme.device.mobileLandscape} {
    width: 60vw;
    left: -60vw;
  }
`;
export const MenuIcon = styled.img`
  height: 30px;
  width: 30px;

  display: none;
  cursor: pointer;

  @media ${({ theme }) => theme.device.mobileLandscape} {
    display: block;
  }
`;
export const MenuItem = styled.a`
  font-family: HelveticaNeueLTStd;
  font-weight: 800;
  font-size: 14px;
  line-height: 46px;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`;
export const MenuCloseIcon = styled.img`
  height: 20px;
  width: 20px;
  align-self: flex-end;
  cursor: pointer;
`;
