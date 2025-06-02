import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "./button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
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
          <button className="lg:hidden p-2 text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </header>
  );
}
