import { rest } from "msw";
import { apiUrl } from "../hooks/useApi.js";
import { robotsMock } from "./robotsMock.js";

const handlers = [
  rest.get(`${apiUrl}/robots`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(robotsMock));
  }),
];

export default handlers;
