"use client"

import emailjs from "@emailjs/browser"

type RegistrationDetails = {
  name: string
  email: string
  whatsapp: string
  location: string
}

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

let isInitialized = false

const ensureInitialized = () => {
  if (isInitialized || typeof window === "undefined" || !publicKey) return
  emailjs.init({ publicKey })
  isInitialized = true
}

export async function notifyAdminOfRegistration(details: RegistrationDetails) {
  if (!serviceId || !templateId || !publicKey) {
    throw new Error("EmailJS environment variables are missing. Please configure service, template, and public key.")
  }

  ensureInitialized()

  const templateParams = {
    to_email: "imnaveed60@gmail.com",
    student_name: details.name,
    student_email: details.email,
    student_whatsapp: details.whatsapp,
    student_location: details.location,
  }

  await emailjs.send(serviceId, templateId, templateParams, publicKey)
}
