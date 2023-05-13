import { RobotStructure } from "../../types";
import RobotCardStyled from "./RobotCardStyled";

interface RobotCardProps {
  robot: RobotStructure;
}

const RobotCard = ({
  robot: { name, speed, endurance, dateOfCreation, imageUrl },
}: RobotCardProps): JSX.Element => {
  return (
    <RobotCardStyled>
      <span className="robot-card__birth">{dateOfCreation}</span>
      <img className="robot-card__image" src={imageUrl} alt={name} />
      <h2 className="robot-card__title">{name}</h2>
      <div className="robot-card__points">
        <span>{speed}</span>
        <span>{endurance}</span>
      </div>
    </RobotCardStyled>
  );
};

export default RobotCard;
