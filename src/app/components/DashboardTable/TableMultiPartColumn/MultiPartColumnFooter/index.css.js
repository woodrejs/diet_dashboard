import styled from "styled-components";
export const Container = styled.div`
  height: 70px;
  width: calc(100% + 2px);
  border-right: 2px solid rgba(0, 0, 0, 0.08);
`;
export const TextBox = styled.div`
  height: 35px;
  width: 100%;
  padding-left: 2px;
  padding-bottom: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Text = styled.span`
  font-family: HelveticaNeueLTStd;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.darkLighter}; ;
`;
export const ButtonBox = styled.div`
  height: 35px;
  width: 100%;
  padding: 0 0 4px 2px;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  border-top: 2px solid rgba(0, 0, 0, 0.08);

  :hover {
    background-color: ${({ theme }) => theme.colors.darkLighter};
  }
`;
export const Button = styled.img`
  height: 14px;
  width: 28px;

  ${ButtonBox}:hover & {
    transform: scale(1.05);
  }
`;
export const CheckIcon = styled.img`
  right: 32px;
  position: absolute;
`;
