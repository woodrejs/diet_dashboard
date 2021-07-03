import styled from "styled-components";

export const Container = styled.div`
  width: 125px;
  height: 100%;
  position: relative;
`;
export const Cell = styled.div`
  height: 460px;
  padding-bottom: 2px;
  border-top: 2px solid ${({ theme }) => theme.colors.lightLighter};

  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CellBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CellText = styled.span`
  font-family: HelveticaNeueLTStd;
  font-weight: 200;
  font-size: 35px;
  line-height: 46px;
  text-transform: uppercase;
  color: #c2c2c2;

  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotateZ(180deg);
`;
export const CellIcon = styled.img`
  height: 32px;
  width: 32px;
  margin-top: 28px;
`;
export const Footer = styled.div`
  height: 70px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const FooterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FooterIcon = styled.img`
  height: 27px;
  width: 23px;
  margin-right: 13px;
`;
export const FooterText = styled.span`
  font-family: HelveticaNeueLTStd;
  font-weight: 400;
  font-size: 18px;
  line-height: 16px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.darkLightest};
`;
