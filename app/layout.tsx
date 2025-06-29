import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Inka Sharatu Puspadarma - Business Analyst & Strategic Innovation Leader",
  description:
    "Professional portfolio showcasing expertise in Business Process Analysis, Strategic Planning, and Customer Experience Optimization. Transforming business processes through collaborative leadership and data-driven insights.",
  keywords:
    "Business Analyst, Process Optimization, Strategic Planning, Customer Experience, Project Management, UX Research, Data Analytics, Indonesia",
  authors: [{ name: "Inka Sharatu Puspadarma" }],
  openGraph: {
    title: "Inka Sharatu Puspadarma - Business Analyst & Strategic Leader",
    description: "Transforming business processes through strategic innovation and collaborative leadership",
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
