import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

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
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
