import styled from "styled-components";

export const Container = styled.div`
  height: 92px;
  border-bottom: ${({ last, theme }) => (last ? "unset" : `2px solid rgba(0,0,0,0.08)`)};

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Text = styled.span`
  font-family: HelveticaNeueLTStd;
  font-weight: 200;
  font-size: 13px;
  line-height: 46px;

  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.darkLighter};
`;
export const SubText = styled(Text)`
  margin-right: 2px;
  font-weight: 800;
`;
