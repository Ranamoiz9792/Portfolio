"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code2 } from "lucide-react"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const titles = [
    "Aspiring Software Engineer",
    "AI & Computer Vision Specialist",
    "Full-Stack Developer",
    "Machine Learning Enthusiast",
  ]

  const [currentTitle, setCurrentTitle] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 dark:from-primary/10 dark:via-background dark:to-secondary/10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "400% 400%",
        }}
      />

      {/* Floating orbs with mouse parallax */}
      <motion.div
        className="absolute inset-0"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 100 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-30"
            style={{
              width: 300 + i * 100,
              height: 300 + i * 100,
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
              background: `radial-gradient(circle, ${i % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--accent))"}/${0.3 - i * 0.05} 0%, transparent 70%)`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }} />
      </div>

      {/* Animated particles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0"
      >
        {[...Array(30)].map((_, i) => {
          const xPos = (i * 3.33) % 100
          const yPos = (i * 5.67) % 100
          const duration = 3 + (i % 4)
          const delay = (i * 0.15) % 3
          const size = 2 + (i % 3)

          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/40"
              style={{
                width: size,
                height: size,
              }}
              initial={{
                x: `${xPos}%`,
                y: `${yPos}%`,
                opacity: 0,
                scale: 0,
              }}
              animate={{
                y: [`${yPos}%`, `${(yPos + 30) % 100}%`, `${yPos}%`],
                x: [`${xPos}%`, `${(xPos + 10) % 100}%`, `${xPos}%`],
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "easeInOut",
              }}
            />
          )
        })}
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 text-center"
          >
            <motion.span
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Sparkles className="inline w-4 h-4 mr-2" />
              Welcome to my portfolio
            </motion.span>
          </motion.div>

          {/* Main heading with typing effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-center"
          >
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% auto",
              }}
            >
              Muhammad Moiz
            </motion.span>
            <br />
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground to-primary"
              animate={{
                backgroundPosition: ["0%", "100%", "0%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% auto",
              }}
            >
              Riaz
            </motion.span>
          </motion.h1>

          {/* Animated title changer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl sm:text-2xl md:text-3xl text-center mb-6 min-h-[80px] flex items-center justify-center"
          >
            <div className="flex items-center gap-3">
              <Code2 className="w-8 h-8 text-primary animate-pulse" />
              <motion.span
                key={currentTitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="font-semibold text-foreground"
              >
                {titles[currentTitle]}
              </motion.span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto leading-relaxed"
          >
            BS Computer Science Graduate passionate about{" "}
            <span className="text-primary font-medium">artificial intelligence</span>
            ,{" "}
            <span className="text-primary font-medium">machine learning</span>
            , and{" "}
            <span className="text-primary font-medium">computer vision</span>
            . Contributing to cutting-edge research and innovative AI solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="min-w-[180px] h-14 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow"
              >
                View Projects
                <ArrowDown className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="min-w-[180px] h-14 text-base border-2 hover:bg-primary/10"
              >
                Contact Me
                <Mail className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links with enhanced animations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center gap-6 mb-32"
          >
            {[
              { icon: Github, href: "https://github.com/ranamoiz9792", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/muhammadmoizriaz", label: "LinkedIn" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-background/80 backdrop-blur-sm border-2 border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300 shadow-lg"
                whileHover={{
                  scale: 1.15,
                  rotate: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 },
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground">Scroll down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
