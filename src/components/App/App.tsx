import useApi from "../../hooks/useApi";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadRobotsActionCreator } from "../../store/robots/robotsSlice";
import RobotsList from "../RobotList/RobotsList";
import { RobotDataStructure } from "../../types";

const App = (): JSX.Element => {
  const { getRobots } = useApi();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const initialRobots = await getRobots();

      dispatch(loadRobotsActionCreator(initialRobots.robots));
    })();
  }, [dispatch, getRobots]);

  const robots = useAppSelector(
    (state): RobotDataStructure[] => state.robots.robots
  );
  return (
    <>
      <h1 className="title">FutuRobots</h1>
      <RobotsList robots={robots} />
    </>
  );
};

export default App;
