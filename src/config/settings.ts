const settings = {
    get stage(): string {
      return process.env.STAGE || 'dev'
    },
    get port(): number {
      if (!process.env.PORT) {
        throw new Error('PORT environment variable is not defined')
      }
      return parseInt(process.env.PORT)
    },
    get smtpHost(): string | undefined {
      if (!process.env.SMTP_HOST) {
        throw new Error('SMTP_HOST environment variable is not defined')
      }
      return process.env.SMTP_HOST
    },
    get smtpPort(): string | undefined {
      if (!process.env.SMTP_PORT) {
        throw new Error('SMTP_PORT environment variable is not defined')
      }
      return process.env.SMTP_PORT
    },
    get smtpSecure(): boolean {
      return process.env.SMTP_SECURE === 'true'
    },
    get smtpUsername(): string {
      if (!process.env.SMTP_USERNAME) {
        throw new Error('SMTP_USERNAME environment variable is not defined')
      }
      return process.env.SMTP_USERNAME
    },
    get smtpPassword(): string {
      if (!process.env.SMTP_PASSWORD) {
        throw new Error('SMTP_PASSWORD environment variable is not defined')
      }
      return process.env.SMTP_PASSWORD
    },
  }
  
  export default settings