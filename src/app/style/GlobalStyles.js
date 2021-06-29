import { createGlobalStyle } from "styled-components";
import { background } from "./colors";
import HelveticaNeueLTStdLtWOFF from "../fonts/HelveticaNeueLTStd/HelveticaNeueLTStd-Lt.woff";
import HelveticaNeueLTStdLtWOFF2 from "../fonts/HelveticaNeueLTStd/HelveticaNeueLTStd-Lt.woff2";
import HelveticaNeueLTStdRomanWOFF from "../fonts/HelveticaNeueLTStd/HelveticaNeueLTStd-Roman.woff";
import HelveticaNeueLTStdRomanWOFF2 from "../fonts/HelveticaNeueLTStd/HelveticaNeueLTStd-Roman.woff2";
import HelveticaNeueLTStdMdWOFF from "../fonts/HelveticaNeueLTStd/HelveticaNeueLTStd-Md.woff";
import HelveticaNeueLTStdMdWOFF2 from "../fonts/HelveticaNeueLTStd/HelveticaNeueLTStd-Md.woff2";
import HelveticaNeueLTStdBdWOFF from "../fonts/HelveticaNeueLTStd/HelveticaNeueLTStd-Bd.woff";
import HelveticaNeueLTStdBdWOFF2 from "../fonts/HelveticaNeueLTStd/HelveticaNeueLTStd-Bd.woff2";

const GloblStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${background};
  }

  @font-face {
        font-family: 'HelveticaNeueLTStd';
        src: local('HelveticaNeueLTStd'), local('HelveticaNeueLTStd'),
        url(${HelveticaNeueLTStdLtWOFF}) format('woff'),
        url(${HelveticaNeueLTStdLtWOFF2}) format('woff2');
        font-weight: 200;
        font-style: thin;
    } 
  @font-face {
        font-family: 'HelveticaNeueLTStd';
        src: local('HelveticaNeueLTStd'), local('HelveticaNeueLTStd'),
        url(${HelveticaNeueLTStdRomanWOFF}) format('woff'),
        url(${HelveticaNeueLTStdRomanWOFF2}) format('woff2');
        font-weight: 400;
        font-style: normal;
    } 
  @font-face {
        font-family: 'HelveticaNeueLTStd';
        src: local('HelveticaNeueLTStd'), local('HelveticaNeueLTStd'),
        url(${HelveticaNeueLTStdMdWOFF}) format('woff'),
        url(${HelveticaNeueLTStdMdWOFF2}) format('woff2');
        font-weight: 600;
        font-style: medium;
    } 
  @font-face {
        font-family: 'HelveticaNeueLTStd';
        src: local('HelveticaNeueLTStd'), local('HelveticaNeueLTStd'),
        url(${HelveticaNeueLTStdBdWOFF}) format('woff'),
        url(${HelveticaNeueLTStdBdWOFF2}) format('woff2');
        font-weight: 800;
        font-style: bold;
    } 



`;

export default GloblStyles;
