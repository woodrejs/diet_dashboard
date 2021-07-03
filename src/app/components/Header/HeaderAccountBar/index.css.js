import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  padding-bottom: 4px;

  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const Text = styled.span`
  font-family: HelveticaNeueLTStd;
  font-weight: 400;
  font-size: 15px;
  line-height: 46px;
  padding-right: 15px;
  padding-left: 9px;
  padding-top: 3px;
  letter-spacing: 0.3px;

  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.dark};
`;
export const Avatar = styled.img`
  width: 34px;
  height: 34px;
`;
export const Arrow = styled.img`
  width: 4px;
  height: 8px;
  padding-right: 2px;
  transform: rotateZ(90deg);
`;
