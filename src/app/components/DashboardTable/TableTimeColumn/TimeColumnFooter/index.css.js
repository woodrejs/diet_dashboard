import styled from "styled-components";

export const Container = styled.div`
  height: 68px;

  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
export const ContentBox = styled.div`
  height: 35px;
  width: 100%;
  padding-bottom: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid rgba(0, 0, 0, 0.08);
`;
export const Text = styled.span`
  font-family: HelveticaNeueLTStd;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;

  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.darkLighter};
  letter-spacing: 0.8px;
`;
export const Triangle = styled.div`
  width: 0;
  height: 0;
  margin-left: 5px;

  border-style: solid;
  border-width: 2.5px 0 2.5px 3px;
  border-color: transparent transparent transparent
    ${({ theme }) => theme.colors.darkLighter};
  line-height: 0px;
  _border-color: #000000 #000000 #000000 #007bff;
  _filter: progid:DXImageTransform.Microsoft.Chroma(color='#000000');
`;