"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { BookOpen, Users, Clock, Star, Play, CheckCircle, Globe, Video, Award, Heart, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Menu } from 'lucide-react'
import Link from "next/link"

export default function QuranTeachingWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Navigation - Fixed at top */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-emerald-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-emerald-600" />
              <span className="text-xl font-bold text-gray-900">QuranAcademy</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#courses" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Courses
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                About
              </Link>
              <Link href="#teachers" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Teachers
              </Link>
              <Link href="#testimonials" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Reviews
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Contact
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden sm:inline-flex border-emerald-200 text-emerald-700 hover:bg-emerald-50">
                Sign In
              </Button>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Start Free Trial
              </Button>
              {/* Mobile menu button */}
              <Button variant="ghost" className="md:hidden" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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

            {/* Hero Visual */}
            <div className="h-96 lg:h-[500px] bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center shadow-lg">
              <div className="text-center space-y-4">
                <div className="text-6xl animate-pulse">📖</div>
                <div className="text-4xl font-bold text-emerald-600">القرآن الكريم</div>
                <div className="text-lg text-gray-600">Interactive Learning Platform</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
                <CardTitle>One-on-One Sessions</CardTitle>
                <CardDescription>
                  Personalized learning with certified teachers from Al-Azhar University
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Clock className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Flexible Scheduling</CardTitle>
                <CardDescription>Choose your preferred time slots that fit your UK/USA timezone</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Globe className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Interactive Platform</CardTitle>
                <CardDescription>Advanced digital tools for Tajweed practice and progress tracking</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Award className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Certified Teachers</CardTitle>
                <CardDescription>
                  Learn from qualified Hafiz and Islamic scholars with years of experience
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <Heart className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>All Ages Welcome</CardTitle>
                <CardDescription>Specialized programs for children, adults, and families</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle>Progress Tracking</CardTitle>
                <CardDescription>Monitor your learning journey with detailed progress reports</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Course Offerings</h2>
            <p className="text-xl text-gray-600">Comprehensive programs tailored to your learning needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Testimonials */}
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

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Your Quran Learning Journey Today</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join thousands of students who have transformed their lives through Quran education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-3">
              Start Free 7-Day Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-3 bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated with Islamic Learning Tips</h2>
          <p className="text-xl text-gray-600 mb-8">
            Get weekly insights, Quran verses, and learning tips delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email address" className="flex-1 border-gray-300" />
            <Button className="bg-emerald-600 hover:bg-emerald-700">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-8 w-8 text-emerald-400" />
                <span className="text-xl font-bold">QuranAcademy</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering Muslims worldwide with authentic Quran education through modern technology and traditional
                teaching methods.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  <Youtube className="h-6 w-6" />
                </Link>
              </div>
            </div>

            {/* Courses */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Courses</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Quran Recitation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Tajweed Mastery
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Hifz Program
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Islamic Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Arabic Language
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Technical Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm">info@quranacademy.com</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm">Available Worldwide</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} QuranAcademy. All rights reserved. Spreading Islamic knowledge with love
              and dedication.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}