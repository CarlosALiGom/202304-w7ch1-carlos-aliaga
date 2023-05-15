import useApi from "../../hooks/useApi";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadRobotsActionCreator } from "../../store/robots/robotsSlice";
import RobotsList from "../RobotList/RobotsList";
import AppStyled from "./AppStyled";
const App = (): JSX.Element => {
  const { getRobots } = useApi();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const initialRobots = await getRobots();

      dispatch(loadRobotsActionCreator(initialRobots));
    })();
  }, [dispatch, getRobots]);

  const robots = useAppSelector((state) => state.robots.robots);
  return (
    <AppStyled>
      <h1 className="title">Roborama</h1>
      <RobotsList robots={robots} />
    </AppStyled>
  );
};

export default App;
