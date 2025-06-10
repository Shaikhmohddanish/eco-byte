"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Server,
  Database,
  Network,
  Shield,
  Cloud,
  Zap,
  CheckCircle,
  Menu,
  X,
  ArrowRight,
  Cpu,
  Settings,
  Lock,
} from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Footer from "@/components/ui/footer"

export default function ServerSolutionsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const services = [
    {
      icon: <Server className="h-8 w-8" />,
      title: "Server Setup & Configuration",
      description: "Professional server installation and configuration for optimal performance and reliability",
      features: ["Hardware Installation", "OS Configuration", "Security Setup", "Performance Tuning"],
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database Solutions",
      description: "Comprehensive database management and optimization services for your business data",
      features: ["Database Design", "Migration Services", "Backup Solutions", "Performance Optimization"],
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Network Infrastructure",
      description: "Complete network setup and management for seamless connectivity and communication",
      features: ["Network Design", "Switch Configuration", "Firewall Setup", "VPN Solutions"],
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Migration",
      description: "Seamless migration to cloud platforms with minimal downtime and maximum efficiency",
      features: ["Cloud Strategy", "Data Migration", "Hybrid Solutions", "Cost Optimization"],
    },
  ]

  const serverTypes = [
    {
      type: "File Servers",
      description: "Centralized file storage and sharing solutions",
      features: ["Centralized storage", "User access control", "Backup integration", "Remote access"],
      price: "₹50,000 - ₹2,00,000",
    },
    {
      type: "Database Servers",
      description: "High-performance database hosting and management",
      features: ["High availability", "Data redundancy", "Performance optimization", "Security features"],
      price: "₹80,000 - ₹5,00,000",
    },
    {
      type: "Web Servers",
      description: "Reliable web hosting and application servers",
      features: ["Load balancing", "SSL certificates", "Content delivery", "Scalable architecture"],
      price: "₹60,000 - ₹3,00,000",
    },
    {
      type: "Mail Servers",
      description: "Enterprise email solutions with advanced features",
      features: ["Email hosting", "Spam protection", "Mobile sync", "Collaboration tools"],
      price: "₹40,000 - ₹1,50,000",
    },
  ]

  const workstationSolutions = [
    {
      solution: "CAD Workstations",
      description: "High-performance workstations for design and engineering",
      specs: ["Intel Xeon/AMD Ryzen", "Professional GPU", "32GB+ RAM", "NVMe SSD"],
    },
    {
      solution: "Video Editing Stations",
      description: "Powerful systems for video production and editing",
      specs: ["Multi-core CPU", "High-end GPU", "64GB+ RAM", "Fast storage"],
    },
    {
      solution: "Scientific Computing",
      description: "Specialized workstations for research and analysis",
      specs: ["Dual CPU support", "ECC memory", "CUDA cores", "High bandwidth"],
    },
    {
      solution: "Virtualization Hosts",
      description: "Servers optimized for virtual machine hosting",
      specs: ["Multiple CPUs", "Large RAM capacity", "Fast networking", "Redundant storage"],
    },
  ]

  const implementationProcess = [
    {
      step: "1",
      title: "Requirements Analysis",
      description: "Detailed assessment of your business needs and infrastructure",
      time: "1-2 days",
    },
    {
      step: "2",
      title: "Solution Design",
      description: "Custom server architecture and component selection",
      time: "2-3 days",
    },
    {
      step: "3",
      title: "Procurement",
      description: "Hardware procurement and quality testing",
      time: "3-7 days",
    },
    {
      step: "4",
      title: "Installation",
      description: "Professional installation and configuration",
      time: "1-3 days",
    },
    {
      step: "5",
      title: "Testing & Handover",
      description: "Comprehensive testing and user training",
      time: "1-2 days",
    },
  ]

  const supportFeatures = [
    {
      feature: "24/7 Monitoring",
      description: "Round-the-clock server monitoring and alerts",
      icon: <Shield className="h-6 w-6" />,
    },
    {
      feature: "Backup Solutions",
      description: "Automated backup and disaster recovery",
      icon: <Database className="h-6 w-6" />,
    },
    {
      feature: "Security Management",
      description: "Advanced security and access control",
      icon: <Lock className="h-6 w-6" />,
    },
    {
      feature: "Performance Optimization",
      description: "Continuous performance monitoring and tuning",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      feature: "Remote Support",
      description: "Remote troubleshooting and maintenance",
      icon: <Network className="h-6 w-6" />,
    },
    {
      feature: "Scalability Planning",
      description: "Future-proof scaling and upgrade planning",
      icon: <Settings className="h-6 w-6" />,
    },
  ]

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
      <section className="bg-gradient-to-br from-gray-50 via-cyan-50 to-emerald-50 py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm">
                <Server className="h-4 w-4 text-emerald-600" />
                <span className="text-sm font-medium text-gray-700">Enterprise Server Solutions</span>
              </div>

              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Professional
                <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                  {" "}
                  Server & Workstation
                </span>{" "}
                Solutions
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                Enterprise-grade servers and high-performance workstations designed for demanding business applications.
                From setup to maintenance, we provide complete infrastructure solutions.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                  <Server className="h-3 w-3 mr-1" />
                  Enterprise Grade
                </Badge>
                <Badge className="bg-cyan-100 text-cyan-700 border-cyan-200">
                  <Shield className="h-3 w-3 mr-1" />
                  24/7 Support
                </Badge>
                <Badge className="bg-gray-100 text-gray-700 border-gray-200">
                  <Zap className="h-3 w-3 mr-1" />
                  High Performance
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white shadow-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 9326620089
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 hover:bg-gray-50">
                  Get Consultation
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/1.jpeg?height=400&width=600"
                alt="Server Solutions"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-emerald-600" />
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

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Server Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive server and workstation solutions for businesses of all sizes
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

      {/* Server Types */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Server Solutions & Pricing</h2>
            <p className="text-lg text-gray-600">Choose from our range of enterprise server solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serverTypes.map((server, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                    <Server className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">{server.type}</CardTitle>
                  <p className="text-gray-600 text-sm">{server.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {server.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-emerald-600 flex-shrink-0" />
                        <span className="text-xs text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-lg font-semibold text-emerald-600 text-center">{server.price}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workstation Solutions */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">High-Performance Workstations</h2>
            <p className="text-lg text-gray-600">Specialized workstations for demanding professional applications</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {workstationSolutions.map((workstation, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mr-3">
                      <Cpu className="h-6 w-6" />
                    </div>
                    {workstation.solution}
                  </CardTitle>
                  <p className="text-gray-600">{workstation.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {workstation.specs.map((spec, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Comprehensive Support Services</h2>
            <p className="text-lg text-gray-600">Complete support and maintenance for your server infrastructure</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportFeatures.map((item, index) => (
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

      {/* Implementation Process */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-50 to-cyan-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Implementation Process</h2>
            <p className="text-lg text-gray-600">Structured approach from planning to deployment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {implementationProcess.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                <Badge variant="secondary" className="text-xs">
                  {item.time}
                </Badge>
                {index < implementationProcess.length - 1 && (
                  <ArrowRight className="h-6 w-6 text-emerald-600 mx-auto mt-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-emerald-900 to-cyan-900 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready to Upgrade Your Infrastructure?</h2>
            <p className="text-lg lg:text-xl mb-8 opacity-90">
              Get enterprise-grade server solutions tailored to your business needs. Contact us for a free consultation
              and quote.
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
                Schedule Consultation
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
