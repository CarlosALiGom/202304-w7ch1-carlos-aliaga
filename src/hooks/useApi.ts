import axios from "axios";
import { useCallback } from "react";
import { RobotState } from "../store/robots/robotsSlice";

export const apiUrl = import.meta.env.VITE_APP_API_URL;

const useApi = () => {
  const getRobots = useCallback(async (): Promise<RobotState> => {
    const { data: robots } = await axios.get<RobotState>(`${apiUrl}/robots`);
    return robots;
  }, []);

  return { getRobots };
};

export default useApi;
