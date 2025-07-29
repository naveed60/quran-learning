"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Users, Clock, Star, Play, CheckCircle, Globe, Video, Award, Heart, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Menu } from 'lucide-react'

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-emerald-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-bold text-gray-900">QuranAcademy</span>
          </div>

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

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:inline-flex border-emerald-200 text-emerald-700 hover:bg-emerald-50">
              Sign In
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Start Free Trial
            </Button>
            <Button variant="ghost" className="md:hidden" size="sm">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}