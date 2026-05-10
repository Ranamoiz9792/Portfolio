import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Muhammad Moiz Riaz - Aspiring Software Engineer | AI & Computer Vision Specialist",
  description: "Portfolio of Muhammad Moiz Riaz, BS Computer Science graduate specializing in Machine Learning, Computer Vision, and Full-Stack Development with React, Next.js, and Python.",
  keywords: ["Software Engineer", "Machine Learning", "Computer Vision", "AI", "React", "Next.js", "Python", "NLP", "Full-Stack Developer"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
