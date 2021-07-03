import React from "react";
import { Section, Container } from "./index.css";

import HeaderDeskopMenu from "./HeaderDeskopMenu";
import HeaderMobileMenu from "./HeaderMobileMenu";
import HeaderAccountBar from "./HeaderAccountBar";

const Header = () => {
  return (
    <Section>
      <Container>
        <HeaderMobileMenu />
        <HeaderDeskopMenu />
        <HeaderAccountBar />
      </Container>
    </Section>
  );
};
export default Header;
