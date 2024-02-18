import settings from "@src/config/settings"
import sendOverSmtp from "./smtp-protocol"
import sendOverSes from "./ses-protocol"
export interface Mail {
  to: string[]
  cc?: string[]
  from: string
  html: string
  subject: string
}

export async function sendEmail(options: Mail) {
  if (settings.stage === 'dev') return sendOverSmtp(options)

  return sendOverSes(options)
}
