"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { BookOpen, Users, Clock, Star, Play, CheckCircle, Globe, Video, Award, Heart, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Menu } from 'lucide-react'
import Link from "next/link"
import Navigation from "@/components/sections/Navigation"
import HeroSection from "@/components/sections/HeroSection"
import FeaturesSection from "@/components/sections/FeaturesSection"
import Footer from "@/components/sections/Footer"
import CoursesSection from "@/components/sections/CoursesSection"
import Testimonials from "@/components/sections/Testimonials"
import CtaSection from "@/components/sections/CtaSection"
import NewsLetter from "@/components/sections/NewsLetter"


export default function QuranTeachingWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      {/* Navigation - Fixed at top */}
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <CoursesSection />
      <Testimonials />
      <CtaSection/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}