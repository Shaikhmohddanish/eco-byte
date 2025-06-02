"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Package,
  Calendar,
  CheckCircle,
  Menu,
  X,
  ArrowRight,
  AlertTriangle,
  Clock,
  Wrench,
  Zap,
} from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"

export default function EquipmentRentalPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const rentalOptions = [
    {
      icon: <Package className="h-8 w-8" />,
      title: "Laptop & Desktop Rental",
      description: "Short and long-term rental of high-performance laptops and desktops for business or events.",
      features: ["Latest Models", "Flexible Terms", "Bulk Discounts", "Delivery & Setup"],
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Projector & Display Rental",
      description: "Rent projectors, monitors, and display screens for meetings, conferences, and exhibitions.",
      features: ["HD/4K Projectors", "Large Displays", "Onsite Support", "Accessories Included"],
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Networking Equipment Rental",
      description: "Routers, switches, and WiFi solutions for temporary setups and events.",
      features: ["Enterprise Routers", "Managed Switches", "WiFi Access Points", "Configuration Support"],
    },
  ]

  // Add: Why Choose Our Equipment Rental
  const whyChooseUs = [
    {
      title: "Wide Range of Equipment",
      description: "From laptops to networking gear, we offer the latest and most reliable rental options.",
    },
    {
      title: "Flexible Rental Terms",
      description: "Daily, weekly, monthly, or long-term rentals to suit your project or event needs.",
    },
    {
      title: "Expert Support",
      description: "Our team handles delivery, setup, and technical support throughout your rental period.",
    },
    {
      title: "Competitive Pricing",
      description: "Transparent, affordable rates with no hidden fees. Bulk discounts available.",
    },
  ]

  // Supported Equipment/Brands for Rental
  const supportedEquipment = [
    "Laptops", "Desktops", "Projectors", "Monitors", "Routers", "Switches", "WiFi Devices", "Printers"
  ];
  // Common Rental Scenarios
  const commonScenarios = [
    { issue: "Short-Term Office Setup", solution: "Bulk laptop/desktop rental with delivery and setup" },
    { issue: "Corporate Events", solution: "Projector and display rental for presentations" },
    { issue: "Temporary Staff", solution: "Flexible rental terms for additional workstations" },
    { issue: "Remote Work", solution: "Home delivery and support for remote employees" },
    { issue: "Network Expansion", solution: "Router and switch rental for temporary locations" },
    { issue: "Training Sessions", solution: "Multiple device rental with on-site support" },
  ];

  // Banner details for Equipment Rental
  const banner = {
    title: "IT Equipment Rental Services",
    subtitle: "Flexible Rentals for Every Need",
    description: "Get the latest laptops, desktops, projectors, and networking equipment on rent for your business, events, or projects. Fast delivery, expert support, and affordable terms.",
    image: "/placeholder.svg", // Use a relevant image or placeholder
    badge: "Professional Equipment Rental",
    warranty: {
      icon: <CheckCircle className="h-6 w-6 text-emerald-600" />,
      title: "Full Support",
      desc: "Throughout your rental period"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-cyan-50 to-emerald-50 py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm">
                <Wrench className="h-4 w-4 text-emerald-600" />
                <span className="text-sm font-medium text-gray-700">Professional Equipment Rental</span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Flexible
                <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                  Equipment Rental
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                Get the latest IT equipment on rent for your business, events, or projects. Affordable terms, fast delivery, and expert support.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Latest Models
                </Badge>
                <Badge className="bg-cyan-100 text-cyan-700 border-cyan-200">
                  <Clock className="h-3 w-3 mr-1" />
                  Flexible Terms
                </Badge>
                <Badge className="bg-gray-100 text-gray-700 border-gray-200">
                  <Zap className="h-3 w-3 mr-1" />
                  Expert Support
                </Badge>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white shadow-lg"
                  onClick={() => window.location.href = "tel:9326620089"}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 9326620089
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-900 hover:bg-gray-50"
                  onClick={() => alert('Rental quote request submitted!')}
                >
                  Request Rental Quote
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Equipment Rental"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Full Support</p>
                    <p className="text-sm text-gray-600">Throughout your rental period</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Equipment Rental Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Rent IT equipment for your business, events, or projects. Flexible terms and full support included.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {rentalOptions.map((option, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    {option.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{option.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-base text-gray-600 leading-relaxed">{option.description}</p>
                  <div className="space-y-2">
                    {option.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Supported Equipment Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Supported Rental Equipment</h2>
            <p className="text-lg text-gray-600">We offer a wide range of IT equipment for rent</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-8">
            {supportedEquipment.map((item, index) => (
              <div key={index} className="group">
                <div className="bg-white hover:bg-gradient-to-br hover:from-emerald-50 hover:to-cyan-50 rounded-xl p-4 lg:p-6 h-20 flex items-center justify-center transition-all duration-300 border border-gray-100 hover:border-emerald-200 hover:shadow-lg">
                  <span className="font-bold text-gray-700 group-hover:text-emerald-700 text-xs lg:text-sm text-center transition-colors">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="py-12 bg-gray-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Rent from Eco-Byte Solution?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow p-6 text-center">
                <h4 className="font-semibold text-lg text-emerald-700 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Common Scenarios Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Common Rental Scenarios</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">We provide solutions for a variety of business and event needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonScenarios.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
                    <Wrench className="h-5 w-5 text-emerald-600 mr-2" />
                    {item.issue}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.solution}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How Our Rental Process Works</h3>
          <ol className="max-w-2xl mx-auto space-y-6 list-decimal list-inside text-gray-700">
            <li><span className="font-semibold text-emerald-700">Inquiry:</span> Tell us your equipment needs and rental duration.</li>
            <li><span className="font-semibold text-emerald-700">Quotation:</span> Receive a transparent quote with all details and options.</li>
            <li><span className="font-semibold text-emerald-700">Delivery & Setup:</span> We deliver and set up the equipment at your location.</li>
            <li><span className="font-semibold text-emerald-700">Support & Return:</span> Enjoy full support during rental. We collect the equipment at the end of your term.</li>
          </ol>
        </div>
      </section>
      {/* Service Process Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-50 to-cyan-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Rental Process</h2>
            <p className="text-lg text-gray-600">Simple, transparent, and efficient rental process</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Inquiry", desc: "Tell us your requirements and rental duration" },
              { step: "2", title: "Quotation", desc: "Get a transparent quote and rental agreement" },
              { step: "3", title: "Delivery & Setup", desc: "We deliver and set up the equipment at your location" },
              { step: "4", title: "Support & Return", desc: "Enjoy support during rental and easy return process" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                {index < 3 && <ArrowRight className="h-6 w-6 text-emerald-600 mx-auto mt-4 hidden md:block" />}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-12 bg-gray-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h4 className="font-semibold text-lg text-emerald-700 mb-1">What equipment can I rent?</h4>
              <p className="text-gray-600">We offer laptops, desktops, projectors, displays, networking devices, and more. Contact us for specific requirements.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-emerald-700 mb-1">Is technical support included?</h4>
              <p className="text-gray-600">Yes, we provide full technical support, including setup, troubleshooting, and on-site assistance if needed.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-emerald-700 mb-1">Can I extend my rental period?</h4>
              <p className="text-gray-600">Rental extensions are easy—just contact us before your term ends to arrange an extension at a competitive rate.</p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-emerald-900 to-cyan-900 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Need IT Equipment for Your Business or Event?</h2>
            <p className="text-lg lg:text-xl mb-8 opacity-90">Get fast, flexible, and affordable rental solutions. Contact us today for a free quote.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 9326620089
              </Button>
              <Button size="lg" variant="outline" className="border-white  text-gray-900 hover:bg-white hover:text-gray-900">
                Request Rental Quote
              </Button>
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
          href="https://wa.me/919326620089?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20laptop%20services"
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