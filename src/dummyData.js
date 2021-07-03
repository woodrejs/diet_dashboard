import { v4 as uuidv4 } from "uuid";

/* dummyData model
{
  currDay:'',
  days:[
    {
      id: uuidv4(),
      day:'',
      data:{
        highCarbon: bool,
        workoutCompleted:  bool,
        meals:[],
      } 
    }
  ]
}
*/
export default {
  currDay: "69",
  days: [
    {
      id: uuidv4(),
      day: "64",
      data: {
        highCarbon: false,
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
    },
    {
      id: uuidv4(),
      day: "65",
      data: {
        highCarbon: false,
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
    },
    {
      id: uuidv4(),
      day: "66",
      data: {
        highCarbon: true,
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
    },
    {
      id: uuidv4(),
      day: "67",
      data: {
        highCarbon: false,
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
    },
    {
      id: uuidv4(),
      day: "68",
      data: {
        highCarbon: false,
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
    },
    {
      id: uuidv4(),
      day: "69",
      data: {
        highCarbon: true,
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
    },
    {
      id: uuidv4(),
      day: "70",
      data: {},
    },
  ],
};
