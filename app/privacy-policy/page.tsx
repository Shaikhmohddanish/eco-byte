"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, UserCheck, FileText, Phone, Mail, MapPin, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"

export default function PrivacyPolicyPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header/>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-cyan-50 to-emerald-50 py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-6">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-500">Last updated: January 1, 2024</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Table of Contents */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-lg">Table of Contents</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <a
                      href="#information-collection"
                      className="block text-sm text-gray-600 hover:text-emerald-600 transition-colors"
                      onClick={(e) => {
                        e.preventDefault()
                        const element = document.getElementById("information-collection")
                        if (element) {
                          const headerOffset = 100
                          const elementPosition = element.getBoundingClientRect().top
                          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                          window.scrollTo({ top: offsetPosition, behavior: "smooth" })
                        }
                      }}
                    >
                      Information We Collect
                    </a>
                    <a
                      href="#information-use"
                      className="block text-sm text-gray-600 hover:text-emerald-600 transition-colors"
                      onClick={(e) => {
                        e.preventDefault()
                        const element = document.getElementById("information-use")
                        if (element) {
                          const headerOffset = 100
                          const elementPosition = element.getBoundingClientRect().top
                          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                          window.scrollTo({ top: offsetPosition, behavior: "smooth" })
                        }
                      }}
                    >
                      How We Use Information
                    </a>
                    <a
                      href="#information-sharing"
                      className="block text-sm text-gray-600 hover:text-emerald-600 transition-colors"
                      onClick={(e) => {
                        e.preventDefault()
                        const element = document.getElementById("information-sharing")
                        if (element) {
                          const headerOffset = 100
                          const elementPosition = element.getBoundingClientRect().top
                          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                          window.scrollTo({ top: offsetPosition, behavior: "smooth" })
                        }
                      }}
                    >
                      Information Sharing
                    </a>
                    <a
                      href="#data-security"
                      className="block text-sm text-gray-600 hover:text-emerald-600 transition-colors"
                      onClick={(e) => {
                        e.preventDefault()
                        const element = document.getElementById("data-security")
                        if (element) {
                          const headerOffset = 100
                          const elementPosition = element.getBoundingClientRect().top
                          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                          window.scrollTo({ top: offsetPosition, behavior: "smooth" })
                        }
                      }}
                    >
                      Data Security
                    </a>
                    <a
                      href="#cookies"
                      className="block text-sm text-gray-600 hover:text-emerald-600 transition-colors"
                      onClick={(e) => {
                        e.preventDefault()
                        const element = document.getElementById("cookies")
                        if (element) {
                          const headerOffset = 100
                          const elementPosition = element.getBoundingClientRect().top
                          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                          window.scrollTo({ top: offsetPosition, behavior: "smooth" })
                        }
                      }}
                    >
                      Cookies & Tracking
                    </a>
                    <a
                      href="#your-rights"
                      className="block text-sm text-gray-600 hover:text-emerald-600 transition-colors"
                      onClick={(e) => {
                        e.preventDefault()
                        const element = document.getElementById("your-rights")
                        if (element) {
                          const headerOffset = 100
                          const elementPosition = element.getBoundingClientRect().top
                          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                          window.scrollTo({ top: offsetPosition, behavior: "smooth" })
                        }
                      }}
                    >
                      Your Rights
                    </a>
                    <a
                      href="#contact"
                      className="block text-sm text-gray-600 hover:text-emerald-600 transition-colors"
                      onClick={(e) => {
                        e.preventDefault()
                        const element = document.getElementById("contact")
                        if (element) {
                          const headerOffset = 100
                          const elementPosition = element.getBoundingClientRect().top
                          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                          window.scrollTo({ top: offsetPosition, behavior: "smooth" })
                        }
                      }}
                    >
                      Contact Us
                    </a>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3 space-y-8">
                <div className="prose prose-lg max-w-none">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 mb-8">
                    <h3 className="text-lg font-semibold text-emerald-800 mb-2">Our Commitment to Privacy</h3>
                    <p className="text-emerald-700">
                      At Eco-Byte Solution, we are committed to protecting your privacy and ensuring the security of
                      your personal information. This policy explains how we handle your data when you use our services
                      or visit our website.
                    </p>
                  </div>

                  <section id="information-collection" className="mb-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <Eye className="h-6 w-6 text-emerald-600" />
                      <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
                    <p className="text-gray-600 mb-4">We collect information you provide directly to us, including:</p>
                    <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                      <li>Name and contact information (phone number, email address)</li>
                      <li>Business information and service requirements</li>
                      <li>Payment information for transactions</li>
                      <li>Communication preferences</li>
                      <li>Service history and support requests</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
                    <p className="text-gray-600 mb-4">
                      When you visit our website or use our services, we may automatically collect:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                      <li>Device information (IP address, browser type, operating system)</li>
                      <li>Usage data (pages visited, time spent, click patterns)</li>
                      <li>Location information (general geographic location)</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </section>

                  <section id="information-use" className="mb-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <UserCheck className="h-6 w-6 text-emerald-600" />
                      <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
                    </div>

                    <p className="text-gray-600 mb-4">We use the information we collect to:</p>
                    <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                      <li>Provide and improve our IT services and support</li>
                      <li>Process transactions and manage your account</li>
                      <li>Communicate with you about services, updates, and promotions</li>
                      <li>Respond to your inquiries and provide customer support</li>
                      <li>Analyze usage patterns to improve our website and services</li>
                      <li>Comply with legal obligations and protect our rights</li>
                      <li>Prevent fraud and ensure security</li>
                    </ul>
                  </section>

                  <section id="information-sharing" className="mb-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <FileText className="h-6 w-6 text-emerald-600" />
                      <h2 className="text-2xl font-bold text-gray-900">Information Sharing and Disclosure</h2>
                    </div>

                    <p className="text-gray-600 mb-4">
                      We do not sell, trade, or rent your personal information to third parties. We may share your
                      information only in the following circumstances:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                      <li>
                        <strong>Service Providers:</strong> With trusted partners who assist in providing our services
                      </li>
                      <li>
                        <strong>Legal Requirements:</strong> When required by law or to protect our rights
                      </li>
                      <li>
                        <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
                      </li>
                      <li>
                        <strong>Consent:</strong> When you have given explicit consent for sharing
                      </li>
                    </ul>
                  </section>

                  <section id="data-security" className="mb-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <Lock className="h-6 w-6 text-emerald-600" />
                      <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
                    </div>

                    <p className="text-gray-600 mb-4">
                      We implement appropriate technical and organizational measures to protect your personal
                      information:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                      <li>Encryption of sensitive data in transit and at rest</li>
                      <li>Regular security assessments and updates</li>
                      <li>Access controls and employee training</li>
                      <li>Secure data storage and backup procedures</li>
                      <li>Incident response and breach notification procedures</li>
                    </ul>
                  </section>

                  <section id="cookies" className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>

                    <p className="text-gray-600 mb-4">
                      We use cookies and similar technologies to enhance your experience:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                      <li>
                        <strong>Essential Cookies:</strong> Required for website functionality
                      </li>
                      <li>
                        <strong>Analytics Cookies:</strong> Help us understand how you use our website
                      </li>
                      <li>
                        <strong>Preference Cookies:</strong> Remember your settings and preferences
                      </li>
                      <li>
                        <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements
                      </li>
                    </ul>
                    <p className="text-gray-600">You can control cookie settings through your browser preferences.</p>
                  </section>

                  <section id="your-rights" className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights and Choices</h2>

                    <p className="text-gray-600 mb-4">
                      You have the following rights regarding your personal information:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                      <li>
                        <strong>Access:</strong> Request a copy of your personal information
                      </li>
                      <li>
                        <strong>Correction:</strong> Update or correct inaccurate information
                      </li>
                      <li>
                        <strong>Deletion:</strong> Request deletion of your personal information
                      </li>
                      <li>
                        <strong>Portability:</strong> Receive your data in a portable format
                      </li>
                      <li>
                        <strong>Opt-out:</strong> Unsubscribe from marketing communications
                      </li>
                      <li>
                        <strong>Restriction:</strong> Limit how we process your information
                      </li>
                    </ul>
                  </section>

                  <section id="contact" className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>

                    <p className="text-gray-600 mb-4">
                      If you have questions about this Privacy Policy or want to exercise your rights, please contact
                      us:
                    </p>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start space-x-3">
                          <Phone className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-900">Phone</p>
                            <p className="text-gray-600">9326620089</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Mail className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-900">Email</p>
                            <p className="text-gray-600">ecobytesolution@gmail.com</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-900 mb-1">Address</p>
                            <p className="text-gray-600">
                              Shop No.10, Yaari Bldg., Opp. D'souza Nagar,
                              <br />
                              90 feet Road, Sakinaka, Mumbai - 400 072
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-cyan-800 mb-2">Policy Updates</h3>
                    <p className="text-cyan-700">
                      We may update this Privacy Policy from time to time. We will notify you of any material changes by
                      posting the new policy on our website and updating the "Last updated" date.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 left-6 z-50">
        <a
          href="tel:+919326620089"
          className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Call us"
        >
          <Phone className="h-6 w-6 group-hover:animate-pulse" />
        </a>
      </div>

      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/919326620089?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20IT%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Chat on WhatsApp"
        >
          <svg
            className="h-7 w-7 group-hover:animate-bounce"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.106" />
          </svg>
        </a>
      </div>
    </div>
  )
}
