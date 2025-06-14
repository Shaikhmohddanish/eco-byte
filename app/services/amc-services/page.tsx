"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Wrench,
  CheckCircle,
  Menu,
  X,
  ArrowRight,
  AlertTriangle,
  Clock,
  Zap,
} from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"
import Head from "next/head"

export default function AMCServicesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const amcServices = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Comprehensive AMC",
      description: "Annual maintenance for all IT equipment including computers, servers, and peripherals.",
      features: ["Preventive Maintenance", "Onsite Support", "Remote Assistance", "Spare Parts Replacement"],
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Custom AMC Plans",
      description: "Tailored AMC packages to fit your business needs and budget.",
      features: ["Flexible Visits", "Priority Support", "Custom SLAs", "Reporting"],
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Emergency Support",
      description: "Rapid response for critical IT failures and urgent issues.",
      features: ["24/7 Helpline", "Quick Response", "Remote Troubleshooting", "Onsite Visits"],
    },
  ]

  // Add: Why Choose Our AMC Services
  const whyChooseUs = [
    {
      title: "Expert Technicians",
      description: "Our certified professionals ensure your IT infrastructure is always in top condition.",
    },
    {
      title: "Proactive Maintenance",
      description: "We prevent issues before they disrupt your business, minimizing downtime.",
    },
    {
      title: "Transparent Pricing",
      description: "No hidden charges. Clear, upfront AMC plans tailored to your needs.",
    },
    {
      title: "Priority Support",
      description: "AMC clients receive faster response times and dedicated support channels.",
    },
  ];

  // Supported Equipment/Brands for AMC
  const supportedEquipment = [
    "Desktops", "Laptops", "Servers", "Printers", "Networking Devices", "CCTV Systems", "POS Machines", "Peripherals"
  ];
  // Common AMC Scenarios
  const commonScenarios = [
    { issue: "Frequent System Crashes", solution: "Proactive maintenance and hardware diagnostics" },
    { issue: "Network Downtime", solution: "Regular network health checks and quick troubleshooting" },
    { issue: "Slow Performance", solution: "System optimization and timely upgrades" },
    { issue: "Security Threats", solution: "Patch management and security audits" },
    { issue: "Hardware Failures", solution: "Spare parts replacement and emergency support" },
    { issue: "Data Loss", solution: "Backup solutions and recovery support" },
  ];

  // Banner details for AMC Services
  const banner = {
    title: "Annual Maintenance Contracts (AMC)",
    subtitle: "Proactive IT Care for Your Business",
    description: "Keep your business running smoothly with our comprehensive AMC solutions. We provide preventive maintenance, rapid support, and peace of mind for all your IT assets.",
    image: "/placeholder.svg", // Use a relevant image or placeholder
    badge: "Professional AMC Services",
    warranty: {
      icon: <CheckCircle className="h-6 w-6 text-emerald-600" />,
      title: "Priority Response",
      desc: "For all AMC clients"
    }
  }

  return (
    <>
      <Head>
        <title>IT AMC Services in Mumbai | Eco-Byte Solution</title>
        <meta name="description" content="Comprehensive Annual Maintenance Contract (AMC) for computers, servers, and IT infrastructure in Mumbai. Reliable support, preventive maintenance, and fast response from Eco-Byte Solution." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="IT AMC Services in Mumbai | Eco-Byte Solution" />
        <meta property="og:description" content="Comprehensive AMC for computers, servers, and IT infrastructure. Preventive maintenance, expert support, and fast response times." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eco-byte.com/services/amc-services" />
        <meta property="og:image" content="/images/amc.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IT AMC Services in Mumbai | Eco-Byte Solution" />
        <meta name="twitter:description" content="Comprehensive Annual Maintenance Contract (AMC) for computers, servers, and IT infrastructure in Mumbai. Reliable support, preventive maintenance, and fast response from Eco-Byte Solution." />
        <meta name="twitter:image" content="/images/amc.jpeg" />
        {/* JSON-LD Structured Data for Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'IT AMC Services',
              description: 'Comprehensive Annual Maintenance Contract (AMC) for computers, servers, and IT infrastructure in Mumbai. Reliable support, preventive maintenance, and fast response from Eco-Byte Solution.',
              provider: {
                '@type': 'Organization',
                name: 'Eco-Byte Solution',
                url: 'https://eco-byte.com',
                logo: 'https://eco-byte.com/logo.png',
                contactPoint: {
                  '@type': 'ContactPoint',
                  telephone: '+91-9326620089',
                  contactType: 'customer service',
                  areaServed: 'IN',
                  availableLanguage: ['English', 'Hindi']
                },
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Shop No. 2, Plot No. 6, Sector 2, Airoli',
                  addressLocality: 'Navi Mumbai',
                  addressRegion: 'Maharashtra',
                  postalCode: '400708',
                  addressCountry: 'IN'
                }
              },
              areaServed: 'Mumbai, Navi Mumbai, Thane',
              serviceType: 'IT AMC Services',
              url: 'https://eco-byte.com/services/amc-services',
              image: 'https://eco-byte.com/images/amc.jpeg',
              offers: {
                '@type': 'Offer',
                priceCurrency: 'INR',
                availability: 'https://schema.org/InStock',
                url: 'https://eco-byte.com/services/amc-services',
                eligibleRegion: 'IN'
              }
            })
          }}
        />
      </Head>
      <div className="min-h-screen bg-white">
        <Header />
        {/* Banner/Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 via-cyan-50 to-emerald-50 py-12 lg:py-20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm">
                  <Wrench className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm font-medium text-gray-700">Professional AMC Services</span>
                </div>
                <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Professional
                  <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                    AMC Solutions
                  </span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                  Comprehensive IT maintenance and support for your business. From preventive care to emergency response, we ensure your IT infrastructure runs smoothly.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Priority Support
                  </Badge>
                  <Badge className="bg-cyan-100 text-cyan-700 border-cyan-200">
                    <Clock className="h-3 w-3 mr-1" />
                    24/7 Availability
                  </Badge>
                  <Badge className="bg-gray-100 text-gray-700 border-gray-200">
                    <Zap className="h-3 w-3 mr-1" />
                    Proactive Maintenance
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
                    className="border-gray-300 hover:bg-gray-50"
                    onClick={() => alert('AMC quote request submitted!')}
                  >
                    Get Free AMC Quote
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/amc.jpeg?height=400&width=600"
                  alt="AMC Solutions"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">99.9% Uptime</p>
                      <p className="text-sm text-gray-600">Guaranteed</p>
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
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Annual Maintenance Contracts (AMC)</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hassle-free IT maintenance and support for your business. Choose from comprehensive or custom AMC plans.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {amcServices.map((service, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-base text-gray-600 leading-relaxed">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
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
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Supported Equipment & Systems</h2>
              <p className="text-lg text-gray-600">We provide AMC for a wide range of IT and electronic equipment</p>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Our AMC Services?</h3>
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
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Common IT Issues We Prevent & Fix</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our AMC covers a wide range of IT challenges for your business</p>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How Our AMC Process Works</h3>
            <ol className="max-w-2xl mx-auto space-y-6 list-decimal list-inside text-gray-700">
              <li><span className="font-semibold text-emerald-700">Consultation:</span> We assess your IT infrastructure and requirements.</li>
              <li><span className="font-semibold text-emerald-700">Proposal:</span> Receive a tailored AMC plan with clear deliverables and pricing.</li>
              <li><span className="font-semibold text-emerald-700">Onboarding:</span> Our team documents your assets and schedules preventive maintenance.</li>
              <li><span className="font-semibold text-emerald-700">Ongoing Support:</span> Enjoy regular maintenance, priority support, and emergency response as per your plan.</li>
            </ol>
          </div>
        </section>
        {/* Service Process Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-50 to-cyan-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our AMC Service Process</h2>
              <p className="text-lg text-gray-600">Simple, transparent, and efficient AMC process</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Assessment", desc: "Free IT audit and requirement analysis" },
                { step: "2", title: "Proposal", desc: "Custom AMC plan and transparent pricing" },
                { step: "3", title: "Onboarding", desc: "Asset documentation and preventive maintenance" },
                { step: "4", title: "Support", desc: "Ongoing support, monitoring, and reporting" },
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
                <h4 className="font-semibold text-lg text-emerald-700 mb-1">What is included in an AMC?</h4>
                <p className="text-gray-600">Our AMC covers preventive maintenance, onsite and remote support, emergency visits, and replacement of faulty parts as per the contract.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-emerald-700 mb-1">Can I customize my AMC plan?</h4>
                <p className="text-gray-600">Absolutely! We offer flexible AMC packages to suit your business size, equipment, and support needs.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-emerald-700 mb-1">How do I request support under AMC?</h4>
                <p className="text-gray-600">AMC clients can contact us via phone, email, or our support portal for quick assistance. Emergency support is available 24/7 for critical issues.</p>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-emerald-900 to-cyan-900 text-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready for Reliable IT Maintenance?</h2>
              <p className="text-lg lg:text-xl mb-8 opacity-90">Get expert AMC services for your business. Contact us today for a free consultation.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: 9326620089
                </Button>
                <Button size="lg" variant="outline" className="border-white text-gray-900 hover:bg-white hover:text-gray-900">
                  Get Free AMC Quote
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
    </>
  )
}
