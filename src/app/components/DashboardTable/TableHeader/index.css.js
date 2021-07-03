import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;
export const Text = styled.span`
  font-family: HelveticaNeueLTStd;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;

  text-transform: uppercase;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.secondary : theme.colors.primary};
`;
