"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Code, BookOpen, Award } from "lucide-react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  const features = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "BS Computer Science from PMAS Arid Agriculture University",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      iconBg: "from-blue-500 to-cyan-500",
    },
    {
      icon: Code,
      title: "Expertise",
      description: "Full-Stack Development, Machine Learning, Computer Vision, NLP, and RAG",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      iconBg: "from-green-500 to-emerald-500",
    },
    {
      icon: BookOpen,
      title: "Research",
      description: "Published research on cloud automation and Organizational automation solution",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      iconBg: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "Achievements",
      description: "Certificates in Computer Vision and NLP, Robotics, and Management",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      iconBg: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-primary/5" />

      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-40 h-40 rounded-full blur-3xl opacity-10"
          style={{
            left: `${10 + i * 25}%`,
            top: `${10 + (i % 2) * 40}%`,
            background: `radial-gradient(circle, ${
              i % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--accent))"
            } 0%, transparent 70%)`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.15, 0.05],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get to Know Me Better
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about AI, innovation, and building impactful solutions
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="border-2 hover:border-primary/50 transition-all duration-500 overflow-hidden">
              <motion.div
                className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
              />
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <motion.div
                    className="flex-shrink-0"
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-5xl">
                      👨‍💻
                    </div>
                  </motion.div>

                  <div className="flex-1 space-y-4">
                    <motion.p
                      className="text-base md:text-lg leading-relaxed text-muted-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: false }}
                    >
                      I am an{" "}
                      <span className="text-primary font-semibold">
                        aspiring software engineer
                      </span>{" "}
                      with a strong foundation in computer science and a passion for{" "}
                      <span className="text-primary font-semibold">
                        artificial intelligence and computer vision
                      </span>
                      . I hold a{" "}
                      <span className="text-primary font-semibold">
                        Bachelor of Science in Computer Science
                      </span>{" "}
                      from Pir Mehr Ali Shah Arid Agriculture University, Rawalpindi.
                    </motion.p>

                    <motion.p
                      className="text-base md:text-lg leading-relaxed text-muted-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: false }}
                    >
                      My technical expertise spans{" "}
                      <span className="text-primary font-semibold">
                        Machine Learning, Computer Vision, Natural Language Processing
                      </span>
                      , and full-stack development using React, Next.js, and Django. I have
                      published research on cloud-based automation solutions and contributed
                      to AI-driven projects.
                    </motion.p>

                    <motion.p
                      className="text-base md:text-lg leading-relaxed text-muted-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: false }}
                    >
                      Currently working as an Associate Developer at{" "}
                      <span className="text-primary font-semibold">
                        Gravitas Technology
                      </span>
                      , I aim to advance my studies in AI while contributing to cutting-edge
                      research and innovative solutions.
                    </motion.p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: false }}
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                  <motion.div
                    className={`h-1 bg-gradient-to-r ${feature.iconBg}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  />
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.bgColor} mb-4`}
                      whileHover={{
                        rotate: [0, -10, 10, -10, 0],
                        scale: 1.1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className={`w-8 h-8 ${feature.color}`} />
                    </motion.div>
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
