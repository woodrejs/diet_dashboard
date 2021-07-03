import React from "react";
import { Container, ContentBox, Text, Triangle } from "./index.css";

const TimeColumnFooter = ({ title }) => {
  return (
    <Container>
      <ContentBox>
        <Text>{title}</Text>
        <Triangle />
      </ContentBox>
    </Container>
  );
};

export default TimeColumnFooter;
