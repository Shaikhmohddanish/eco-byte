"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Camera,
  Shield,
  Monitor,
  Smartphone,
  Wifi,
  HardDrive,
  CheckCircle,
  Menu,
  X,
  ArrowRight,
  Eye,
  Lock,
  AlertTriangle,
  Clock,
} from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"

export default function CCTVInstallationPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const services = [
    {
      icon: <Camera className="h-8 w-8" />,
      title: "CCTV Installation",
      description: "Professional installation of high-quality surveillance cameras for homes and businesses",
      features: ["HD/4K Cameras", "Night Vision", "Weather Resistant", "Professional Mounting"],
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Monitoring Systems",
      description: "Advanced monitoring solutions with real-time viewing and recording capabilities",
      features: ["24/7 Recording", "Motion Detection", "Alert Systems", "Multi-camera Support"],
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Remote Access",
      description: "Access your CCTV system from anywhere using mobile apps and web interfaces",
      features: ["Mobile App", "Web Portal", "Live Streaming", "Cloud Storage"],
    },
    {
      icon: <HardDrive className="h-8 w-8" />,
      title: "Storage Solutions",
      description: "Reliable storage systems for your surveillance footage with backup options",
      features: ["Local Storage", "Cloud Backup", "Auto-deletion", "Expandable Storage"],
    },
  ]

  const cameraTypes = [
    {
      type: "Dome Cameras",
      description: "Discreet indoor surveillance with 360° coverage",
      features: ["Vandal-resistant", "Wide angle view", "Indoor use", "Ceiling mount"],
      price: "₹3,000 - ₹15,000",
    },
    {
      type: "Bullet Cameras",
      description: "Long-range outdoor monitoring with weatherproof design",
      features: ["Weather resistant", "Long range", "Infrared night vision", "Wall mount"],
      price: "₹4,000 - ₹20,000",
    },
    {
      type: "PTZ Cameras",
      description: "Pan, tilt, and zoom cameras for comprehensive coverage",
      features: ["Remote control", "Auto-tracking", "High zoom", "360° rotation"],
      price: "₹15,000 - ₹50,000",
    },
    {
      type: "IP Cameras",
      description: "Network cameras with advanced digital features",
      features: ["High resolution", "Network connectivity", "Smart analytics", "Remote access"],
      price: "₹5,000 - ₹25,000",
    },
  ]

  const securityFeatures = [
    {
      feature: "Motion Detection",
      description: "Automatic recording when movement is detected",
      icon: <Eye className="h-6 w-6" />,
    },
    {
      feature: "Night Vision",
      description: "Clear footage even in complete darkness",
      icon: <Monitor className="h-6 w-6" />,
    },
    {
      feature: "Mobile Alerts",
      description: "Instant notifications on your smartphone",
      icon: <Smartphone className="h-6 w-6" />,
    },
    {
      feature: "Secure Access",
      description: "Password-protected system with encryption",
      icon: <Lock className="h-6 w-6" />,
    },
    {
      feature: "Backup Storage",
      description: "Multiple storage options for footage safety",
      icon: <HardDrive className="h-6 w-6" />,
    },
    {
      feature: "24/7 Monitoring",
      description: "Continuous surveillance and recording",
      icon: <Clock className="h-6 w-6" />,
    },
  ]

  const installationProcess = [
    {
      step: "1",
      title: "Site Survey",
      description: "Free assessment of your property and security needs",
      time: "1-2 hours",
    },
    {
      step: "2",
      title: "System Design",
      description: "Custom CCTV layout and equipment selection",
      time: "1-2 days",
    },
    {
      step: "3",
      title: "Installation",
      description: "Professional mounting and wiring of cameras",
      time: "1-3 days",
    },
    {
      step: "4",
      title: "Configuration",
      description: "System setup and mobile app configuration",
      time: "2-4 hours",
    },
    {
      step: "5",
      title: "Training",
      description: "User training and system handover",
      time: "1 hour",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-cyan-50 to-emerald-50 py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm">
                <Camera className="h-4 w-4 text-emerald-600" />
                <span className="text-sm font-medium text-gray-700">Professional CCTV Solutions</span>
              </div>

              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Advanced
                <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                  {" "}
                  CCTV Installation
                </span>{" "}
                Services
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                Protect your property with our professional CCTV installation services. High-definition cameras, remote
                monitoring, and 24/7 surveillance solutions for homes and businesses in Mumbai.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                  <Shield className="h-3 w-3 mr-1" />
                  HD/4K Quality
                </Badge>
                <Badge className="bg-cyan-100 text-cyan-700 border-cyan-200">
                  <Wifi className="h-3 w-3 mr-1" />
                  Remote Access
                </Badge>
                <Badge className="bg-gray-100 text-gray-700 border-gray-200">
                  <Clock className="h-3 w-3 mr-1" />
                  24/7 Monitoring
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
                  onClick={() => alert('Free site survey request submitted!')}
                >
                  Free Site Survey
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/cctv.jpg?height=400&width=600"
                alt="CCTV Installation Services"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">1-Year Warranty</p>
                    <p className="text-sm text-gray-600">On installation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our CCTV Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive surveillance solutions from installation to monitoring and maintenance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl lg:text-2xl font-bold text-gray-900">{service.title}</CardTitle>
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

      {/* Camera Types */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Camera Types & Pricing</h2>
            <p className="text-lg text-gray-600">Choose from our range of professional surveillance cameras</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cameraTypes.map((camera, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                    <Camera className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">{camera.type}</CardTitle>
                  <p className="text-gray-600 text-sm">{camera.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {camera.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-emerald-600 flex-shrink-0" />
                        <span className="text-xs text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-lg font-semibold text-emerald-600 text-center">{camera.price}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Advanced Security Features</h2>
            <p className="text-lg text-gray-600">State-of-the-art features for comprehensive security coverage</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityFeatures.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mr-3">
                      {item.icon}
                    </div>
                    {item.feature}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-50 to-cyan-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Installation Process</h2>
            <p className="text-lg text-gray-600">Professional installation process from survey to handover</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {installationProcess.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                <Badge variant="secondary" className="text-xs">
                  <Clock className="h-3 w-3 mr-1" />
                  {item.time}
                </Badge>
                {index < installationProcess.length - 1 && (
                  <ArrowRight className="h-6 w-6 text-emerald-600 mx-auto mt-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Alert */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-red-100 rounded-full px-4 py-2 mb-6">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <span className="text-sm font-medium text-red-700">Security Emergency?</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Need Immediate CCTV Installation?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Urgent security concerns? We offer same-day CCTV installation services for emergency situations. Contact
              us immediately for rapid deployment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <Phone className="mr-2 h-5 w-5" />
                Emergency: 9326620089
              </Button>
              <Button size="lg" variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
                WhatsApp Emergency
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-emerald-900 to-cyan-900 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Secure Your Property Today</h2>
            <p className="text-lg lg:text-xl mb-8 opacity-90">
              Get professional CCTV installation with free site survey and 1-year warranty. Protect what matters most.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 9326620089
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-gray-900 hover:bg-white hover:text-gray-900"
              >
                Schedule Survey
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
