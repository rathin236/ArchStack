import { NextResponse } from 'next/server'

// Edge runtime - works without nodejs_compat flag
export const runtime = 'edge'

async function sendPushoverNotification(name: string, email: string, phone: string) {
  const userKey = process.env.PUSHOVER_USER_KEY
  const appToken = process.env.PUSHOVER_APP_TOKEN

  if (!userKey || !appToken) {
    return
  }

  const formattedMessage = `
<b>🎯 New Qualified Lead from Chat</b>
━━━━━━━━━━━━━━━━━━━━
<b>Name:</b> ${name}
<b>Email:</b> ${email}
${phone ? `<b>Phone:</b> ${phone}` : ''}

<i>Lead captured via AI Chat Assistant</i>
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
        title: '✨ ArchStack: Hot Lead',
        html: 1,
        priority: 1,
        sound: 'pushover'
      }),
    })
  } catch (error) {
    console.error('Failed to send Pushover notification:', error)
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone } = body

    await sendPushoverNotification(name, email, phone || '')

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Lead API Error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}


