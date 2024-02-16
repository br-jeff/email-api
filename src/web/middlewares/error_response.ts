
import { Response } from 'express'
import settings from '../../config/settings'
import { NodeError } from '../erro_type';


export default function errorResponse(error: NodeError , response: Response): Response {
    const stackTrace = settings.stage === "prod" ? null : error.stack ? error.stack : null;
    if (error.status && error.message) {
      response
        .status(error.status)
        .json({ errorMessage: error.message, stackTrace });
    } else {
      response
        .status(500)
        .json({ errorMessage: "Internal Server Error", stackTrace });
    }
    return response
}
