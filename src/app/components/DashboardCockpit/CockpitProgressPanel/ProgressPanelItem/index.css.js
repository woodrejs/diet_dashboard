import styled from "styled-components";

export const Container = styled.div`
  z-index: 10;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Sphere = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  margin-bottom: 5px;
  border: 2px solid
    ${({ isCompleted, theme }) =>
      isCompleted ? theme.colors.primary : theme.colors.light};

  background-color: ${({ isCompleted, theme }) =>
    isCompleted ? theme.colors.primary : theme.colors.light};
  background-color: ${({ current, theme }) => current && theme.colors.white};
`;
export const Label = styled.span`
  font-family: HelveticaNeueLTStd;
  font-weight: 400;
  font-size: 9px;
  line-height: 100%;
  color: ${({ theme }) => theme.colors.darkLighter};
`;
