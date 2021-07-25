const aws = require('aws-sdk')
const ses = new aws.SES({ region: 'us-east-2' })

exports.handler = async (event) => {
  const {
    email,
    quote: { author, text }
  } = event
  const params = {
    Destination: {
      ToAddresses: [email]
    },
    Message: {
      Body: {
        Text: { Data: `${author}:${text}` }
      },
      Subject: { Data: 'Quote of the day' }
    },
    Source: 'yevhen_horbunkov@epam.com'
  }

  return ses.sendEmail(params).promise()
}
