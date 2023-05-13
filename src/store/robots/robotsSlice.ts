import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RobotStructure } from "../../types";

export interface RobotState {
  robot: RobotStructure[];
}

const initialRobotState: RobotState = {
  robot: [],
};

const robotSlice = createSlice({
  name: "robot",
  initialState: initialRobotState,
  reducers: {
    loadRobots: (
      currentRobot,
      action: PayloadAction<RobotStructure[]>
    ): RobotState => ({
      ...currentRobot,
      robot: [...action.payload],
    }),
  },
});

export const { loadRobots: loadRobotsActionCreator } = robotSlice.actions;
export const robotReducer = robotSlice.reducer;
