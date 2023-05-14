import { rest } from "msw";
import robotsMock from "./robotsMock";
import { apiUrl } from "../hooks/useApi";

const handlers = [
  rest.get(`${apiUrl}robots`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(robotsMock));
  }),
];

export default handlers;
