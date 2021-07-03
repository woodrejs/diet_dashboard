import styled from "styled-components";
export const Section = styled.div`
  width: 100%;
  padding: 50px 0;

  @media ${({ theme }) => theme.device.mobileLandscape} {
    padding: 25px 0;
  }
`;
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  padding: 0 23px;
  margin: 0 auto;

  display: flex;
  position: relative;

  @media ${({ theme }) => theme.device.tablet} {
    justify-content: space-between;
  }
  @media ${({ theme }) => theme.device.mobileLandscape} {
    flex-direction: column;
    align-items: center;
  }
`;
const Line = styled.div`
  width: 1px;
  background-color: ${({ theme }) => theme.colors.light};

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
  @media ${({ theme }) => theme.device.mobileLandscape} {
      width: 100%;
      height: 1px;
      margin: 0;
      display: block;
  }
`;
export const LineLeft = styled(Line)`
  margin-left: 45px;
  margin-right: 50px;
`;
export const LineRight = styled(Line)`
  margin-left: 57px;
  margin-right: 40px;
`;
