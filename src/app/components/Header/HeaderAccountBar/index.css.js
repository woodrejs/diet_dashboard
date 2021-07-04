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
  padding: 3px 10px 0 9px;
  letter-spacing: 0.3px;

  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.dark};

  ${Container}:hover & {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
export const Avatar = styled.img`
  transition: 0.2s ease-in;

  ${Container}:hover & {
    transform: scale(1.08);
  }
`;
export const Arrow = styled.img`
  padding-right: 2px;
  transform: rotateZ(90deg);
`;
