import settings from '@src/config/settings'
import assert from 'assert'

import AWS from 'aws-sdk'
import { Mail } from './email'

const ses = new AWS.SES({ region: settings.awsRegion })

export default async function sendOverSes({
  to: ToAddresses,
  cc: CcAddresses,
  from: FromAddress,
  html: message,
  subject,
}: Mail) {
  assert(ToAddresses, 'to is required')
  assert(FromAddress, 'from is required')

  const Source = FromAddress
  const Destination = {
    ToAddresses,
    CcAddresses,
  }

  const Message = {
    Body: {
      Html: {
        Data: message,
      },
    },
    Subject: {
      Data: subject,
    },
  }

  return ses
    .sendEmail({
      Destination,
      Source,
      Message,
    })
    .promise()
}
