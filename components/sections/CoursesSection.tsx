"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Clock, Star, Play, CheckCircle, Globe, Video, Award, Heart, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Menu } from 'lucide-react'

export default function CoursesSection() {
    return (
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Course Offerings</h2>
            <p className="text-xl text-gray-600">Comprehensive programs tailored to your learning needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-emerald-600">Basic Norani Qaida</CardTitle>
                <CardDescription>Master Arabic alphabetic pronunciations with our foundational course</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                    Arabic alphabet recognition
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                    Proper pronunciation techniques
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                    Reading fluency development
                  </li>
                </ul>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Start Learning</Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-emerald-600">Quran Recitation</CardTitle>
                <CardDescription>Learn proper pronunciation and beautiful recitation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                    Arabic pronunciation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                    Fluency development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                    Voice modulation
                  </li>
                </ul>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Start Learning</Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-emerald-600">Tajweed Mastery</CardTitle>
                <CardDescription>Master the rules of Quranic pronunciation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                    Tajweed rules
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                    Practical application
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                    Certification available
                  </li>
                </ul>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Start Learning</Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-emerald-600">Discuss Shari Masail</CardTitle>
                <CardDescription>Learn Islamic jurisprudence and discuss contemporary Shariah matters</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                    Islamic jurisprudence (Fiqh)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                    Contemporary issues discussion
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                    Q&A sessions with scholars
                  </li>
                </ul>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Join Discussion</Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-emerald-600">Darse Nizami Classes</CardTitle>
                <CardDescription>Comprehensive Islamic education following traditional curriculum</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                    Classical Islamic texts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                    Arabic grammar & literature
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                    Hadith & Tafseer studies
                  </li>
                </ul>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Enroll Now</Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-emerald-600">Hifz Program</CardTitle>
                <CardDescription>Memorize the Holy Quran with expert guidance</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                    Structured memorization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                    Revision techniques
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mr-2" />
                    Progress tracking
                  </li>
                </ul>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Start Learning</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
   
  )
}