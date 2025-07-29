 "use client"

 import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
 import { BookOpen, Users, Clock, Star, Play, CheckCircle, Globe, Video, Award, Heart, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Menu } from 'lucide-react'

import { use } from "react"
export default function Testimonials() {
    return (
 <section id="testimonials" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600">Hear from our satisfied students across UK and USA</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-emerald-50 border-emerald-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "The teachers are incredibly patient and knowledgeable. My daughter has improved so much in just 3
                  months!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-emerald-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-emerald-700 font-semibold">S</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Johnson</div>
                    <div className="text-sm text-gray-600">London, UK</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-emerald-50 border-emerald-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Flexible scheduling made it perfect for my busy lifestyle. Highly recommend to anyone wanting to
                  learn Quran."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-emerald-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-emerald-700 font-semibold">M</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Michael Chen</div>
                    <div className="text-sm text-gray-600">New York, USA</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-emerald-50 border-emerald-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "The interactive platform and progress tracking keep me motivated. Best investment I've made for my
                  spiritual growth."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-emerald-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-emerald-700 font-semibold">A</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Aisha Patel</div>
                    <div className="text-sm text-gray-600">Birmingham, UK</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
</section>
    )
}