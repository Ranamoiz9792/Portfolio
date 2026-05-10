"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Project Management & AI Insights Platform",
      description: "Full-stack web application with AI-powered task analysis using Google Gemini, featuring role-based access control, real-time tracking, and automated workflows.",
      longDescription: [
        "Developed Next.js 14 application with React, TypeScript, and Tailwind CSS frontend",
        "Integrated Google Gemini AI for intelligent task analysis and insights generation",
        "Implemented PostgreSQL via Supabase for data persistence with role-based access control",
        "Built n8n email automation for team communication and notifications",
        "Created comprehensive project, task, deliverable, and issue management with real-time tracking",
      ],
      technologies: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Supabase", "Gemini AI", "N8N"],
      gradient: "from-blue-500 via-cyan-500 to-purple-500",
      bgColor: "bg-blue-500",
      icon: "📊",
      glow: "shadow-blue-500/25",
    },
    {
      title: "VQA with Scene Awareness",
      description: "Assistive application for visually impaired users combining VQA, YOLOv8 object detection, and NLP-driven voice interaction for real-time audio feedback.",
      longDescription: [
        "Built React Native assistive application for visually impaired users using Visual Question Answering",
        "Implemented YOLOv8-based object and person detection with real-time processing",
        "Created person recognition system with NLP-driven voice interaction",
        "Delivered real-time audio feedback through fully hands-free, accessibility-optimized interface",
        "Developed Flask-based backend handling AI inference and request processing",
      ],
      technologies: ["React Native", "YOLOv8", "Computer Vision", "Flask", "NLP", "VQA", "Python"],
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      bgColor: "bg-green-500",
      icon: "👁️",
      glow: "shadow-green-500/25",
    },
    {
      title: "RAG-based Document Intelligence System",
      description: "Advanced document search and retrieval system using hybrid search (BM25 + vector embeddings) with Gemini 2.5 Flash for intelligent, context-aware responses.",
      longDescription: [
        "Built document upload system storing files, embeddings, and metadata in Supabase",
        "Implemented hybrid search combining BM25 keyword matching and vector embeddings for precision retrieval",
        "Integrated Gemini 2.5 Flash LLM for generating meaningful responses from retrieved document segments",
        "Optimized RAG pipeline to selectively provide only relevant documents to LLM, reducing token usage",
        "Achieved fast, accurate document search with intelligent answer generation from enterprise knowledge base",
      ],
      technologies: ["Supabase", "Gemini 2.5 Flash", "Vector Embeddings", "BM25", "RAG", "Hybrid Search", "PostgreSQL"],
      gradient: "from-indigo-500 via-purple-500 to-blue-500",
      bgColor: "bg-indigo-500",
      icon: "📚",
      glow: "shadow-indigo-500/25",
    },
    {
      title: "Smart POS with Hardware Integration",
      description: "Desktop retail application with barcode scanner and thermal printer support for automated billing and inventory management.",
      longDescription: [
        "Developed Electron.js app with SQLite database, secure authentication, and real-time inventory sync",
        "Integrated USB barcode scanners and 80mm thermal printers with auto-print and custom formatting",
        "Built sales analytics dashboard with daily/monthly reports and customer dues management",
      ],
      technologies: ["Electron.js", "SQLite3", "Hardware Integration", "Barcode Scanning", "Thermal Printing"],
      gradient: "from-orange-500 via-red-500 to-pink-500",
      bgColor: "bg-orange-500",
      icon: "🖥️",
      glow: "shadow-orange-500/25",
    },
    {
      title: "AI Chatbot with Vector Embeddings",
      description: "Intelligent chatbot using Google Gemini for NLP and Qdrant vector database for knowledge storage, featuring dynamic learning and real-time responses.",
      longDescription: [
        "Developed Python-based chatbot using Google Gemini for advanced NLP capabilities",
        "Implemented Qdrant vector database for efficient knowledge storage and retrieval",
        "Created dynamic knowledge base expansion through continuous learning",
        "Achieved real-time response generation with high accuracy and contextual understanding",
      ],
      technologies: ["Python", "Gemini API", "Qdrant", "NLP", "Vector Embeddings"],
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      bgColor: "bg-purple-500",
      icon: "🤖",
      glow: "shadow-purple-500/25",
    },
    {
      title: "Full-Stack Blogging Platform",
      description: "MERN stack blogging website with complete authentication system, JWT security, email verification, and full CRUD operations deployed on Vercel.",
      longDescription: [
        "Developed MERN stack application with MongoDB, Express.js, React, and Node.js",
        "Implemented secure authentication with JWT tokens, email verification, and user registration",
        "Built complete CRUD functionality allowing users to create, read, update, and delete blog posts",
        "Added user profile management with update capabilities and personalized dashboards",
        "Deployed and hosted the application on Vercel with seamless CI/CD integration",
      ],
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Nodemailer", "Vercel", "MERN Stack"],
      gradient: "from-emerald-500 via-green-500 to-teal-500",
      bgColor: "bg-emerald-500",
      icon: "📝",
      glow: "shadow-emerald-500/25",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 80, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1 },
  }

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "400% 400%",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Featured Work</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My Projects
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative applications and full-stack solutions
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group"
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <Card className="h-full overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                  <motion.div
                    className={`h-2 bg-gradient-to-r ${project.gradient}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />

                  <CardHeader>
                    <motion.div
                      className="flex items-start justify-between mb-4"
                      animate={{
                        y: hoveredProject === index ? -5 : 0,
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        className="text-5xl"
                        animate={{
                          rotate: hoveredProject === index ? [0, -10, 10, -10, 0] : 0,
                          scale: hoveredProject === index ? 1.2 : 1,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        {project.icon}
                      </motion.div>
                    </motion.div>

                    <CardTitle className="text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <motion.ul className="space-y-2">
                      {project.longDescription.slice(0, 3).map((item, i) => (
                        <motion.li
                          key={i}
                          className="text-xs sm:text-sm text-muted-foreground flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                          viewport={{ once: false }}
                        >
                          <motion.span
                            className={`text-primary mr-2 flex-shrink-0 mt-0.5`}
                            animate={{
                              scale: hoveredProject === index ? [1, 1.3, 1] : 1,
                            }}
                            transition={{
                              duration: 0.5,
                              delay: i * 0.1,
                            }}
                          >
                            •
                          </motion.span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </motion.ul>

                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: false }}
                    >
                      {project.technologies.map((tech, i) => (
                        <motion.div
                          key={tech}
                          whileHover={{
                            scale: 1.1,
                            rotate: [0, -5, 5, 0],
                          }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                        >
                          <Badge
                            variant="secondary"
                            className={`text-xs px-2.5 py-1 ${project.bgColor}/10 hover:${project.bgColor}/20 transition-colors`}
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
