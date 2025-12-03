import { NextResponse, type NextRequest } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

type RegistrationPayload = {
  name: string
  email: string
  whatsapp: string
  location: string
}

const {
  REGISTRATION_NOTIFICATION_TO,
  REGISTRATION_NOTIFICATION_FROM = process.env.SMTP_USER,
  SMTP_HOST,
  SMTP_PORT = "587",
  SMTP_USER,
  SMTP_PASS,
  SMTP_SECURE,
} = process.env

const ensureTransporter = () => {
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error("SMTP environment variables are missing. Please configure host, port, user, and password.")
  }

  const secure = SMTP_SECURE ? SMTP_SECURE === "true" : Number(SMTP_PORT) === 465

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  })
}

const validatePayload = (payload: Partial<RegistrationPayload>): payload is RegistrationPayload => {
  return Boolean(payload.name && payload.email && payload.whatsapp && payload.location)
}

export async function POST(request: NextRequest) {
  if (!REGISTRATION_NOTIFICATION_TO) {
    return NextResponse.json({ error: "Notification recipient is not configured." }, { status: 500 })
  }

  let payload: Partial<RegistrationPayload>
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 })
  }

  if (!validatePayload(payload)) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 })
  }

  try {
    const transporter = ensureTransporter()

    await transporter.sendMail({
      from: REGISTRATION_NOTIFICATION_FROM,
      to: REGISTRATION_NOTIFICATION_TO,
      replyTo: payload.email,
      subject: `New student registration: ${payload.name}`,
      text: [
        "A new student has registered on the platform:",
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `WhatsApp: ${payload.whatsapp}`,
        `Location: ${payload.location}`,
      ].join("\n"),
      html: `
        <h2>New student registration</h2>
        <ul>
          <li><strong>Name:</strong> ${payload.name}</li>
          <li><strong>Email:</strong> ${payload.email}</li>
          <li><strong>WhatsApp:</strong> ${payload.whatsapp}</li>
          <li><strong>Location:</strong> ${payload.location}</li>
        </ul>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Failed to send registration email", error)
    return NextResponse.json({ error: "Unable to send registration email." }, { status: 500 })
  }
}
