"use client"

import { BookOpen, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import Link from "next/link"

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            </ul>
          </div>

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
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-emerald-400 flex-shrink-0" />
                <span className="text-sm">imnaveed60@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-emerald-400 flex-shrink-0" />
                <span className="text-sm">+923244026426</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-emerald-400 flex-shrink-0" />
                <span className="text-sm">Available Worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} QuranAcademy. All rights reserved. Spreading Islamic knowledge with love
            and dedication.
          </p>
        </div>
      </div>
    </footer>
  )
}