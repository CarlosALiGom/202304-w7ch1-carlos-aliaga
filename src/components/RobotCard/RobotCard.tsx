import { RobotDataStructure } from "../../types";
import RobotCardStyled from "./RobotCardStyled";

interface RobotCardProps {
  robot: RobotDataStructure;
}

const RobotCard = ({ robot }: RobotCardProps): JSX.Element => {
  return (
    <RobotCardStyled>
      <span className="robot-card__birth">{robot.dateOfCreation}</span>
      <img
        className="robot-card__image"
        src={robot.imageUrl}
        alt={robot.name}
      />
      <h2 className="robot-card__title">{robot.name}</h2>
      <div className="robot-card__points">
        <span>{robot.speed}</span>
        <span>{robot.endurance}</span>
      </div>
    </RobotCardStyled>
  );
};

export default RobotCard;
