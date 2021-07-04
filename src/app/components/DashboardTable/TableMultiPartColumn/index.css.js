import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: ${({ width }) => `${width}px`};

  position: relative;
  border-right: 2px solid ${({ theme }) => theme.colors.lightLighter};
`;
