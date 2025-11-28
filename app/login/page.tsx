"use client"

import Navigation from "@/components/sections/Navigation"
import Footer from "@/components/sections/Footer"
import { LoginForm } from "@/components/auth/LoginForm"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-sky-50">
      <Navigation />
      <main className="pt-32 pb-16 px-4 flex flex-col items-center">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10">
          <section className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">Welcome back</p>
            <h1 className="text-4xl font-bold text-gray-900">
              Log in to continue your Quran learning journey
            </h1>
            <p className="text-lg text-gray-600">
              Access personalized lessons, connect with experienced teachers, and track your memorization
              progress all in one place.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>• Continue from where you left off</li>
              <li>• Get reminders for upcoming classes</li>
              <li>• Chat with your assigned teacher directly</li>
            </ul>
          </section>
          <div className="flex justify-end">
            <LoginForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
