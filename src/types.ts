export interface RobotStrucure {
  name: string;
  imageUrl: string;
  speed: number;
  endurance: number;
  dateOfCreation: string;
}

export interface RobotDataStructure extends RobotStrucure {
  id: string;
}
