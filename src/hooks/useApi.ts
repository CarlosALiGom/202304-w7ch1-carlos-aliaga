import axios from "axios";
import { useCallback } from "react";

export const apiUrl = import.meta.env.VITE_APP_API_URL;

const useApi = () => {
  const getRobots = useCallback(async () => {
    const {
      data: { robots },
    } = await axios.get(`${apiUrl}/robots`);
    return robots;
  }, []);

  return { getRobots };
};

export default useApi;
