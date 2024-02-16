// import settings from "../../config/settings";
import { Request, Response } from "express";
import errorResponse from "./error_response";
import { NodeError } from "../erro_type";

type IExpressParams = {
  params: Record<string, unknown>
  query: Record<string, unknown>
  body: Record<string, unknown>
  req: Request
  res: Response
}

export default function defaultMiddleware<T>(
  useCase: (args: IExpressParams) => Promise<T>
) {
  return async (req: Request, res: Response): Promise<unknown> => {
    try {
      const { params, query, body } = req

      const result = await useCase({
        body,
        params,
        query,
        req,
        res,
      })

      res.json(result);
    } catch (error) {
      errorResponse(error as NodeError, res)
    }
    return res;
  };
}
