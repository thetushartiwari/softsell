import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SoftSell - Software License Resale Platform",
  description:
    "Transform unused software licenses into immediate revenue with SoftSell, the secure marketplace for software license resale.",
  keywords: "software license, license resale, software marketplace, sell licenses, license valuation",
  authors: [{ name: "SoftSell Team" }],
  openGraph: {
    title: "SoftSell - Software License Resale Platform",
    description:
      "Transform unused software licenses into immediate revenue with SoftSell, the secure marketplace for software license resale.",
    url: "https://softsell.vercel.app",
    siteName: "SoftSell",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SoftSell - Software License Resale Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftSell - Software License Resale Platform",
    description:
      "Transform unused software licenses into immediate revenue with SoftSell, the secure marketplace for software license resale.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
