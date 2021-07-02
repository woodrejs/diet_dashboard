import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 92px;
  border-bottom: ${({ last, theme }) => (last ? "unset" : `2px solid rgba(0,0,0,0.08)`)};

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.span`
  font-family: HelveticaNeueLTStd;
  font-weight: 200;
  font-size: 13px;
  line-height: 46px;
  color: ${({ theme }) => theme.colors.darkLighter};
  text-transform: uppercase;
`;
const SubText = styled(Text)`
  font-weight: 800;
  margin-right: 2px;
`;

const TimeColumnCell = ({ time, pm = false, last = false }) => {
  return (
    <Container last={last}>
      <SubText>{time}</SubText>
      <Text>{pm ? "pm" : "am"}</Text>
    </Container>
  );
};
export default TimeColumnCell;
