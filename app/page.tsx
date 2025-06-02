"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Monitor,
  Laptop,
  Server,
  Camera,
  Wrench,
  ShoppingCart,
  Users,
  Menu,
  X,
  CheckCircle,
  Award,
  Clock,
  Shield,
} from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Footer from "@/components/ui/footer"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const services = [
    {
      icon: <Laptop className="h-8 w-8" />,
      title: "Laptop Services",
      description: "Complete laptop solutions including sales, repairs, upgrades, and maintenance for all major brands",
      features: ["Sales & Purchase", "Repair & Maintenance", "Data Recovery", "Upgrade Services"],
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Desktop Solutions",
      description: "Custom desktop builds, repairs, and comprehensive IT solutions for businesses and individuals",
      features: ["Custom Builds", "Component Upgrades", "Troubleshooting", "Performance Optimization"],
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Server & Workstation",
      description: "Enterprise-grade servers and high-performance workstations for demanding business applications",
      features: ["Server Setup", "Network Configuration", "Workstation Builds", "Enterprise Solutions"],
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "CCTV Services",
      description: "Complete security solutions with professional CCTV installation and monitoring systems",
      features: ["Installation", "Monitoring Setup", "Maintenance", "Remote Access"],
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "AMC Services",
      description: "Comprehensive annual maintenance contracts ensuring optimal performance of your IT infrastructure",
      features: ["Preventive Maintenance", "Priority Support", "Regular Checkups", "Cost Savings"],
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Rental Services",
      description: "Flexible rental solutions for computers, laptops, and IT equipment for events and projects",
      features: ["Short-term Rental", "Long-term Leasing", "Event Support", "Flexible Terms"],
    },
  ]

  const brands = [
    "HP",
    "Apple",
    "Dell",
    "Sony",
    "Samsung",
    "Gateway",
    "Lenovo",
    "Toshiba",
    "ASUS",
    "AMD Ryzen",
    "GeForce RTX",
    "Compaq",
  ]

  const stats = [
    { number: "500+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
    { number: "10+", label: "Years Experience", icon: <Award className="h-6 w-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="h-6 w-6" /> },
    { number: "100%", label: "Quality Assured", icon: <Shield className="h-6 w-6" /> },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* logo section start */}
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
            {/* logo section end */}

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <nav className="flex items-center space-x-6">
                <a href="#services" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                  Services
                </a>
                <a href="#brands" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                  Brands
                </a>
                <a href="#contact" className="text-gray-700 hover:text-emerald-600 font-medium transition-colors">
                  Contact
                </a>
              </nav>
              <div className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                <Phone className="h-4 w-4 text-emerald-600" />
                <span>9326620089</span>
              </div>
              <Button className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white shadow-lg">
                Get Quote
              </Button>
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
                <a href="#services" className="text-gray-700 hover:text-emerald-600 font-medium">
                  Services
                </a>
                <a href="#brands" className="text-gray-700 hover:text-emerald-600 font-medium">
                  Brands
                </a>
                <a href="#contact" className="text-gray-700 hover:text-emerald-600 font-medium">
                  Contact
                </a>
                <div className="flex items-center space-x-2 text-sm font-medium text-gray-700 pt-2 border-t border-gray-100">
                  <Phone className="h-4 w-4 text-emerald-600" />
                  <span>9326620089</span>
                </div>
                <Button className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white w-full">
                  Get Quote
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-cyan-50 to-emerald-50 py-12 lg:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-sm">
              <CheckCircle className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-medium text-gray-700">Trusted IT Solutions Provider</span>
            </div>

            <h2 className="text-3xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Complete
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                {" "}
                IT Solutions
              </span>{" "}
              Partner
            </h2>

            <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional computer services, CCTV systems, and comprehensive hardware & software solutions in Mumbai.
              Serving businesses and individuals with quality and reliability.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge
                variant="secondary"
                className="px-4 py-2 text-base font-semibold bg-emerald-100 text-emerald-700 border-emerald-200"
              >
                BUY
              </Badge>
              <Badge
                variant="secondary"
                className="px-4 py-2 text-base font-semibold bg-cyan-100 text-cyan-700 border-cyan-200"
              >
                SELL
              </Badge>
              <Badge
                variant="secondary"
                className="px-4 py-2 text-base font-semibold bg-gray-100 text-gray-700 border-gray-200"
              >
                REPAIR
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white shadow-lg text-base px-8"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call: 9326620089
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 hover:bg-gray-50 text-base px-8">
                <Mail className="mr-2 h-5 w-5" />
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-emerald-100 to-cyan-100 text-emerald-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <p className="text-sm lg:text-base font-medium text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h3 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Our Professional Services</h3>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to meet your business and personal technology needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                  <CardDescription className="text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
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

      {/* Brands */}
      <section id="brands" className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Authorized Brand Partners</h3>
            <p className="text-lg text-gray-600">
              We work with industry-leading brands to provide you the best products
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8">
            {brands.map((brand, index) => (
              <div key={index} className="group">
                <div className="bg-gray-50 hover:bg-gradient-to-br hover:from-emerald-50 hover:to-cyan-50 rounded-xl p-4 lg:p-6 h-20 lg:h-24 flex items-center justify-center transition-all duration-300 border border-gray-100 hover:border-emerald-200 hover:shadow-lg">
                  <span className="font-bold text-gray-700 group-hover:text-emerald-700 text-xs lg:text-sm text-center transition-colors">
                    {brand}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-emerald-900 to-cyan-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h3 className="text-3xl lg:text-5xl font-bold mb-6">Let's Discuss Your IT Needs</h3>
              <p className="text-lg lg:text-xl mb-8 opacity-90 leading-relaxed">
                Ready to upgrade your technology infrastructure? Our experts are here to provide personalized solutions
                that fit your budget and requirements.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Call Us Anytime</p>
                    <p className="opacity-90">9326620089 | 9819989942 | 8580822134</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Email Us</p>
                    <p className="opacity-90">ecobytesolution@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Visit Our Store</p>
                    <p className="opacity-90 leading-relaxed">
                      Shop No.10, Yaari Bldg., Opp. D'souza Nagar,
                      <br />
                      90 feet Road, Sakinaka, Mumbai - 400 072
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 lg:p-8 border border-white/20">
              <h4 className="text-2xl lg:text-3xl font-bold mb-6">Request a Quote</h4>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <select className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50">
                  <option value="" className="text-gray-900">
                    Select Service
                  </option>
                  <option value="laptop" className="text-gray-900">
                    Laptop Services
                  </option>
                  <option value="desktop" className="text-gray-900">
                    Desktop Solutions
                  </option>
                  <option value="server" className="text-gray-900">
                    Server & Workstation
                  </option>
                  <option value="cctv" className="text-gray-900">
                    CCTV Services
                  </option>
                  <option value="amc" className="text-gray-900">
                    AMC Services
                  </option>
                  <option value="rental" className="text-gray-900">
                    Rental Services
                  </option>
                </select>
                <textarea
                  placeholder="Describe your requirements..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 text-white resize-none backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                ></textarea>
                <Button className="w-full bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 rounded-xl text-base">
                  Send Inquiry
                </Button>
              </form>
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
