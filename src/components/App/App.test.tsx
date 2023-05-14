import { screen } from "@testing-library/react";
import App from "./App.js";
import renderWithProviders from "../../utils/testUtils.js";
import { robotStateMock } from "../../mocks/robotsMock.js";
import { RobotState } from "../../store/robots/robotsSlice";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show the text 'FutuRobots'", () => {
      const expectedText = /FutuRobots/i;
      const mockedRobots: RobotState = robotStateMock;

      renderWithProviders(<App />, { robots: mockedRobots });

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
