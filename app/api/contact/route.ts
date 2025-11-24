import { NextResponse } from 'next/server'

async function sendPushoverNotification(name: string, email: string, message: string) {
  const userKey = process.env.PUSHOVER_USER_KEY
  const appToken = process.env.PUSHOVER_APP_TOKEN

  if (!userKey || !appToken) {
    return
  }

  const formattedMessage = `
<b>🔥 HOT LEAD - "Let's Talk Data" Form</b>
━━━━━━━━━━━━━━━━━━━━━━━━━━
<b>Name:</b> ${name}
<b>Email:</b> ${email}

<b>Message:</b>
${message}

<i>⚡ High Priority - Direct Contact Form Submission</i>
  `.trim()

  try {
    await fetch('https://api.pushover.net/1/messages.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: appToken,
        user: userKey,
        message: formattedMessage,
        title: '🔴 ArchStack: HOT LEAD',
        html: 1,
        priority: 1,
        sound: 'siren'
      }),
    })
  } catch (error) {
    console.error('Failed to send Pushover notification:', error)
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    await sendPushoverNotification(name, email, message)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact API Error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
