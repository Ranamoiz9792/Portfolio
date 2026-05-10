"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ["about", "skills", "experience", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <motion.a
              href="#"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              MR
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeSection === link.name.toLowerCase()
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                  {activeSection === link.name.toLowerCase() && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="ml-4"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="rounded-full w-10 h-10 hover:bg-primary/10"
                >
                  {mounted ? (
                    theme === "dark" ? (
                      <Sun className="w-5 h-5 text-yellow-500" />
                    ) : (
                      <Moon className="w-5 h-5 text-primary" />
                    )
                  ) : (
                    <div className="w-5 h-5" />
                  )}
                </Button>
              </motion.div>
            </div>

            {/* Mobile Header */}
            <div className="flex lg:hidden items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-full w-10 h-10 hover:bg-primary/10"
              >
                {mounted ? (
                  theme === "dark" ? (
                    <Sun className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <Moon className="w-5 h-5 text-primary" />
                  )
                ) : (
                  <div className="w-5 h-5" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-full w-10 h-10 hover:bg-primary/10"
              >
                <motion.div
                  animate={isMobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </motion.div>
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-50 lg:hidden bg-background/95 backdrop-blur-xl border-b border-border shadow-lg"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(link.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === link.name.toLowerCase()
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{link.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
