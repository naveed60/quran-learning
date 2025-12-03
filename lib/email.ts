"use client"

type RegistrationDetails = {
  name: string
  email: string
  whatsapp: string
  location: string
}

export async function notifyAdminOfRegistration(details: RegistrationDetails) {
  const response = await fetch("/api/notify-registration", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(details),
  })

  if (!response.ok) {
    const data = (await response.json().catch(() => null)) as { error?: string } | null
    throw new Error(data?.error ?? "Unable to notify the admin via email.")
  }
}
