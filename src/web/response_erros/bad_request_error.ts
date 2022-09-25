export default class BadRequestError extends Error {
  public status = 400
  constructor(message?: string) {
      super(message || 'Bad request error')
      Object.setPrototypeOf(this, BadRequestError.prototype)
      this.name = 'BadRequestError'
      this.stack = new Error().stack
    }
  }
