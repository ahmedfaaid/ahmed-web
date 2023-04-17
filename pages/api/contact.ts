import * as SibApiV3Sdk from '@sendinblue/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { Contact } from 'types';

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
apiInstance.setApiKey(
  SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
  process.env.SENDBLUE_API_KEY as string
);
let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

interface ContactReq extends NextApiRequest {
  body: Contact;
}

const email = process.env.EMAIL as string;

const handler = async (req: ContactReq, res: NextApiResponse) => {
  const { body } = req;

  if (req.method === 'POST') {
    if (!body.name || !body.subject || !body.email || !body.message) {
      return res.status(400).json({ message: 'Bad request' });
    }

    try {
      sendSmtpEmail = {
        ...sendSmtpEmail,
        to: [{ email }],
        sender: { name: body.name, email: body.email },
        subject: body.subject,
        htmlContent: `
          <html>
            <body>
              <h1>${body.subject}</h1>
              <p>${body.message}</p>
            </body>
          </html>
        `
      };

      await apiInstance.sendTransacEmail(sendSmtpEmail);
      return res.status(200).json({ message: 'Email sent' });
    } catch (error: any) {
      console.log({ error: JSON.stringify(error, null, 4) });
      return res.status(400).json({ message: error.message });
    }
  }

  return res.status(400).json({ message: 'Bad request' });
};

export default handler;
