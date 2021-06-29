import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import AccountBar from "./AccountBar";
import { fifth } from "../../style/colors";

//??? shadow blur ???
const SectionStyled = styled.div`
  width: 100%;
  border-bottom: 1px solid ${fifth};

  -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.13);
  -moz-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.13);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.13);
`;

const ContainerStyled = styled.div`
  max-width: 1024px;
  width: 100%;
  height: 80px;
  padding: 0 23px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <SectionStyled>
      <ContainerStyled>
        <Menu />
        <AccountBar />
      </ContainerStyled>
    </SectionStyled>
  );
};
export default Header;
