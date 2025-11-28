"use client"

import Navigation from "@/components/sections/Navigation"
import Footer from "@/components/sections/Footer"
import { RegisterForm } from "@/components/auth/RegisterForm"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50">
      <Navigation />
      <main className="pt-32 pb-16 px-4 flex flex-col items-center">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10">
          <section className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
              Join the academy
            </p>
            <h1 className="text-4xl font-bold text-gray-900">Start learning Quran with expert teachers</h1>
            <p className="text-lg text-gray-600">
              Create your free student account to unlock personalized courses, flexible scheduling, and
              one-on-one guidance designed for every skill level.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>• Interactive live sessions</li>
              <li>• Dedicated WhatsApp support</li>
              <li>• Tailored learning roadmap</li>
            </ul>
          </section>
          <div className="flex justify-end">
            <RegisterForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
