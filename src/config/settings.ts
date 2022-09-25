const settings = {
    get stage(): string {
      return process.env.STAGE || 'dev'
    },
    get port(): number {
      if (!process.env.PORT) {
        throw new Error('PORT environment variable is not defined')
      }
      return parseInt(process.env.PORT)
    }
  }
  
  export default settings