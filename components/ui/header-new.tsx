import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./button";

const serviceLinks = [
  { href: "/services/laptop-services", label: "Laptop & Desktop Sales" },
  { href: "/services/desktop-solutions", label: "Desktop Solutions" },
  { href: "/services/computer-repair", label: "Computer Repair" },
  { href: "/services/cctv-installation", label: "CCTV Installation" },
  { href: "/services/server-solutions", label: "Server Solutions" },
  { href: "/services/amc-services", label: "AMC Services" },
  { href: "/services/equipment-rental", label: "Equipment Rental" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  
  // Reference for the dropdown container
  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  // Handle clicking outside the dropdown to close it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }
    
    // Add event listener when dropdown is open
    if (servicesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [servicesDropdownOpen]);

  // Close mobile menu when clicking logo or any menu action
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* logo section */}
          <Link
            href="/"
            className="flex items-center space-x-3 lg:space-x-4"
            onClick={closeMobileMenu}
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
              {/* Services Dropdown - Using click instead of hover */}
              <div className="relative" ref={servicesDropdownRef}>
                <button
                  className="flex items-center text-gray-700 hover:text-emerald-600 font-medium transition-colors focus:outline-none"
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  type="button"
                  aria-expanded={servicesDropdownOpen}
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {/* Dropdown Menu */}
                <div
                  className={`absolute left-0 mt-2 w-56 rounded-xl bg-white shadow-lg border border-gray-100 py-2 z-50 transition-all duration-200 ${
                    servicesDropdownOpen 
                      ? "opacity-100 visible" 
                      : "opacity-0 invisible pointer-events-none"
                  }`}
                >
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-5 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
              {/* Smooth-scroll links */}
              <Link
                href="/#brands"
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
              >
                Brands
              </Link>
              <Link
                href="/#contact"
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/privacy-policy"
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
              >
                Terms & Conditions
              </Link>
            </nav>
            <div className="flex items-center space-x-2 text-sm font-medium text-gray-700">
              <Phone className="h-4 w-4 text-emerald-600" />
              <span>9326620089</span>
            </div>
            <Button
              className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white shadow-lg"
              onClick={() => window.location.href = 'tel:9326620089'}
            >
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
              {/* Mobile Services Collapsible */}
              <div>
                <button
                  className="flex items-center w-full text-gray-700 hover:text-emerald-600 font-semibold mb-1 transition-colors"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  aria-expanded={mobileServicesOpen}
                  aria-controls="mobile-services-menu"
                  type="button"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`ml-1 h-5 w-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileServicesOpen && (
                  <ul className="space-y-1 mb-2 pl-4" id="mobile-services-menu">
                    {serviceLinks.map((s) => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          className="block text-gray-700 hover:text-emerald-600 py-1 transition-colors"
                          onClick={closeMobileMenu}
                        >
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {/* Smooth-scroll links */}
              <Link
                href="/#brands"
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
                onClick={closeMobileMenu}
              >
                Brands
              </Link>
              <Link
                href="/#contact"
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              <Link
                href="/privacy-policy"
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
                onClick={closeMobileMenu}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
                onClick={closeMobileMenu}
              >
                Terms & Conditions
              </Link>
              <div className="flex items-center space-x-2 text-sm font-medium text-gray-700 pt-2 border-t border-gray-100">
                <Phone className="h-4 w-4 text-emerald-600" />
                <span>9326620089</span>
              </div>
              <Button
                className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white w-full"
                onClick={() => {
                  closeMobileMenu();
                  window.location.href = 'tel:9326620089';
                }}
              >
                Get Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
