/* eslint-disable @typescript-eslint/no-unused-vars */
import { describe, expect, test } from '@jest/globals';
import { IExpressParams } from "src/interfaces/express-params";
import defaultMiddleware from 'src/web/middlewares/default_middeware';
import ForbiddenError from "../../src/web/response_erros/forbidden_error"

describe.only('Should test default middleware', () => {
    test('should return Hello World', async () => {

      async function teste (_ : IExpressParams) {
        throw new ForbiddenError('')
       }

       const promise = defaultMiddleware(teste)
      expect(await promise).rejects.toThrow(ForbiddenError)
    })
})
