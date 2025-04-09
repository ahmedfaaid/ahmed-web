import EmailTemplate from '@/components/email-template';
import { NextRequest } from 'next/server';
import { Resend } from 'resend';

const fromEmail = process.env.FROM_EMAIL as string;
const toEmail = process.env.TO_EMAIL as string;
const resendApiKey = process.env.RESEND_API_KEY as string;

const resend = new Resend(resendApiKey);

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, subject, message } = body;

  try {
    const { data, error } = await resend.emails.send({
      from: `Ahmed Faaid website contact form <${fromEmail}>`,
      to: [toEmail],
      subject: body.subject,
      react: EmailTemplate({
        subject,
        name,
        email,
        message
      })
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
