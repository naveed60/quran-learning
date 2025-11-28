"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState, type ChangeEvent, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { registerUser } from "@/lib/auth"
import { notifyAdminOfRegistration } from "@/lib/email"

const ADMIN_WHATSAPP = "+923244026426"

export function RegisterForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    location: "",
    password: "",
    confirmPassword: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [emailNotice, setEmailNotice] = useState<string | null>(null)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)
    setSuccess(null)
    setEmailNotice(null)

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    if (!formData.whatsapp.startsWith("+")) {
      setError("Please enter WhatsApp number with country code (e.g. +923...).")
      return
    }

    try {
      setSubmitting(true)
      await registerUser({
        name: formData.name.trim(),
        email: formData.email.trim(),
        whatsapp: formData.whatsapp.trim(),
        location: formData.location.trim(),
        password: formData.password,
      })

      const message = `New student registered\nName: ${formData.name}\nEmail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\nLocation: ${formData.location}`
      const adminNumber = ADMIN_WHATSAPP.replace("+", "")
      window.open(`https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`, "_blank")

      try {
        await notifyAdminOfRegistration({
          name: formData.name.trim(),
          email: formData.email.trim(),
          whatsapp: formData.whatsapp.trim(),
          location: formData.location.trim(),
        })
      } catch (emailError) {
        console.error("Failed to send registration email", emailError)
        setEmailNotice(
          "Registered successfully, but we could not send the email notification. Please inform the admin manually."
        )
      }

      setSuccess("Registration successful! Redirecting...")
      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        location: "",
        password: "",
        confirmPassword: "",
      })
      setTimeout(() => router.push("/"), 1200)
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unable to register at this time."
      setError(message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-lg">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Create your account</CardTitle>
        <CardDescription>Register to start learning with Noor ul Hassan Quran Academy.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="whatsapp">WhatsApp Number</Label>
            <Input
              id="whatsapp"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              required
              placeholder="+923001234567"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="City, Country"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              minLength={6}
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}
          {success && <p className="text-sm text-emerald-600">{success}</p>}
          {emailNotice && <p className="text-sm text-amber-600">{emailNotice}</p>}
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={submitting}>
            {submitting ? "Creating account..." : "Create account"}
          </Button>
          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-emerald-600 font-medium hover:underline">
              Log in
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  )
}
