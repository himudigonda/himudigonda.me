import { Resend } from 'resend'
import EmailTemplate from '../../components/EmailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function sendEmail(req, res) {
  try {
    const data = req.body

    await resend.sendEmail({
      from: 'himudigonda.me <website@himudigonda.me>',
      to: 'zno.mudigonda@gmail.com',
      replyTo: data.email,
      subject: `${data.name} - via himudigonda.me`,
      react: <EmailTemplate {...data} />,
    })

    res.status(200).json({ message: 'Email sent' })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}
