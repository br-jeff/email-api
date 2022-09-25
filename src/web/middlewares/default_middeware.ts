// import settings from "../../config/settings";
import { Request, Response } from "express";
import { IExpressParams } from "src/interfaces/express-params";
import errorResponse from "./error_response";
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
    } catch (error: unknown) {
      errorResponse(error, res)
    }
    return res;
  };
}
