// pages/api/sendEmail.ts
import {NextApiRequest, NextApiResponse} from 'next';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

const sendEmail = async (req: NextApiRequest, res: NextApiResponse, toEmail: string, fromEmail: string) => {
  const {name, email, message} = req.body;
  const emailMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

  const msg = {
    to: toEmail,
    from: fromEmail,
    subject: `New message from ${name}`,
    text: emailMessage,
  };

  try {
    await sgMail.send(msg);
    res.send({
      success: true,
      message: 'Thanks for contacting me. I will get back to you shortly',
    });
  } catch (error: any) {
    if (error.response) {
      console.error(error.response.body)
    }

    res.status(500).send({
      success: false,
      message: 'Something went wrong while sending the email. Try again later',
    });
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    if (process.env.TO_EMAIL && process.env.FROM_EMAIL) {
      await sendEmail(req, res, process.env.TO_EMAIL, process.env.FROM_EMAIL);
    } else {
      res.status(500).send({
        success: false,
        message: 'Something went wrong while sending the email. Try again later',
      });
    }

  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}