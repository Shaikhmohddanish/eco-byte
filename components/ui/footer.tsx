"use client"

import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src="/logo.png" alt="Eco-Byte Solution Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h5 className="font-bold text-xl">ECO-BYTE SOLUTION</h5>
                <p className="text-sm text-gray-400">WHOLESALE AND RETAIL</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Your trusted technology partner in Mumbai. We provide comprehensive IT solutions with a focus on
              quality, reliability, and customer satisfaction.
            </p>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-4">Our Services</h5>
            <ul className="space-y-2 text-gray-400">
              <Link href="/services/laptop-services">
                <li className="hover:text-white transition-colors cursor-pointer">Laptop & Desktop Sales</li>
              </Link>
              <Link href="/services/desktop-solutions">
                <li className="hover:text-white transition-colors cursor-pointer">Desktop Solutions</li>
              </Link>
              <Link href="/services/computer-repair">
                <li className="hover:text-white transition-colors cursor-pointer">Computer Repair</li>
              </Link>
              <Link href="/services/cctv-installation">
                <li className="hover:text-white transition-colors cursor-pointer">CCTV Installation</li>
              </Link>
              <Link href="/services/server-solutions">
                <li className="hover:text-white transition-colors cursor-pointer">Server Solutions</li>
              </Link>
              <Link href="/services/amc-services">
                <li className="hover:text-white transition-colors cursor-pointer">AMC Services</li>
              </Link>
              <Link href="/services/equipment-rental">
                <li className="hover:text-white transition-colors cursor-pointer">Equipment Rental</li>
              </Link>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-4">Contact Info</h5>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span>9326620089</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-emerald-400" />
                <span>ecobytesolution@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-sm">Sakinaka, Mumbai - 400 072</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
          <p>&copy; 2024 Eco-Byte Solution. All rights reserved. | Professional IT Solutions Provider</p>
        </div>
      </div>
    </footer>
  )
}
