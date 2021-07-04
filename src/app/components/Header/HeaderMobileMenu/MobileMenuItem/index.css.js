import styled from "styled-components";

export const Container = styled.a`
  font-family: HelveticaNeueLTStd;
  font-weight: 800;
  font-size: 14px;
  line-height: 46px;
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};

  :hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;