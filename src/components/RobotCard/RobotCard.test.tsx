import { render, screen } from "@testing-library/react";
import RobotCard from "./RobotCard";
import { RobotStructure } from "../../types";

describe("Given a RobotCard component", () => {
  describe("When it received a robot with the heading 'Arturito'", () => {
    test("Then it should show a heading with the name 'Arturito'", () => {
      const robotMock: RobotStructure = {
        name: "Arturito",
        speed: 45,
        dateOfCreation: "1972-11-12",
        endurance: 50,
        imageUrl: "adasdafasd.img",
      };

      render(<RobotCard robot={robotMock} />);

      const heading = screen.getByRole("heading", {
        name: robotMock.name,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
