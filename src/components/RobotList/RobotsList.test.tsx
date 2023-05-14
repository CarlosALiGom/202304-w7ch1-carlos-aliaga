import { render, screen } from "@testing-library/react";
import Robotslist from "./RobotsList";
import robotsMock from "../../mocks/mocks";

describe("Given a RobotsList component", () => {
  describe("When its rendered with a robots list", () => {
    test("Then it should an image with and alt text 'ChickenRobot'", () => {
      const expectedAltText = "ChickenRobot";

      render(<Robotslist robots={robotsMock} />);

      const movieAltText = screen.getByAltText(expectedAltText);

      expect(movieAltText).toBeInTheDocument();
    });
  });
});
