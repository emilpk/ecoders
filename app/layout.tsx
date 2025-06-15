import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Emil Krautmann - Senior Web Developer & Digital Entrepreneur | ecoders.dev",
  description:
    "Senior web developer with 27+ years of experience. Specializing in React, Next.js, and modern web technologies. Available for remote projects and consulting.",
  keywords: "web developer, React, Next.js, remote work, digital products, apps, consulting",
  authors: [{ name: "Emil Krautmann" }],
  openGraph: {
    title: "Emil Krautmann - Senior Web Developer",
    description: "Senior web developer with 27+ years of experience",
    url: "https://ecoders.dev",
    siteName: "ecoders.dev",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
