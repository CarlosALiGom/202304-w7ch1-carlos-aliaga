export interface RobotStructure {
  name: string;
  imageUrl: string;
  speed: number;
  endurance: number;
  dateOfCreation: string;
}

export interface RobotDataStructure extends RobotStructure {
  _id: string;
}
