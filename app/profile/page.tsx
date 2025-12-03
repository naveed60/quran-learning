"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Navigation from "@/components/sections/Navigation"
import Footer from "@/components/sections/Footer"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/useAuth"

export default function ProfilePage() {
  const router = useRouter()
  const { user, logout, isAuthenticated, isLoading } = useAuth()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace("/login")
    }
  }, [isLoading, isAuthenticated, router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50">
        <Navigation />
        <main className="pt-32 pb-16 px-4 flex justify-center">
          <p className="text-gray-600">Loading your profile...</p>
        </main>
        <Footer />
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50">
        <Navigation />
        <main className="pt-32 pb-16 px-4 flex flex-col items-center gap-4">
          <h1 className="text-2xl font-semibold text-gray-900">You are not logged in.</h1>
          <Button onClick={() => router.replace("/login")} className="bg-emerald-600 hover:bg-emerald-700">
            Go to Login
          </Button>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50">
      <Navigation />
      <main className="pt-32 pb-16 px-4 flex flex-col items-center">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="text-3xl text-gray-900">Your Profile</CardTitle>
            <p className="text-gray-600">Review your information or head back to the homepage.</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <ProfileField label="Full Name" value={user.name} />
              <ProfileField label="Email" value={user.email} />
              <ProfileField label="WhatsApp" value={user.whatsapp} />
              <ProfileField label="Location" value={user.location} />
            </div>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-3 justify-between">
            <Button variant="outline" onClick={() => router.push("/")}>
              Back to Home
            </Button>
            <Button
              className="bg-emerald-600 hover:bg-emerald-700"
              onClick={() => {
                logout()
                router.replace("/")
              }}
            >
              Log Out
            </Button>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  )
}

function ProfileField({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-emerald-100 bg-white/60 p-4 shadow-sm">
      <p className="text-sm uppercase tracking-wide text-emerald-600">{label}</p>
      <p className="text-lg font-semibold text-gray-900 break-words">{value}</p>
    </div>
  )
}
