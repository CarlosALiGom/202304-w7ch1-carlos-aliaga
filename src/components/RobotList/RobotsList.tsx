import { RobotDataStructure } from "../../types";
import RobotCard from "../RobotCard/RobotCard";
import RobotsListStyled from "./RobotsListStyled";

interface RobotsListProps {
  robots: RobotDataStructure[];
}

const Robotslist = ({ robots }: RobotsListProps): JSX.Element => {
  return (
    <RobotsListStyled>
      {robots.map((robot) => (
        <li key={robot._id} className="Robot-card">
          <RobotCard robot={robot} />
        </li>
      ))}
    </RobotsListStyled>
  );
};

export default Robotslist;
