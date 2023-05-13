import { RobotStructure } from "../../types";

interface RobotCardProps {
  robot: RobotStructure;
}

const RobotCard = ({
  robot: { name, speed, endurance, dateOfCreation },
}: RobotCardProps): JSX.Element => {
  return (
    <>
      <span>{dateOfCreation}</span>
      <h2>{name}</h2>
      <div>
        <span>{speed}</span>
        <span>{endurance}</span>
      </div>
    </>
  );
};

export default RobotCard;
