import { RobotState } from "../store/robots/robotsSlice";
import { RobotDataStructure } from "../types";

export const robotMock: RobotDataStructure = {
  _id: "1ab",
  name: "ChickenRobot",
  imageUrl: "casi",
  speed: 5,
  endurance: 1,
  dateOfCreation: "2011",
};

export const robotsMock: RobotDataStructure[] = [
  {
    _id: "1ab",
    name: "ChickenRobot",
    imageUrl: "casi",
    speed: 5,
    endurance: 1,
    dateOfCreation: "2011",
  },
  {
    _id: "2cd",
    name: "R2D2",
    imageUrl: "pongo",
    speed: 3,
    endurance: 3,
    dateOfCreation: "1978",
  },
  {
    _id: "3ef",
    name: "Mark zuckerberg",
    imageUrl: "foto",
    speed: 2,
    endurance: 2,
    dateOfCreation: "1980",
  },
];

export const robotStateMock: RobotState = {
  robots: [
    {
      _id: "1ab",
      name: "ChickenRobot",
      imageUrl: "casi",
      speed: 5,
      endurance: 1,
      dateOfCreation: "2011",
    },
    {
      _id: "2cd",
      name: "R2D2",
      imageUrl: "pongo",
      speed: 3,
      endurance: 3,
      dateOfCreation: "1978",
    },
    {
      _id: "3ef",
      name: "Mark zuckerberg",
      imageUrl: "foto",
      speed: 2,
      endurance: 2,
      dateOfCreation: "1980",
    },
  ],
};
