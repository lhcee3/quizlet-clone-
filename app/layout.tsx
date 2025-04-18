import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quizlet: Learning tools & flashcards, for free",
  description:
    "Quizlet is a global learning platform that provides engaging study tools to help people practice and master whatever they're learning.",
    generator: 'Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
