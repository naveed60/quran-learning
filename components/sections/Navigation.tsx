"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Menu } from "lucide-react"
import { useEffect } from "react"
import { useAuth } from "@/hooks/useAuth"

export default function Navigation() {
  const pathname = usePathname()
  const { user, logout, isAuthenticated } = useAuth()

  // Handle smooth scroll for hash links after navigation
  useEffect(() => {
    const handleHashScroll = () => {
      if (pathname === "/" && window.location.hash) {
        const hash = window.location.hash.substring(1)
        const element = document.getElementById(hash)
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
          }, 300)
        }
      }
    }

    // Handle initial load with hash
    handleHashScroll()

    // Handle hash change
    window.addEventListener("hashchange", handleHashScroll)
    
    return () => {
      window.removeEventListener("hashchange", handleHashScroll)
    }
  }, [pathname])

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    if (pathname === "/") {
      // If already on home page, just scroll
      e.preventDefault()
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
        // Update URL without reload
        window.history.pushState(null, "", `/#${section}`)
      }
    }
    // If on another page, let Next.js navigate to /#section
    // The useEffect will handle scrolling after navigation
  }

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-emerald-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-emerald-600" />
              <span className="text-xl font-bold text-gray-900">Noor ul Hassan Quran Academy</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/#courses" 
              onClick={(e) => handleSectionClick(e, "courses")}
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Courses
            </Link>
            <Link 
              href="/#about" 
              onClick={(e) => handleSectionClick(e, "about")}
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              About
            </Link>
            <Link href="/teachers" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Teachers
            </Link>
            <Link 
              href="/#testimonials" 
              onClick={(e) => handleSectionClick(e, "testimonials")}
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Reviews
            </Link>
            <Link 
              href="/#contact" 
              onClick={(e) => handleSectionClick(e, "contact")}
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-3">
            {isAuthenticated ? (
              <>
                <span className="hidden sm:inline-flex text-sm text-gray-600">
                  Hi, <span className="font-semibold text-gray-900 ml-1">{user?.name.split(" ")[0]}</span>
                </span>
                <Button
                  variant="outline"
                  className="text-emerald-700 border-emerald-200 hover:bg-emerald-50"
                  onClick={logout}
                >
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <Button
                  asChild
                  variant="ghost"
                  className="hidden sm:inline-flex text-emerald-600 hover:text-emerald-700"
                >
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white">
                  <Link href="/register">Join Now</Link>
                </Button>
              </>
            )}
            <Button variant="ghost" className="md:hidden" size="sm" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
