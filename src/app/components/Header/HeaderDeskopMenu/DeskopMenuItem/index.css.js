import styled from "styled-components";

export const Container = styled.a`
  padding-bottom: 2px;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  text-decoration: none;

  @media ${({ theme }) => theme.device.mobileLandscape} {
    display: none;
  }
`;
export const Text = styled.span`
  font-family: HelveticaNeueLTStd;
  font-weight: 800;
  font-size: 14px;
  line-height: 46px;
  text-transform: uppercase;
  color: ${({ active, theme }) => (active ? theme.colors.secondary : theme.colors.dark)};

  ${Container}:hover & {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
export const Line = styled.div`
  width: 25px;
  height: 2px;
  bottom: 8px;

  position: absolute;
  background-color: ${({ theme }) => theme.colors.secondary};
  transition: 0.2s;

  ${Container}:hover & {
    transform: scale(0);
  }
`;
