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
import { loginUser } from "@/lib/auth"

export function LoginForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)
    try {
      setSubmitting(true)
      await loginUser(formData.email.trim(), formData.password)
      router.push("/")
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unable to log in right now."
      setError(message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-lg">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Welcome back!</CardTitle>
        <CardDescription>Log in to continue learning with Noor ul Hassan Quran Academy.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
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
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={submitting}>
            {submitting ? "Signing in..." : "Sign in"}
          </Button>
          <p className="text-sm text-center text-gray-600">
            Need an account?{" "}
            <Link href="/register" className="text-emerald-600 font-medium hover:underline">
              Register now
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  )
}
