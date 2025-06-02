"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Wrench,
  Cpu,
  HardDrive,
  Monitor,
  Zap,
  Wifi,
  Shield,
  CheckCircle,
  Menu,
  X,
  ArrowRight,
  Clock,
  DollarSign,
  Award,
  AlertTriangle,
} from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Footer from "@/components/ui/footer"
import Header from "@/components/ui/header"

export default function ComputerRepairPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const repairServices = [
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Hardware Repair",
      description: "Expert diagnosis and repair of all computer hardware components",
      features: ["Motherboard Repair", "CPU Issues", "Power Supply Problems", "Component Replacement"],
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Display Issues",
      description: "Complete display and graphics-related problem resolution",
      features: ["Screen Replacement", "Graphics Card Repair", "Display Driver Issues", "Multiple Monitor Setup"],
    },
    {
      icon: <HardDrive className="h-8 w-8" />,
      title: "Storage Solutions",
      description: "Data recovery and storage device repair services",
      features: ["Hard Drive Recovery", "SSD Repair", "Data Backup", "Storage Upgrades"],
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Network & Connectivity",
      description: "Internet and network connectivity troubleshooting",
      features: ["WiFi Issues", "Ethernet Problems", "Network Setup", "Internet Troubleshooting"],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Virus & Malware Removal",
      description: "Complete system cleaning and security enhancement",
      features: ["Virus Removal", "Malware Cleaning", "Security Software", "System Protection"],
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "Speed up your computer and improve overall performance",
      features: ["System Cleanup", "Registry Optimization", "Startup Management", "Memory Optimization"],
    },
  ]

  const commonProblems = [
    {
      problem: "Computer Won't Start",
      symptoms: ["No power", "Black screen", "Beeping sounds"],
      causes: ["Power supply failure", "RAM issues", "Motherboard problems"],
      urgency: "High",
    },
    {
      problem: "Slow Performance",
      symptoms: ["Long boot times", "Freezing", "Unresponsive programs"],
      causes: ["Insufficient RAM", "Hard drive issues", "Malware infection"],
      urgency: "Medium",
    },
    {
      problem: "Blue Screen of Death",
      symptoms: ["System crashes", "Error messages", "Automatic restarts"],
      causes: ["Driver conflicts", "Hardware failure", "Memory problems"],
      urgency: "High",
    },
    {
      problem: "Overheating",
      symptoms: ["Fan noise", "Hot case", "Sudden shutdowns"],
      causes: ["Dust buildup", "Fan failure", "Thermal paste degradation"],
      urgency: "Medium",
    },
    {
      problem: "No Internet Connection",
      symptoms: ["Cannot browse", "Network errors", "Limited connectivity"],
      causes: ["Router issues", "Network adapter problems", "ISP problems"],
      urgency: "Medium",
    },
    {
      problem: "Strange Noises",
      symptoms: ["Clicking sounds", "Grinding noise", "Buzzing"],
      causes: ["Hard drive failure", "Fan problems", "Loose components"],
      urgency: "High",
    },
  ]

  const repairProcess = [
    {
      step: "1",
      title: "Free Diagnosis",
      description: "Comprehensive system analysis to identify all issues",
      time: "30-60 mins",
    },
    {
      step: "2",
      title: "Detailed Quote",
      description: "Transparent pricing with breakdown of all costs",
      time: "15 mins",
    },
    {
      step: "3",
      title: "Professional Repair",
      description: "Expert technicians fix your computer using quality parts",
      time: "1-3 days",
    },
    {
      step: "4",
      title: "Quality Testing",
      description: "Thorough testing to ensure everything works perfectly",
      time: "2-4 hours",
    },
    {
      step: "5",
      title: "Warranty & Support",
      description: "30-day warranty on all repairs with ongoing support",
      time: "Ongoing",
    },
  ]

  const whyChooseUs = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Expert Technicians",
      description: "Certified professionals with 10+ years experience",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Quick Turnaround",
      description: "Most repairs completed within 24-48 hours",
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Affordable Pricing",
      description: "Competitive rates with no hidden charges",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "30-Day Warranty",
      description: "All repairs backed by comprehensive warranty",
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
          <Wrench className="h-4 w-4 text-emerald-600" />
          <span className="text-sm font-medium text-gray-700">Professional Computer Repair</span>
        </div>

        <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Expert
          <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
            {" "}Computer Repair
          </span>
          {" "}Services
        </h1>

        <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
          Fast, reliable computer repair services in Mumbai. From hardware failures to software issues, our
          certified technicians can fix any computer problem with a 30-day warranty guarantee.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
            <Clock className="h-3 w-3 mr-1" />
            24-48 Hour Service
          </Badge>
          <Badge className="bg-cyan-100 text-cyan-700 border-cyan-200">
            <Shield className="h-3 w-3 mr-1" />
            30-Day Warranty
          </Badge>
          <Badge className="bg-gray-100 text-gray-700 border-gray-200">
            <CheckCircle className="h-3 w-3 mr-1" />
            Free Diagnosis
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
            Get Free Diagnosis
          </Button>
        </div>
      </div>

      <div className="relative">
        <img
          src="/placeholder.svg?height=400&width=600"
          alt="Computer Repair Services"
          className="rounded-2xl shadow-2xl"
        />
        {/* Change right to left here: */}
        <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
              <Award className="h-6 w-6 text-emerald-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Expert Technicians</p>
              <p className="text-sm text-gray-600">10+ Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Repair Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Repair Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive computer repair solutions for all types of hardware and software issues
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {repairServices.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white hover:-translate-y-1"
              >
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

      {/* Common Problems */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Common Computer Problems We Fix</h2>
            <p className="text-lg text-gray-600">
              Recognize these symptoms? We can help diagnose and fix these common computer issues
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonProblems.map((problem, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg font-semibold text-gray-900">{problem.problem}</CardTitle>
                    <Badge
                      variant={problem.urgency === "High" ? "destructive" : "secondary"}
                      className={
                        problem.urgency === "High" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"
                      }
                    >
                      {problem.urgency === "High" && <AlertTriangle className="h-3 w-3 mr-1" />}
                      {problem.urgency}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Symptoms:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {problem.symptoms.map((symptom, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Common Causes:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {problem.causes.map((cause, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          <span>{cause}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Repair Process</h2>
            <p className="text-lg text-gray-600">
              Simple, transparent, and efficient computer repair process from diagnosis to delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {repairProcess.map((item, index) => (
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
                {index < repairProcess.length - 1 && (
                  <ArrowRight className="h-6 w-6 text-emerald-600 mx-auto mt-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-50 to-cyan-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Eco-Byte Solution?</h2>
            <p className="text-lg text-gray-600">
              Trusted by 500+ customers for reliable and professional computer repair services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                    {item.icon}
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Service */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-red-100 rounded-full px-4 py-2 mb-6">
              <AlertTriangle className="h-5 w-5 text-red-600" />
              <span className="text-sm font-medium text-red-700">Emergency Service Available</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Computer Emergency?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Critical business computer down? We offer same-day emergency repair services for urgent situations.
              Additional charges may apply for emergency service.
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
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Need Computer Repair?</h2>
            <p className="text-lg lg:text-xl mb-8 opacity-90">
              Don't let computer problems slow you down. Get expert repair services with free diagnosis and 30-day
              warranty.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 9326620089
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-black"
              >
                Schedule Repair
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button End */}
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
  );
}
