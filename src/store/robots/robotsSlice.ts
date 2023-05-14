import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RobotDataStructure } from "../../types";

export interface RobotState {
  robots: RobotDataStructure[];
}

const initialRobotState: RobotState = {
  robots: [],
};

const robotSlice = createSlice({
  name: "robot",
  initialState: initialRobotState,
  reducers: {
    loadRobots: (
      currentRobot,
      action: PayloadAction<RobotDataStructure[]>
    ): RobotState => ({
      ...currentRobot,
      robots: [...action.payload],
    }),
  },
});

export const { loadRobots: loadRobotsActionCreator } = robotSlice.actions;
export const robotReducer = robotSlice.reducer;
