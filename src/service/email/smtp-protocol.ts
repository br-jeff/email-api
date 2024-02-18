import settings from '@src/config/settings'
import NodeMailer, { SendMailOptions } from 'nodemailer'
import { Mail } from './email'


const DEFAULT_HOST = 'localhost'
const DEFAULT_PORT = 1025

export default async function sendOverSmtp(options: Mail) {
  const host = settings.smtpHost || DEFAULT_HOST
  const port = settings.smtpPort
    ? parseInt(settings.smtpPort, 10)
    : DEFAULT_PORT
  const secure = settings.smtpSecure
  const auth = {
    user: settings.smtpUsername,
    pass: settings.smtpPassword,
  }

  const transporter = NodeMailer.createTransport({
    host,
    port,
    secure,
    auth,
  })

  const mailOptions: SendMailOptions = {
    ...options,
    from: options.from,
  }

  transporter.verify(error => error && console.error(error))
  return transporter.sendMail(mailOptions)
}
