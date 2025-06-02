"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, AlertTriangle, Shield, Users, Phone, Mail, MapPin, FileText, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import Footer from "@/components/ui/footer"

export default function TermsAndConditionsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              href="/"
              className="flex items-center space-x-3 lg:space-x-4"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center">
                <img src="/logo.png" alt="Eco-Byte Solution Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h1 className="text-lg lg:text-2xl font-bold text-gray-900 tracking-tight">ECO-BYTE SOLUTION</h1>
                <p className="text-xs lg:text-sm text-gray-600 font-medium">WHOLESALE AND RETAIL</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <nav className="flex items-center space-x-6">
                <Link href="/#services" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                  Services
                </Link>
                <Link href="/#brands" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                  Brands
                </Link>
                <Link href="/#contact" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                  Contact
                </Link>
              </nav>
              <div className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                <Phone className="h-4 w-4 text-emerald-600" />
                <span>9326620089</span>
              </div>
              <Link href="/">
                <Button className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white shadow-lg">
                  Back to Home
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 py-4">
              <nav className="flex flex-col space-y-4">
                <Link href="/#services" className="text-gray-700 hover:text-emerald-600 font-medium">
                  Services
                </Link>
                <Link href="/#brands" className="text-gray-700 hover:text-emerald-600 font-medium">
                  Brands
                </Link>
                <Link href="/#contact" className="text-gray-700 hover:text-emerald-600 font-medium">
                  Contact
                </Link>
                <div className="flex items-center space-x-2 text-sm font-medium text-gray-700 pt-2 border-t border-gray-100">
                  <Phone className="h-4 w-4 text-emerald-600" />
                  <span>9326620089</span>
                </div>
                <Link href="/">
                  <Button className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white w-full">
                    Back to Home
                  </Button>
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-cyan-50 to-emerald-50 py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl mb-6">
              <Scale className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-6">
              Please read these terms carefully before using our services.
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
                      href="#acceptance"
                      className="block text-sm text-gray-600 hover:text-emerald-600 transition-colors"
                      onClick={(e) => {
                        e.preventDefault()
                        const element = document.getElementById("acceptance")
                        if (element) {
                          const headerOffset = 100
                          const elementPosition = element.getBoundingClientRect().top
                          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                          window.scrollTo({ top: offsetPosition, behavior: "smooth" })
                        }
                      }}
                    >
                      Acceptance of Terms
                    </a>
                    <a
                      href="#services"
                      className="block text-sm text-gray-600 hover:text-emerald-600 transition-colors"
                      onClick={(e) => {
                        e.preventDefault()
                        const element = document.getElementById("services")
                        if (element) {
                          const headerOffset = 100
                          const elementPosition = element.getBoundingClientRect().top
                          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                          window.scrollTo({ top: offsetPosition, behavior: "smooth" })
                        }
                      }}
                    >
                      Our Services
                    </a>
                    <a
                      href="#user-responsibilities"
                      className="block text-sm text-gray-600 hover:text-emerald-600 transition-colors"
                      onClick={(e) => {
                        e.preventDefault()
                        const element = document.getElementById("user-responsibilities")
                        if (element) {
                          const headerOffset = 100
                          const elementPosition = element.getBoundingClientRect().top
                          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                          window.scrollTo({ top: offsetPosition, behavior: "smooth" })
                        }
                      }}
                    >
                      User Responsibilities
                    </a>
                    <a
                      href="#payment-terms"
                      className="block text-sm text-gray-600 hover:text-emerald-600 transition-colors"
                      onClick={(e) => {
                        e.preventDefault()
                        const element = document.getElementById("payment-terms")
                        if (element) {
                          const headerOffset = 100
                          const elementPosition = element.getBoundingClientRect().top
                          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                          window.scrollTo({ top: offsetPosition, behavior: "smooth" })
                        }
                      }}
                    >
                      Payment Terms
                    </a>
                    <a
                      href="#warranties"
                      className="block text-sm text-gray-600 hover:text-emerald-600 transition-colors"
                      onClick={(e) => {
                        e.preventDefault()
                        const element = document.getElementById("warranties")
                        if (element) {
                          const headerOffset = 100
                          const elementPosition = element.getBoundingClientRect().top
                          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                          window.scrollTo({ top: offsetPosition, behavior: "smooth" })
                        }
                      }}
                    >
                      Warranties & Disclaimers
                    </a>
                    <a
                      href="#limitation-liability"
                      className="block text-sm text-gray-600 hover:text-emerald-600 transition-colors"
                      onClick={(e) => {
                        e.preventDefault()
                        const element = document.getElementById("limitation-liability")
                        if (element) {
                          const headerOffset = 100
                          const elementPosition = element.getBoundingClientRect().top
                          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                          window.scrollTo({ top: offsetPosition, behavior: "smooth" })
                        }
                      }}
                    >
                      Limitation of Liability
                    </a>
                    <a
                      href="#termination"
                      className="block text-sm text-gray-600 hover:text-emerald-600 transition-colors"
                      onClick={(e) => {
                        e.preventDefault()
                        const element = document.getElementById("termination")
                        if (element) {
                          const headerOffset = 100
                          const elementPosition = element.getBoundingClientRect().top
                          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                          window.scrollTo({ top: offsetPosition, behavior: "smooth" })
                        }
                      }}
                    >
                      Termination
                    </a>
                    <a
                      href="#governing-law"
                      className="block text-sm text-gray-600 hover:text-emerald-600 transition-colors"
                      onClick={(e) => {
                        e.preventDefault()
                        const element = document.getElementById("governing-law")
                        if (element) {
                          const headerOffset = 100
                          const elementPosition = element.getBoundingClientRect().top
                          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                          window.scrollTo({ top: offsetPosition, behavior: "smooth" })
                        }
                      }}
                    >
                      Governing Law
                    </a>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3 space-y-8">
                <div className="prose prose-lg max-w-none">
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-amber-800 mb-2">Important Notice</h3>
                        <p className="text-amber-700">
                          By using our services or visiting our website, you agree to be bound by these Terms and
                          Conditions. If you do not agree with any part of these terms, please do not use our services.
                        </p>
                      </div>
                    </div>
                  </div>

                  <section id="acceptance" className="mb-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <FileText className="h-6 w-6 text-emerald-600" />
                      <h2 className="text-2xl font-bold text-gray-900">Acceptance of Terms</h2>
                    </div>

                    <p className="text-gray-600 mb-4">
                      These Terms and Conditions ("Terms") govern your use of Eco-Byte Solution's services, including
                      but not limited to:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                      <li>Computer sales, repair, and maintenance services</li>
                      <li>CCTV installation and monitoring services</li>
                      <li>Server and workstation solutions</li>
                      <li>Annual Maintenance Contracts (AMC)</li>
                      <li>Equipment rental services</li>
                      <li>Our website and online platforms</li>
                    </ul>
                    <p className="text-gray-600">
                      By engaging our services, you acknowledge that you have read, understood, and agree to be bound by
                      these Terms.
                    </p>
                  </section>

                  <section id="services" className="mb-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <Users className="h-6 w-6 text-emerald-600" />
                      <h2 className="text-2xl font-bold text-gray-900">Our Services</h2>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Service Description</h3>
                    <p className="text-gray-600 mb-4">
                      Eco-Byte Solution provides comprehensive IT solutions including:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                      <li>
                        <strong>Sales:</strong> New and refurbished computers, laptops, servers, and accessories
                      </li>
                      <li>
                        <strong>Repair Services:</strong> Hardware and software troubleshooting and repair
                      </li>
                      <li>
                        <strong>Installation:</strong> CCTV systems, network setup, and software installation
                      </li>
                      <li>
                        <strong>Maintenance:</strong> Regular maintenance and support services
                      </li>
                      <li>
                        <strong>Consultation:</strong> IT consulting and system recommendations
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Service Availability</h3>
                    <p className="text-gray-600 mb-4">
                      We strive to provide uninterrupted service but cannot guarantee 100% availability. Services may be
                      temporarily unavailable due to maintenance, technical issues, or circumstances beyond our control.
                    </p>
                  </section>

                  <section id="user-responsibilities" className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>

                    <p className="text-gray-600 mb-4">As a user of our services, you agree to:</p>
                    <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                      <li>Provide accurate and complete information when requested</li>
                      <li>Use our services only for lawful purposes</li>
                      <li>Respect intellectual property rights</li>
                      <li>Not interfere with or disrupt our services</li>
                      <li>Maintain the confidentiality of any login credentials</li>
                      <li>Backup your data before any repair or maintenance service</li>
                      <li>Pay for services according to agreed terms</li>
                    </ul>
                  </section>

                  <section id="payment-terms" className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Pricing and Quotes</h3>
                    <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                      <li>All prices are quoted in Indian Rupees (INR)</li>
                      <li>Quotes are valid for 30 days unless otherwise specified</li>
                      <li>Prices may vary based on market conditions and availability</li>
                      <li>Additional charges may apply for expedited services</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Payment Methods</h3>
                    <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                      <li>Cash payments at our store location</li>
                      <li>Bank transfers and online payments</li>
                      <li>Cheques (subject to clearance)</li>
                      <li>Credit/Debit cards (where applicable)</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Payment Schedule</h3>
                    <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                      <li>Advance payment may be required for certain services</li>
                      <li>Full payment is due upon completion of service</li>
                      <li>AMC payments are due as per contract terms</li>
                      <li>Late payment charges may apply after 30 days</li>
                    </ul>
                  </section>

                  <section id="warranties" className="mb-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <Shield className="h-6 w-6 text-emerald-600" />
                      <h2 className="text-2xl font-bold text-gray-900">Warranties and Disclaimers</h2>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Product Warranties</h3>
                    <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                      <li>New products carry manufacturer warranties</li>
                      <li>Refurbished products carry limited warranties as specified</li>
                      <li>Warranty terms vary by product and manufacturer</li>
                      <li>Warranty claims must be made within the specified period</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Service Warranties</h3>
                    <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                      <li>Repair services carry a 30-day warranty on parts and labor</li>
                      <li>Installation services are warranted for 90 days</li>
                      <li>Warranty does not cover damage due to misuse or accidents</li>
                      <li>Software issues may require additional charges</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Disclaimers</h3>
                    <p className="text-gray-600 mb-4">
                      Our services are provided "as is" without any express or implied warranties beyond those stated
                      above. We disclaim all warranties including but not limited to merchantability, fitness for a
                      particular purpose, and non-infringement.
                    </p>
                  </section>

                  <section id="limitation-liability" className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>

                    <p className="text-gray-600 mb-4">
                      To the maximum extent permitted by law, Eco-Byte Solution shall not be liable for:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                      <li>Data loss or corruption (customers must backup their data)</li>
                      <li>Indirect, incidental, or consequential damages</li>
                      <li>Loss of profits, revenue, or business opportunities</li>
                      <li>Damages exceeding the amount paid for the specific service</li>
                      <li>Issues arising from third-party products or services</li>
                      <li>Force majeure events beyond our reasonable control</li>
                    </ul>
                  </section>

                  <section id="termination" className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>

                    <p className="text-gray-600 mb-4">
                      Either party may terminate service agreements under the following conditions:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                      <li>Breach of terms and conditions</li>
                      <li>Non-payment of dues</li>
                      <li>Mutual agreement between parties</li>
                      <li>30 days written notice for ongoing contracts</li>
                    </ul>
                    <p className="text-gray-600">
                      Upon termination, all outstanding payments become immediately due, and access to services will be
                      discontinued.
                    </p>
                  </section>

                  <section id="governing-law" className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law and Jurisdiction</h2>

                    <p className="text-gray-600 mb-4">
                      These Terms and Conditions are governed by the laws of India. Any disputes arising from these
                      terms or our services shall be subject to the exclusive jurisdiction of the courts in Mumbai,
                      Maharashtra.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Dispute Resolution</h3>
                    <p className="text-gray-600 mb-4">
                      We encourage resolving disputes through direct communication. If a dispute cannot be resolved
                      amicably, it may be subject to mediation or arbitration as per Indian law.
                    </p>
                  </section>

                  <div className="bg-gray-50 rounded-lg p-6 mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                    <p className="text-gray-600 mb-4">
                      For questions about these Terms and Conditions, please contact us:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-start space-x-3">
                        <Phone className="h-5 w-5 text-emerald-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Phone</p>
                          <p className="text-gray-600">9326620089 | 9819989942</p>
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

                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-emerald-800 mb-2">Changes to Terms</h3>
                    <p className="text-emerald-700">
                      We reserve the right to modify these Terms and Conditions at any time. Changes will be effective
                      immediately upon posting on our website. Continued use of our services constitutes acceptance of
                      the modified terms.
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
