"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Video } from 'lucide-react'
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 border-emerald-200">
                🌟 Trusted by 10,000+ Students Worldwide
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Learn Quran Online with <span className="text-emerald-600">Expert Teachers</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join thousands of students from UK & USA learning Quran recitation, Tajweed, and Islamic studies
                through personalized one-on-one sessions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3">
                <Play className="mr-2 h-5 w-5" />
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                <Video className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Expert Teachers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">4.9★</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </div>

         <div className="relative">
  <Image
    src="/images/kid.png"
    alt="Quran learning online"
    width={600}
    height={400}
    className="bg-emerald-200 rounded-2xl shadow-lg"
    priority
  />
</div>
        </div>
      </div>
    </section>
  )
}