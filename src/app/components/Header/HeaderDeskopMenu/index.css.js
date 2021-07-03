import styled from "styled-components";

export const Container = styled.div`
  height: 82px;
  width: 342px;
  margin-left: 118px;
  padding-left: 32px;
  letter-spacing: 0.4px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  border-left: 1px solid ${({ theme }) => theme.colors.light};

  @media ${({ theme }) => theme.device.tablet} {
    padding-left: 0;
    margin-left: 0;
    border-left: unset;
  }
  @media ${({ theme }) => theme.device.mobileLandscape} {
    width: unset;
  }
`;
