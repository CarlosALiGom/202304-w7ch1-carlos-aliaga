import { rest } from "msw";
import useApi from "../hooks/useApi";
import robotsMock from "./robotsMock";

const handlers = [
  rest.get(`${useApi}robots`, (_req, res, ctx) => {
    res(ctx.status(200), ctx.json(robotsMock));
  }),
];

export default handlers;
