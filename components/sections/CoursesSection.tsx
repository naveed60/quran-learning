"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { useId } from "react"

type CourseVariant = "board" | "laptop" | "tablet" | "books"

type CourseCard = {
  title: string
  description: string
  features: string[]
  cta: string
  tag: string
  variant: CourseVariant
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
  }
}

const courses: CourseCard[] = [
  {
    title: "Basic Norani Qaida",
    description: "Master Arabic alphabetic pronunciations with our foundational course",
    features: [
      "Arabic alphabet recognition",
      "Proper pronunciation techniques",
      "Reading fluency development",
    ],
    cta: "Start Learning",
    tag: "Foundations",
    variant: "board",
    colors: {
      primary: "#5C7AEA",
      secondary: "#B6D5FF",
      accent: "#FCE3A2",
      background: "#EEF2FF",
    },
  },
  {
    title: "Quran Recitation",
    description: "Learn proper pronunciation and beautiful recitation",
    features: ["Arabic pronunciation", "Fluency development", "Voice modulation"],
    cta: "Start Learning",
    tag: "Popular",
    variant: "laptop",
    colors: {
      primary: "#71C4EF",
      secondary: "#D9F1FF",
      accent: "#FFD09B",
      background: "#E2F7FF",
    },
  },
  {
    title: "Tajweed Mastery",
    description: "Master the rules of Quranic pronunciation",
    features: ["Tajweed rules", "Practical application", "Certification available"],
    cta: "Start Learning",
    tag: "Advanced",
    variant: "tablet",
    colors: {
      primary: "#7A5AF8",
      secondary: "#D7C8FF",
      accent: "#8FE0D1",
      background: "#F5F0FF",
    },
  },
  {
    title: "Discuss Shari Masail",
    description: "Learn Islamic jurisprudence and discuss contemporary Shariah matters",
    features: [
      "Islamic jurisprudence (Fiqh)",
      "Contemporary issues discussion",
      "Q&A sessions with scholars",
    ],
    cta: "Join Discussion",
    tag: "Live Circle",
    variant: "board",
    colors: {
      primary: "#FF9B73",
      secondary: "#FFD7C2",
      accent: "#F8F6FA",
      background: "#FFF5EF",
    },
  },
  {
    title: "Darse Nizami Classes",
    description: "Comprehensive Islamic education following traditional curriculum",
    features: ["Classical Islamic texts", "Arabic grammar & literature", "Hadith & Tafseer studies"],
    cta: "Enroll Now",
    tag: "Scholars",
    variant: "books",
    colors: {
      primary: "#43B5A0",
      secondary: "#BFF0E6",
      accent: "#FFE4C0",
      background: "#E7FCF5",
    },
  },
  {
    title: "Hifz Program",
    description: "Memorize the Holy Quran with expert guidance",
    features: ["Structured memorization", "Revision techniques", "Progress tracking"],
    cta: "Start Learning",
    tag: "Memorization",
    variant: "books",
    colors: {
      primary: "#F686BD",
      secondary: "#FFD9EC",
      accent: "#C7F0FF",
      background: "#FFF2F8",
    },
  },
]

export default function CoursesSection() {
  const handleWhatsAppContact = (courseName: string) => {
    const phoneNumber = "+923244026426"
    const message = `Hi! I'm interested in learning more about the ${courseName} course. Could you please provide more details?`
    const whatsappUrl = `https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-20 bg-gradient-to-b from-sky-50 via-white to-emerald-50" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-sm font-semibold text-emerald-600">
            Featured Courses
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Course Offerings</h2>
          <p className="text-xl text-gray-600">
            Comprehensive programs tailored to your learning needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card
              key={course.title}
              className="relative overflow-hidden border-none shadow-[0px_20px_45px_rgba(59,130,246,0.15)] hover:-translate-y-1 transition-all duration-300 bg-white/90 h-full"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="relative mb-6">
                  <div
                    className="h-48 rounded-3xl flex items-center justify-center shadow-inner"
                    style={{
                      background: `linear-gradient(135deg, ${course.colors.background}, #ffffff)`,
                    }}
                  >
                    <CourseIllustration variant={course.variant} colors={course.colors} />
                  </div>
                  <span className="absolute top-3 right-4 px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full bg-white/90 text-emerald-600 shadow">
                    {course.tag}
                  </span>
                </div>
                <CardTitle className="text-emerald-700 text-2xl mb-2">{course.title}</CardTitle>
                <CardDescription className="text-base text-gray-600 mb-5">
                  {course.description}
                </CardDescription>
                <ul className="space-y-3 text-sm text-gray-700 mb-6">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 mt-[2px]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Button
                    className="w-full bg-emerald-600 hover:bg-emerald-700"
                    onClick={() => handleWhatsAppContact(course.title)}
                  >
                    {course.cta}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

type IllustrationProps = {
  colors: CourseCard["colors"]
}

function CourseIllustration({
  variant,
  colors,
}: {
  variant: CourseVariant
  colors: CourseCard["colors"]
}) {
  switch (variant) {
    case "board":
      return <BoardIllustration colors={colors} />
    case "laptop":
      return <LaptopIllustration colors={colors} />
    case "tablet":
      return <TabletIllustration colors={colors} />
    case "books":
    default:
      return <BooksIllustration colors={colors} />
  }
}

function BoardIllustration({ colors }: IllustrationProps) {
  const gradientId = useId()
  return (
    <svg viewBox="0 0 280 160" className="w-full max-w-[240px]" role="img" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.primary} />
          <stop offset="100%" stopColor={colors.secondary} />
        </linearGradient>
      </defs>
      <rect x="16" y="24" width="248" height="120" rx="16" fill={`url(#${gradientId})`} opacity="0.9" />
      <rect x="32" y="38" width="216" height="88" rx="12" fill="white" opacity="0.2" />
      <rect x="100" y="140" width="80" height="10" rx="5" fill={colors.primary} opacity="0.5" />
      <circle cx="70" cy="110" r="26" fill={colors.accent} opacity="0.8" />
      <rect x="58" y="98" width="24" height="40" rx="12" fill="#ffffff" opacity="0.8" />
      <rect x="180" y="110" width="40" height="28" rx="14" fill="#ffffff" opacity="0.4" />
      <rect x="44" y="70" width="48" height="10" rx="5" fill="#ffffff" opacity="0.6" />
      <rect x="104" y="70" width="48" height="10" rx="5" fill="#ffffff" opacity="0.6" />
      <rect x="164" y="70" width="48" height="10" rx="5" fill="#ffffff" opacity="0.6" />
      <rect x="44" y="88" width="72" height="10" rx="5" fill="#ffffff" opacity="0.3" />
      <rect x="132" y="88" width="80" height="10" rx="5" fill="#ffffff" opacity="0.3" />
      <rect x="44" y="52" width="180" height="10" rx="5" fill="#ffffff" opacity="0.4" />
    </svg>
  )
}

function LaptopIllustration({ colors }: IllustrationProps) {
  const gradientId = useId()
  return (
    <svg viewBox="0 0 280 160" className="w-full max-w-[230px]" role="img" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={colors.primary} />
          <stop offset="100%" stopColor={colors.secondary} />
        </linearGradient>
      </defs>
      <rect x="30" y="30" width="220" height="110" rx="18" fill={`url(#${gradientId})`} opacity="0.95" />
      <rect x="50" y="48" width="180" height="74" rx="12" fill="#ffffff" opacity="0.9" />
      <rect x="40" y="130" width="200" height="15" rx="7.5" fill={colors.primary} opacity="0.5" />
      <rect x="70" y="62" width="60" height="48" rx="12" fill={colors.secondary} opacity="0.7" />
      <circle cx="180" cy="86" r="28" fill={colors.accent} opacity="0.8" />
      <rect x="160" y="70" width="40" height="12" rx="6" fill="#ffffff" opacity="0.5" />
      <rect x="160" y="90" width="44" height="8" rx="4" fill="#ffffff" opacity="0.5" />
      <rect x="160" y="104" width="32" height="6" rx="3" fill="#ffffff" opacity="0.4" />
      <rect x="86" y="120" width="108" height="6" rx="3" fill="#ffffff" opacity="0.4" />
    </svg>
  )
}

function TabletIllustration({ colors }: IllustrationProps) {
  const gradientId = useId()
  return (
    <svg viewBox="0 0 280 160" className="w-full max-w-[220px]" role="img" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.secondary} />
          <stop offset="100%" stopColor={colors.primary} />
        </linearGradient>
      </defs>
      <rect x="60" y="20" width="160" height="120" rx="30" fill="#101828" opacity="0.07" />
      <rect x="40" y="28" width="200" height="120" rx="26" fill={`url(#${gradientId})`} />
      <rect x="64" y="50" width="152" height="76" rx="18" fill="#ffffff" opacity="0.9" />
      <rect x="80" y="62" width="120" height="8" rx="4" fill={colors.accent} opacity="0.8" />
      <rect x="80" y="78" width="96" height="8" rx="4" fill={colors.secondary} opacity="0.5" />
      <rect x="80" y="94" width="72" height="8" rx="4" fill={colors.secondary} opacity="0.3" />
      <rect x="160" y="94" width="39" height="8" rx="4" fill={colors.secondary} opacity="0.3" />
      <circle cx="140" cy="132" r="6" fill="#101828" opacity="0.2" />
    </svg>
  )
}

function BooksIllustration({ colors }: IllustrationProps) {
  const gradientId = useId()
  return (
    <svg viewBox="0 0 280 160" className="w-full max-w-[230px]" role="img" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={colors.secondary} />
          <stop offset="100%" stopColor={colors.primary} />
        </linearGradient>
      </defs>
      <rect x="40" y="40" width="70" height="80" rx="12" fill={`url(#${gradientId})`} />
      <rect x="120" y="24" width="70" height="110" rx="12" fill={colors.primary} opacity="0.8" />
      <rect x="200" y="48" width="50" height="72" rx="12" fill={colors.accent} opacity="0.9" />
      <rect x="50" y="54" width="48" height="8" rx="4" fill="#ffffff" opacity="0.6" />
      <rect x="130" y="38" width="48" height="8" rx="4" fill="#ffffff" opacity="0.6" />
      <rect x="210" y="62" width="30" height="8" rx="4" fill="#ffffff" opacity="0.6" />
      <rect x="50" y="70" width="48" height="8" rx="4" fill="#ffffff" opacity="0.3" />
      <rect x="130" y="54" width="48" height="8" rx="4" fill="#ffffff" opacity="0.3" />
      <rect x="210" y="78" width="30" height="8" rx="4" fill="#ffffff" opacity="0.3" />
      <rect x="20" y="128" width="240" height="12" rx="6" fill="#101828" opacity="0.05" />
    </svg>
  )
}
