import { RobotStructure } from "../../types";
import {
  RobotState,
  loadRobotsActionCreator,
  robotReducer,
} from "./robotsSlice";

describe("Given a robotReducer reducer", () => {
  describe("When it received an empty list of robots and a loadRobots action with one robot", () => {
    test("Then it should show a list with one robot", () => {
      const currentRobotsState: RobotState = {
        robot: [],
      };

      const newRobot: RobotStructure[] = [
        {
          name: "Arturito",
          dateOfCreation: "1978-11-12",
          endurance: 45,
          speed: 59,
          imageUrl: "http: dsadasd.net",
        },
      ];

      const loadRobotsAction = loadRobotsActionCreator(newRobot);
      const newRobotState = robotReducer(currentRobotsState, loadRobotsAction);

      const expectedRobotState: RobotState = {
        ...currentRobotsState,
        robot: [...newRobot],
      };

      expect(newRobotState).toStrictEqual(expectedRobotState);
    });
  });
});
