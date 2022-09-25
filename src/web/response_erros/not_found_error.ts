export default class NotFoundError extends Error {
    public status = 404
    constructor(message?: string) {
      super(message || 'Not found error')
      Object.setPrototypeOf(this, NotFoundError.prototype)
      this.name = 'NotFoundError'
      this.stack = new Error().stack
    }
  }
