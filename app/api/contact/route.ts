import { NextResponse } from "next/server";
import { Resend } from "resend"
import EmailTemplate from '@/components/contact/email-template'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const {name, email, subject, message} = await request.json()
await resend.sendEmail({
  from: 'contact@mail.danni.my.id',
  to: 'contact@danniramdhani.anonaddy.com',
  subject: subject,
  react: EmailTemplate({
      name,
      email,
      subject,
      message,
    })
});

  return NextResponse.json({
    status: 'OK'
  })
}
