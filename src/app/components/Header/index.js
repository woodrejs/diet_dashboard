import React from "react";
import styled from "styled-components";

import HeaderMenuBar from "./HeaderMenuBar";
import HeaderAccountBar from "./HeaderAccountBar";

//??? shadow blur ???
const Section = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
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

/*
.Header {
  position: absolute;
  left: -2px;
  top: 0px;
  width: 2564px;
  height: 82px;
  z-index: 194;
}
.CHALLENGE {
  font-size: 4.445px;
  font-family: "HelveticaNeueLTStd";
  color: rgb( 124, 124, 124 );
  line-height: 3.286;
  -moz-transform: matrix( 3.19425813069175, 0, 0, 3.14939491975006, 0, 0);
  -webkit-transform: matrix( 3.19425813069175, 0, 0, 3.14939491975006, 0, 0);
  position: absolute;
  left: 1162.938px;
  top: 33.342px;
  width: 91px;
  height: 12px;
  z-index: 193;
}
.RECIPES {
  font-size: 4.445px;
  font-family: "HelveticaNeueLTStd";
  color: rgb( 124, 124, 124 );
  line-height: 3.286;
  -moz-transform: matrix( 3.19425813069175, 0, 0, 3.14939491975006, 0, 0);
  -webkit-transform: matrix( 3.19425813069175, 0, 0, 3.14939491975006, 0, 0);
  position: absolute;
  left: 1067.938px;
  top: 33.342px;
  width: 63px;
  height: 12px;
  z-index: 192;
}
.DASHBOARD {
  font-size: 4.445px;
  font-family: "HelveticaNeueLTStd";
  color: rgb( 255, 128, 26 );
  line-height: 3.286;
  -moz-transform: matrix( 3.19425813069175, 0, 0, 3.14939491975006, 0, 0);
  -webkit-transform: matrix( 3.19425813069175, 0, 0, 3.14939491975006, 0, 0);
  position: absolute;
  left: 943.938px;
  top: 33.342px;
  width: 93px;
  height: 12px;
  z-index: 191;
}
.Olivia_Wilde {
  font-size: 4.763px;
  font-family: "HelveticaNeueLTStd";
  color: rgb( 124, 124, 124 );
  line-height: 3.067;
  -moz-transform: matrix( 3.19425813069175, 0, 0, 3.14939491975006, 0, 0);
  -webkit-transform: matrix( 3.19425813069175, 0, 0, 3.14939491975006, 0, 0);
  position: absolute;
  left: 1669.937px;
  top: 34.076px;
  width: 82px;
  height: 11px;
  z-index: 190;
}
.Layer_216 {
  background-image: url("images/Layer 216.png");
  position: absolute;
  left: 1626px;
  top: 26px;
  width: 36px;
  height: 36px;
  z-index: 189;
}
.Ellipse_1 {
  border-radius: 50%;
  background-color: rgb( 255, 255, 255 );
  box-shadow: 0px 1px 1px 0px rgb( 0, 0, 0 );
  position: absolute;
  left: 1627px;
  top: 21px;
  width: 32px;
  height: 32px;
  z-index: 188;
}
.Layer_149 {
  background-image: url("images/Layer 149.png");
  position: absolute;
  left: 911px;
  top: 0px;
  width: 1px;
  height: 79px;
  z-index: 186;
}
.Layer_15 {
  background-image: url("images/Layer 15.png");
  opacity: 0.439;
  position: absolute;
  left: 978px;
  top: 55px;
  width: 25px;
  height: 2px;
  z-index: 185;
}
.Layer_154 {
  background-image: url("images/Layer 154.png");
  position: absolute;
  left: 0px;
  top: 0px;
  width: 2564px;
  height: 82px;
  z-index: 184;
}

*/
