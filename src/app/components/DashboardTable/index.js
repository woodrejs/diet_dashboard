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
    workoutCompleted: true,
    meals: [
      {
        id: uuidv4(),
        text: "Bod•ē Shake",
        isCompleted: true,
        isShake: true,
      },
      {
        id: uuidv4(),
        text: "Ham and Swiss Roll Ups",
        isCompleted: true,
        isShake: false,
      },
      {
        id: uuidv4(),
        text: "Turkey Melt",
        isCompleted: true,
        isShake: false,
      },
      {
        id: uuidv4(),
        text: "Bod•ē Burn with Mozzarella and Tomato Slices",
        isCompleted: true,
        isShake: false,
      },
      {
        id: uuidv4(),
        text: "Turkey Melt",
        isCompleted: false,
        isShake: false,
      },
    ],
  },
  {
    id: uuidv4(),
    day: "65",
    workoutCompleted: true,
    meals: [
      {
        id: uuidv4(),
        text: "Bod•ē Shake",
        isCompleted: false,
        isShake: true,
      },
      {
        id: uuidv4(),
        text: "Ham and Swiss Roll Ups",
        isCompleted: false,
        isShake: false,
      },
      {
        id: uuidv4(),
        text: "Turkey Melt",
        isCompleted: false,
        isShake: false,
      },
      {
        id: uuidv4(),
        text: "Bod•ē Burn with Mozzarella and Tomato Slices",
        isCompleted: false,
        isShake: false,
      },
      {
        id: uuidv4(),
        text: "Turkey Melt",
        isCompleted: false,
        isShake: false,
      },
    ],
  },
  {
    id: uuidv4(),
    day: "66",
    workoutCompleted: false,
    meals: [
      {
        id: uuidv4(),
        text: "Bod•ē Shake",
        isCompleted: false,
        isShake: true,
      },
      {
        id: uuidv4(),
        text: "Grilled Steak (HC)",
        isCompleted: false,
        isShake: false,
      },
      {
        id: uuidv4(),
        text: "Bod•ē Shake",
        isCompleted: false,
        isShake: true,
      },
      {
        id: uuidv4(),
        text: "Bod•ē Burn and Whole-Wheat English Muffin with Butter Spray",
        isCompleted: false,
        isShake: false,
      },
      {
        id: uuidv4(),
        text: "Garlic Lime Chicken (HC)",
        isCompleted: false,
        isShake: false,
      },
    ],
  },
  {
    id: uuidv4(),
    day: "67",
    workoutCompleted: false,
    meals: [
      {
        id: uuidv4(),
        text: "Bod•ē Shake",
        isCompleted: false,
        isShake: true,
      },
      {
        id: uuidv4(),
        text: "Ham and Swiss Roll Ups",
        isCompleted: false,
        isShake: false,
      },
      {
        id: uuidv4(),
        text: "Turkey Melt",
        isCompleted: false,
        isShake: false,
      },
      {
        id: uuidv4(),
        text: "Bod•ē Burn with Mozzarella and Tomato Slices",
        isCompleted: false,
        isShake: false,
      },
      {
        id: uuidv4(),
        text: "Turkey Melt",
        isCompleted: false,
        isShake: false,
      },
    ],
  },
  {
    id: uuidv4(),
    day: "68",
    workoutCompleted: false,
    meals: [
      {
        id: uuidv4(),
        text: "Bod•ē Shake",
        isCompleted: false,
        isShake: true,
      },
      {
        id: uuidv4(),
        text: "Ham and Swiss Roll Ups",
        isCompleted: false,
        isShake: false,
      },
      {
        id: uuidv4(),
        text: "Bod•ē Shake",
        isCompleted: false,
        isShake: true,
      },
      {
        id: uuidv4(),
        text: "Bod•ē Burn with Mozzarella and Tomato Slices",
        isCompleted: false,
        isShake: false,
      },
      {
        id: uuidv4(),
        text: "Turkey Melt",
        isCompleted: false,
        isShake: false,
      },
    ],
  },
  {
    id: uuidv4(),
    day: "69",
    workoutCompleted: false,
    meals: [
      {
        id: uuidv4(),
        text: "Bod•ē Shake",
        isCompleted: false,
        isShake: true,
      },
      {
        id: uuidv4(),
        text: "Grilled Steak (HC)",
        isCompleted: false,
        isShake: false,
      },
      {
        id: uuidv4(),
        text: "Bod•ē Shake",
        isCompleted: false,
        isShake: true,
      },
      {
        id: uuidv4(),
        text: "Bod•ē Burn and Whole-Wheat English Muffin with Butter Spray",
        isCompleted: false,
        isShake: false,
      },
      {
        id: uuidv4(),
        text: "Garlic Lime Chicken (HC)",
        isCompleted: false,
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
const dummyDay = "65";

const DashboardTable = () => {
  return (
    <Section>
      <Container>
        <Table>
          <TableTimeColumn />

          {dummyData.map(({ id, meals, day, workoutCompleted }) =>
            meals.length ? (
              <TableMultiPartColumn
                key={id}
                data={meals}
                day={day}
                workoutCompleted={workoutCompleted}
                isActive={dummyDay === day ? true : false}
              />
            ) : (
              <TableSinglePartColumn
                key={id}
                day={day}
                isActive={dummyDay === day ? true : false}
              />
            )
          )}
        </Table>
      </Container>
    </Section>
  );
};
export default DashboardTable;
