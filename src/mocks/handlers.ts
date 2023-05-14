import { rest } from "msw";
import { apiUrl } from "../hooks/useApi.js";
import { robotStateMock } from "./robotsMock.js";

const handlers = [
  rest.get(`${apiUrl}/robots`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(robotStateMock));
  }),
];

export default handlers;
