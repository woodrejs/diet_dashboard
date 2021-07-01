import React from "react";
import styled from "styled-components";

import HeaderMenuBar from "./HeaderMenuBar";
import HeaderAccountBar from "./HeaderAccountBar";

//??? shadow blur ???
const Section = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lighter};
  background-color: ${({ theme }) => theme.colors.white};

  -webkit-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.13);
  -moz-box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.13);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.13);
`;
const Container = styled.div`
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
    <Section>
      <Container>
        <HeaderMenuBar />
        <HeaderAccountBar />
      </Container>
    </Section>
  );
};
export default Header;
