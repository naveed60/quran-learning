"use client"
import Navigation from "@/components/sections/Navigation"
import HeroSection from "@/components/sections/HeroSection"
import FeaturesSection from "@/components/sections/FeaturesSection"
import Footer from "@/components/sections/Footer"
import CoursesSection from "@/components/sections/CoursesSection"
import Testimonials from "@/components/sections/Testimonials"
import CtaSection from "@/components/sections/CtaSection"
import NewsLetter from "@/components/sections/NewsLetter"
import { useEffect } from "react"

export default function QuranTeachingWebsite() {
  // Handle hash navigation when page loads
  useEffect(() => {
    const handleHashScroll = () => {
      if (window.location.hash) {
        const hash = window.location.hash.substring(1)
        const element = document.getElementById(hash)
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
          }, 500)
        }
      }
    }

    // Small delay to ensure DOM is ready
    const timer = setTimeout(handleHashScroll, 100)
    
    return () => clearTimeout(timer)
  }, [])

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