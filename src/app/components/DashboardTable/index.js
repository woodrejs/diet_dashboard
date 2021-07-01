import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import TableTimeColumn from "./TableTimeColumn";
import TableSinglePartColumn from "./TableSinglePartColumn";
import TableMultiPartColumn from "./TableMultiPartColumn";
import mask_img from "./mask_img.jpg";

const Section = styled.div`
  width: 100%;
  height: 580px;
  margin-bottom: 20vh;
`;
const Container = styled.div`
  max-width: 1024px;
  height: 100%;
  width: 100%;
  padding: 0 23px;
  margin: 0 auto;
  display: flex;
`;
const Table = styled.div`
  width: 100%;
  display: flex;

  background-image: url(${mask_img});
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
`;

const dummyData = [
  {
    id: uuidv4(),
    day: "64",
    meals: [
      {
        id: uuidv4(),
        title: "Bod•ē Shake",
        completed: true,
        isShake: true,
      },
      {
        id: uuidv4(),
        title: "Ham and Swiss Roll Ups",
        completed: true,
        isShake: false,
      },
      {
        id: uuidv4(),
        title: "Turkey Melt",
        completed: true,
        isShake: false,
      },
      {
        id: uuidv4(),
        title: "Bod•ē Burn with Mozzarella and Tomato Slices",
        completed: true,
        isShake: false,
      },
      {
        id: uuidv4(),
        title: "Turkey Melt",
        completed: false,
        isShake: false,
      },
    ],
  },
  {
    id: uuidv4(),
    day: "65",
    meals: [
      {
        id: uuidv4(),
        title: "Bod•ē Shake",
        completed: false,
        isShake: true,
      },
      {
        id: uuidv4(),
        title: "Ham and Swiss Roll Ups",
        completed: false,
        isShake: false,
      },
      {
        id: uuidv4(),
        title: "Turkey Melt",
        completed: false,
        isShake: false,
      },
      {
        id: uuidv4(),
        title: "Bod•ē Burn with Mozzarella and Tomato Slices",
        completed: false,
        isShake: false,
      },
      {
        id: uuidv4(),
        title: "Turkey Melt",
        completed: false,
        isShake: false,
      },
    ],
  },
  {
    id: uuidv4(),
    day: "66",
    meals: [
      {
        id: uuidv4(),
        title: "Bod•ē Shake",
        completed: false,
        isShake: true,
      },
      {
        id: uuidv4(),
        title: "Grilled Steak (HC)",
        completed: false,
        isShake: false,
      },
      {
        id: uuidv4(),
        title: "Bod•ē Shake",
        completed: false,
        isShake: true,
      },
      {
        id: uuidv4(),
        title: "Bod•ē Burn and Whole-Wheat English Muffin with Butter Spray",
        completed: false,
        isShake: false,
      },
      {
        id: uuidv4(),
        title: "Garlic Lime Chicken (HC)",
        completed: false,
        isShake: false,
      },
    ],
  },
  {
    id: uuidv4(),
    day: "67",
    meals: [
      {
        id: uuidv4(),
        title: "Bod•ē Shake",
        completed: false,
        isShake: true,
      },
      {
        id: uuidv4(),
        title: "Ham and Swiss Roll Ups",
        completed: false,
        isShake: false,
      },
      {
        id: uuidv4(),
        title: "Turkey Melt",
        completed: false,
        isShake: false,
      },
      {
        id: uuidv4(),
        title: "Bod•ē Burn with Mozzarella and Tomato Slices",
        completed: false,
        isShake: false,
      },
      {
        id: uuidv4(),
        title: "Turkey Melt",
        completed: false,
        isShake: false,
      },
    ],
  },
  {
    id: uuidv4(),
    day: "68",
    meals: [
      {
        id: uuidv4(),
        title: "Bod•ē Shake",
        completed: false,
        isShake: true,
      },
      {
        id: uuidv4(),
        title: "Ham and Swiss Roll Ups",
        completed: false,
        isShake: false,
      },
      {
        id: uuidv4(),
        title: "Bod•ē Shake",
        completed: false,
        isShake: true,
      },
      {
        id: uuidv4(),
        title: "Bod•ē Burn with Mozzarella and Tomato Slices",
        completed: false,
        isShake: false,
      },
      {
        id: uuidv4(),
        title: "Turkey Melt",
        completed: false,
        isShake: false,
      },
    ],
  },
  {
    id: uuidv4(),
    day: "69",
    meals: [
      {
        id: uuidv4(),
        title: "Bod•ē Shake",
        completed: false,
        isShake: true,
      },
      {
        id: uuidv4(),
        title: "Grilled Steak (HC)",
        completed: false,
        isShake: false,
      },
      {
        id: uuidv4(),
        title: "Bod•ē Shake",
        completed: false,
        isShake: true,
      },
      {
        id: uuidv4(),
        title: "Bod•ē Burn and Whole-Wheat English Muffin with Butter Spray",
        completed: false,
        isShake: false,
      },
      {
        id: uuidv4(),
        title: "Garlic Lime Chicken (HC)",
        completed: false,
        isShake: false,
      },
    ],
  },
  {
    id: uuidv4(),
    day: "70",
    meals: [],
  },
];

const DashboardTable = () => {
  return (
    <Section>
      <Container>
        <Table>
          <TableTimeColumn />

          <TableMultiPartColumn />
          <TableMultiPartColumn />
          <TableMultiPartColumn />
          <TableMultiPartColumn />
          <TableMultiPartColumn />
          <TableMultiPartColumn />

          <TableSinglePartColumn />
        </Table>
      </Container>
    </Section>
  );
};
export default DashboardTable;
