export default class ForbiddenError extends Error {
    public status = 403
    constructor(message?: string) {
      super(message || 'Forbidden error')
      Object.setPrototypeOf(this, ForbiddenError.prototype)
      this.name = 'ForbiddenError'
      this.stack = new Error().stack
    }
  }
  