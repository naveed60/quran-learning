"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Video, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: "images/slider1.png",
      badge: "🌟 Trusted by 10,000+ Students Worldwide",
      title: "Learn Quran Online with",
      titleHighlight: "Expert Teachers",
      description:
        "Join thousands of students from UK & USA learning Quran recitation, Tajweed, and Islamic studies through personalized one-on-one sessions.",
      stats: [
        { number: "1K+", label: "Students" },
        { number: "10+", label: "Expert Teachers" },
        { number: "4.9★", label: "Rating" },
      ],
    },
    {
      id: 2,
      image: "images/slider2.png",
      badge: "📖 Interactive Learning Platform",
      title: "Master Tajweed with",
      titleHighlight: "Certified Scholars",
      description:
        "Learn proper Quranic pronunciation and recitation rules with our experienced teachers using modern interactive tools.",
      stats: [
        { number: "500+", label: "Lessons" },
        { number: "24/7", label: "Support" },
        { number: "98%", label: "Success Rate" },
      ],
    },
    {
      id: 3,
      image: "images/slider3.png",
      badge: "👨‍👩‍👧‍👦 Family Learning Programs",
      title: "Islamic Education for",
      titleHighlight: "All Ages",
      description:
        "Comprehensive Islamic studies programs designed for children, adults, and families with flexible scheduling options.",
      stats: [
        { number: "All Ages", label: "Welcome" },
        { number: "Flexible", label: "Timing" },
        { number: "Global", label: "Access" },
      ],
    },
    {
      id: 4,
      image: "images/slider4.png",
      badge: "🎓 Hifz Program Available",
      title: "Complete Quran",
      titleHighlight: "Memorization",
      description:
        "Structured Hifz program with experienced Huffaz teachers to guide you through your memorization journey.",
      stats: [
        { number: "100+", label: "Huffaz" },
        { number: "Custom", label: "Schedule" },
        { number: "Proven", label: "Methods" },
      ],
    },
  ]

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative pt-16 pb-8 overflow-hidden w-full">
      {/* Carousel Container - Full width and height */}
      <div className="relative h-[600px] lg:h-[700px] w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image - Full coverage */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl">
                  <div className="space-y-6">
                    <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 border-emerald-200">
                      {slide.badge}
                    </Badge>

                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                      {slide.title} <span className="text-emerald-400">{slide.titleHighlight}</span>
                    </h1>

                    <p className="text-xl text-gray-200 leading-relaxed">{slide.description}</p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3">
                        <Play className="mr-2 h-5 w-5" />
                        Start Free Trial
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                      >
                        <Video className="mr-2 h-5 w-5" />
                        Watch Demo
                      </Button>
                    </div>

                    <div className="flex items-center space-x-8 pt-4">
                      {slide.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className="text-2xl font-bold text-white">{stat.number}</div>
                          <div className="text-sm text-gray-300">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? "bg-emerald-400 scale-125" : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute top-6 right-6 z-20 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
          <span className="text-white text-sm font-medium">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>
    </section>
  )
}
