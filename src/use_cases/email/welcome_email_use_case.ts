import { Mail, sendEmail } from "@src/service/email/email"
import { getEmailHtml } from "@src/utils/get-email-template"

type WelcomeUseCaseType = {
  body: { username: string, emailFrom: string, emailTo: string },
  req: Express.Request,
  res: Express.Response,
}

export default async function welcomeEmailUseCase({
  body,
}: WelcomeUseCaseType ): Promise<void> {
  const { emailFrom, emailTo } = body
  const html = await getEmailHtml(body, 'src/templates/welcome.html')

  const email: Mail = {
    html,
    from: emailFrom,
    subject: 'Email Company - Welcome to our system',
    to: [emailTo],
  }

  console.log({ email })
  try {
    await sendEmail(email)
  } catch (err) {
    console.error('Erro while try to send Email', err)
    throw new Error('Erro while try to send Email')
  }
}
