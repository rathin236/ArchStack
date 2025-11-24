import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import fs from 'fs/promises'
import path from 'path'

async function sendPushoverNotification(message: string, title: string = 'ArchStack Chat') {
  const userKey = process.env.PUSHOVER_USER_KEY
  const appToken = process.env.PUSHOVER_APP_TOKEN

  if (!userKey || !appToken) {
    return
  }

  try {
    await fetch('https://api.pushover.net/1/messages.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: appToken,
        user: userKey,
        message: message,
        title: title,
        html: 1
      }),
    })
  } catch (error) {
    console.error('Failed to send Pushover notification:', error)
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    
    // Check if this is a form submission (from contact page) or a chat message
    // The Contact component doesn't currently post to this endpoint, but if we wanted to unify notifications...
    // The user specifically said "whenever someone sends lets talk data".
    // This implies the contact form.
    // But the current code frame shows the Contact component is just a UI with no API connection yet.
    // I should probably create a separate API route for the contact form or handle it here if the body structure differs.
    
    // However, the user might mean simply "when someone says 'lets talk data' in the chat".
    // OR they want the contact form ("Let's Talk Data" section) to send notifications.
    // Given "whenever someone sends lets talk data", it matches the section title "Let's Talk Data" in Contact.tsx.
    
    // The Contact.tsx component currently has a form that does nothing but preventDefault.
    // I need to wire that up to an API route to send the notification.
    
    // Let's assume the user wants the Contact form to work.
    // I will create a new API route `app/api/contact/route.ts` for the form submission.
    // And I will keep the chat notification as is (formatted).
    
    // BUT wait, this tool call is overwriting `app/api/chat/route.ts`.
    // I'll stick to fixing the chat route first to be formatted as requested.
    
    const message = body.message

    // Send Pushover notification asynchronously
    // Formatting the message for Pushover (using HTML as enabled above)
    const formattedMessage = `
<b>New Chat Message</b>
----------------
${message}
    `.trim()

    sendPushoverNotification(formattedMessage, 'ArchStack: New Chat')

    const apiKey = process.env.OPENAI_API_KEY

    if (!apiKey) {
      console.error('OpenAI API key is missing')
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      )
    }

    const openai = new OpenAI({
      apiKey: apiKey,
    })

    // Read business info
    const businessInfoPath = path.join(process.cwd(), 'lib', 'business_info.md')
    let businessInfo = ''
    try {
      businessInfo = await fs.readFile(businessInfoPath, 'utf-8')
    } catch (err) {
      console.error('Failed to read business_info.md', err)
      // Fallback or non-fatal error
    }

    const systemPrompt = `You are a helpful AI consultant for Archstack. 
    Use the following business information to answer the user's questions accurately.
    If you don't know the answer based on this information, politely say so and offer to connect them with a human consultant.
    
    Business Information:
    ${businessInfo}
    `

    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message }
      ],
      model: 'gpt-3.5-turbo',
    })

    const reply = completion.choices[0].message.content

    return NextResponse.json({ reply })
  } catch (error) {
    console.error('Chat API Error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { error: `Internal Server Error: ${errorMessage}` },
      { status: 500 }
    )
  }
}
