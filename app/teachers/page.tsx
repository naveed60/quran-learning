"use client"

import Navigation from "@/components/sections/Navigation"
import Footer from "@/components/sections/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, BookOpen, Award, Users, Clock, Globe } from "lucide-react"

const teachers = [
  {
    id: 1,
    name: "Maulana Noor ul Hassan",
    title: "Senior Islamic Scholar",
    image: "/images/teacher1.jpg",
    expertise: [
      "Quran Recitation & Tajweed",
      "Darse Nizami Curriculum",
      "Islamic Jurisprudence (Fiqh)",
      "Hadith Studies",
      "Tafseer (Quranic Exegesis)"
    ],
    qualifications: [
      "Graduate from Darul Uloom Deoband",
      "15+ years of teaching experience",
      "Certified Hafiz-e-Quran",
      "Specialist in Classical Islamic Studies"
    ],
    experience: "15+ years",
    students: "500+",
    rating: "4.9",
    description: "Maulana Noor ul Hassan is a distinguished Islamic scholar with extensive expertise in traditional Islamic education. He specializes in teaching the Darse Nizami curriculum and has guided hundreds of students in their Quranic and Islamic studies journey."
  },
  {
    id: 2,
    name: "Maulana Ahmed Ali",
    title: "Tajweed & Recitation Expert",
    image: "/images/teacher2.jpg",
    expertise: [
      "Advanced Tajweed Rules",
      "Quran Memorization (Hifz)",
      "Arabic Phonetics",
      "Qira'at (Recitation Styles)",
      "Voice Training for Recitation"
    ],
    qualifications: [
      "Certified Tajweed Teacher",
      "10+ years of Hifz teaching",
      "Graduate from Al-Azhar University",
      "Expert in Multiple Qira'at"
    ],
    experience: "10+ years",
    students: "300+",
    rating: "4.8",
    description: "Maulana Ahmed Ali is renowned for his exceptional skills in teaching Tajweed and Quran memorization. His patient and methodical approach has helped numerous students achieve fluency in Quranic recitation and complete their Hifz journey."
  },
  {
    id: 3,
    name: "Ustadha Fatima Khan",
    title: "Women's Islamic Education Specialist",
    image: "/images/teacher3.jpg",
    expertise: [
      "Women's Islamic Studies",
      "Quran Recitation for Women",
      "Islamic History",
      "Family & Social Issues in Islam",
      "Children's Islamic Education"
    ],
    qualifications: [
      "Graduate from Jamia Al-Karam",
      "8+ years of teaching experience",
      "Specialized in Women's Education",
      "Certified in Child Psychology"
    ],
    experience: "8+ years",
    students: "250+",
    rating: "4.9",
    description: "Ustadha Fatima Khan brings a compassionate and understanding approach to teaching Islamic studies, particularly for women and children. She creates a comfortable learning environment and specializes in addressing contemporary issues from an Islamic perspective."
  },
  {
    id: 4,
    name: "Maulana Muhammad Hassan",
    title: "Norani Qaida & Beginner Specialist",
    image: "/images/teacher4.jpg",
    expertise: [
      "Norani Qaida Teaching",
      "Arabic Alphabet & Pronunciation",
      "Beginner Quran Reading",
      "Children's Quran Education",
      "Interactive Learning Methods"
    ],
    qualifications: [
      "Certified in Early Childhood Education",
      "7+ years of teaching experience",
      "Specialist in Beginner Programs",
      "Expert in Modern Teaching Techniques"
    ],
    experience: "7+ years",
    students: "400+",
    rating: "4.7",
    description: "Maulana Muhammad Hassan excels in teaching beginners and children. His innovative and engaging teaching methods make learning Arabic and Quran accessible and enjoyable for students of all ages, especially those just starting their Islamic education journey."
  },
  {
    id: 5,
    name: "Maulana Zain ul Abideen",
    title: "Shariah & Contemporary Issues Expert",
    image: "/images/teacher5.jpg",
    expertise: [
      "Islamic Jurisprudence (Fiqh)",
      "Contemporary Shariah Issues",
      "Islamic Law & Ethics",
      "Comparative Fiqh",
      "Fatwa & Legal Consultation"
    ],
    qualifications: [
      "Graduate from Darul Uloom Karachi",
      "12+ years of teaching experience",
      "Specialist in Contemporary Fiqh",
      "Published Scholar in Islamic Law"
    ],
    experience: "12+ years",
    students: "200+",
    rating: "4.8",
    description: "Maulana Zain ul Abideen is an expert in Islamic jurisprudence and contemporary Islamic issues. He helps students understand complex Shariah matters and provides guidance on applying Islamic principles to modern-day situations."
  },
  {
    id: 6,
    name: "Ustadha Ayesha Malik",
    title: "Online Learning & Technology Specialist",
    image: "/images/teacher6.jpg",
    expertise: [
      "Online Quran Teaching",
      "Digital Learning Tools",
      "Interactive Quran Classes",
      "Progress Tracking & Assessment",
      "Flexible Scheduling"
    ],
    qualifications: [
      "Certified Online Educator",
      "6+ years of online teaching",
      "Expert in Educational Technology",
      "Specialist in Remote Learning"
    ],
    experience: "6+ years",
    students: "350+",
    rating: "4.9",
    description: "Ustadha Ayesha Malik is a pioneer in online Islamic education. She leverages modern technology to create engaging and effective learning experiences for students worldwide, making Quranic education accessible to everyone regardless of location."
  }
]

export default function TeachersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Expert Teachers</h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
              Learn from qualified Islamic scholars and certified Quran teachers with years of experience
            </p>
          </div>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher) => (
              <Card key={teacher.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-emerald-100 hover:border-emerald-300">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Users className="h-10 w-10 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-gray-900">{teacher.name}</CardTitle>
                      <CardDescription className="text-emerald-600 font-medium">{teacher.title}</CardDescription>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{teacher.description}</p>
                </CardHeader>
                <CardContent>
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-emerald-50 rounded-lg">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Clock className="h-4 w-4 text-emerald-600 mr-1" />
                      </div>
                      <div className="text-xs text-gray-600">Experience</div>
                      <div className="text-sm font-semibold text-gray-900">{teacher.experience}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Users className="h-4 w-4 text-emerald-600 mr-1" />
                      </div>
                      <div className="text-xs text-gray-600">Students</div>
                      <div className="text-sm font-semibold text-gray-900">{teacher.students}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Award className="h-4 w-4 text-emerald-600 mr-1" />
                      </div>
                      <div className="text-xs text-gray-600">Rating</div>
                      <div className="text-sm font-semibold text-gray-900">{teacher.rating}★</div>
                    </div>
                  </div>

                  {/* Qualifications */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                      <GraduationCap className="h-4 w-4 text-emerald-600 mr-2" />
                      Qualifications
                    </h4>
                    <ul className="space-y-2">
                      {teacher.qualifications.map((qual, index) => (
                        <li key={index} className="text-xs text-gray-600 flex items-start">
                          <span className="text-emerald-500 mr-2">•</span>
                          <span>{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expertise */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                      <BookOpen className="h-4 w-4 text-emerald-600 mr-2" />
                      Areas of Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {teacher.expertise.map((skill, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Teachers Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Learn From Our Teachers?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our teachers are carefully selected for their expertise, dedication, and commitment to Islamic education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-2 border-emerald-100">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Certified Scholars</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  All teachers are graduates from renowned Islamic institutions
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-emerald-100">
              <CardHeader>
                <Award className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Years of Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Combined experience of 50+ years in Islamic education
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-emerald-100">
              <CardHeader>
                <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <CardTitle className="text-lg">2000+ Students</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Successfully taught thousands of students worldwide
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-emerald-100">
              <CardHeader>
                <Globe className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Global Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Teaching students from UK, USA, and around the world
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

