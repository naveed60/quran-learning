"use client"

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Users, Clock, Globe, Award, Heart, CheckCircle } from 'lucide-react'

export default function FeaturesSection() {
  return (
    <section id="courses" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Online Quran Classes?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the most comprehensive and flexible Quran learning platform designed for modern students
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <Users className="h-12 w-12 text-emerald-600 mb-4" />
              <CardTitle className="text-gray-900">One-on-One Sessions</CardTitle>
              <CardDescription className="text-gray-700">
                Personalized learning with certified teachers from Al-Azhar University
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <Clock className="h-12 w-12 text-emerald-600 mb-4" />
              <CardTitle className="text-gray-900">Flexible Scheduling</CardTitle>
              <CardDescription className="text-gray-700">Choose your preferred time slots that fit your UK/USA timezone</CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <Globe className="h-12 w-12 text-emerald-600 mb-4" />
              <CardTitle className="text-gray-900">Interactive Platform</CardTitle>
              <CardDescription className="text-gray-700">Advanced digital tools for Tajweed practice and progress tracking</CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <Award className="h-12 w-12 text-emerald-600 mb-4" />
              <CardTitle className="text-gray-900">Certified Teachers</CardTitle>
              <CardDescription className="text-gray-700">
                Learn from qualified Hafiz and Islamic scholars with years of experience
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <Heart className="h-12 w-12 text-emerald-600 mb-4" />
              <CardTitle className="text-gray-900">All Ages Welcome</CardTitle>
              <CardDescription className="text-gray-700">Specialized programs for children, adults, and families</CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CheckCircle className="h-12 w-12 text-emerald-600 mb-4" />
              <CardTitle className="text-gray-900">Progress Tracking</CardTitle>
              <CardDescription className="text-gray-700">Monitor your learning journey with detailed progress reports</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}