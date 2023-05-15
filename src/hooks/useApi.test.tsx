import { renderHook } from "@testing-library/react";
import { RobotDataStructure } from "../types";
import useApi from "./useApi.js";
import { robotsMock } from "../mocks/robotsMock.js";

describe("Given a useApi custom hook function", () => {
  describe("When it's called with a getRobots function", () => {
    test("Then it should return a collection of three robots", async () => {
      const expectedRobots: RobotDataStructure[] = robotsMock;

      const {
        result: {
          current: { getRobots },
        },
      } = renderHook(() => useApi());

      const robots = await getRobots();

      expect(robots.robots).toStrictEqual(expectedRobots);
    });
  });
});
