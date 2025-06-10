import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Head from "next/head"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Eco-Byte Solution - Professional IT Services in Mumbai",
  description:
    "Complete IT solutions including computer sales, repair, CCTV services, and maintenance in Mumbai. Buy, Sell, Repair - Your trusted technology partner.",
  keywords:
    "computer repair, laptop service, CCTV installation, IT solutions, Mumbai, desktop repair, server maintenance",
  authors: [{ name: "Eco-Byte Solution" }],
  creator: "Eco-Byte Solution",
  publisher: "Eco-Byte Solution",
  robots: "index, follow",
  openGraph: {
    title: "Eco-Byte Solution - Professional IT Services in Mumbai",
    description: "Complete IT solutions including computer sales, repair, CCTV services, and maintenance in Mumbai.",
    url: "https://ecobytesolution.com",
    siteName: "Eco-Byte Solution",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eco-Byte Solution - Professional IT Services in Mumbai",
    description: "Complete IT solutions including computer sales, repair, CCTV services, and maintenance in Mumbai.",
  },
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>Eco-Byte Solution | IT Services, Computer Repair, CCTV, AMC in Mumbai</title>
        <meta name="description" content="Eco-Byte Solution offers professional IT services, computer and laptop repair, CCTV installation, AMC, and equipment rental in Mumbai. Trusted by 500+ clients. Call 9326620089 for a free quote!" />
        <meta name="keywords" content="IT services, computer repair, laptop repair, CCTV installation, AMC, equipment rental, Mumbai, Eco-Byte Solution, server solutions, desktop solutions, IT support, buy laptop, sell laptop, IT company Mumbai" />
        <meta name="author" content="Eco-Byte Solution" />
        <meta property="og:title" content="Eco-Byte Solution | IT Services, Computer Repair, CCTV, AMC in Mumbai" />
        <meta property="og:description" content="Professional IT solutions, computer repair, CCTV, AMC, and more in Mumbai. Trusted by 500+ clients. Call 9326620089 for a free quote!" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://www.ecobytesolution.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eco-Byte Solution | IT Services, Computer Repair, CCTV, AMC in Mumbai" />
        <meta name="twitter:description" content="Professional IT solutions, computer repair, CCTV, AMC, and more in Mumbai. Trusted by 500+ clients. Call 9326620089 for a free quote!" />
        <meta name="twitter:image" content="/logo.png" />
        <link rel="canonical" href="https://www.ecobytesolution.com" />
        <link rel="icon" href="/logo.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Eco-Byte Solution",
            "url": "https://www.ecobytesolution.com",
            "logo": "https://www.ecobytesolution.com/logo.png",
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+91-9326620089",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"]
            }],
            "sameAs": [
              "https://www.facebook.com/ecobytesolution",
              "https://www.instagram.com/ecobytesolution"
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Shop No.10, Yaari Bldg., Opp. D'souza Nagar, 90 feet Road, Sakinaka",
              "addressLocality": "Mumbai",
              "addressRegion": "MH",
              "postalCode": "400072",
              "addressCountry": "IN"
            }
          })
        }} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
