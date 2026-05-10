"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code2, Database, Wrench, Sparkles, Target } from "lucide-react"

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  const skillCategories = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: ["Machine Learning", "Computer Vision", "Natural Language Processing", "RAG", "Vector Embeddings"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-500 dark:text-blue-400",
    },
    {
      icon: Code2,
      title: "Frontend Development",
      skills: ["React", "React Native", "Next.js", "Electron.js", "Tailwind CSS"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      textColor: "text-green-500 dark:text-green-400",
    },
    {
      icon: Database,
      title: "Backend & Tools",
      skills: ["Django", "Python", "MongoDB", "Supabase", "N8N", "Flask", "Qdrant"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      textColor: "text-purple-500 dark:text-purple-400",
    },
    {
      icon: Wrench,
      title: "AI Frameworks",
      skills: ["Gemini API", "YOLOv8", "OpenCV", "NLTK", "face_recognition", "RAG"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      textColor: "text-orange-500 dark:text-orange-400",
    },
  ]

  const softSkills = [
    { name: "Creative Problem-Solving", icon: Target },
    { name: "Active Listening", icon: Sparkles },
    { name: "Team Collaboration", icon: "🤝" },
    { name: "Research & Analysis", icon: "🔍" },
    { name: "Communication", icon: "💬" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1 },
  }

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground">
            Technical Skills
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={item}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
                  <motion.div
                    className={`h-1 bg-gradient-to-r ${category.color}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  />
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
                      <motion.div
                        className={`p-2 rounded-lg ${category.bgColor}`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <category.icon className={`w-5 h-5 ${category.textColor}`} />
                      </motion.div>
                      <span className="hidden sm:inline">{category.title}</span>
                      <span className="sm:hidden text-sm">{category.title.split(" ")[0]}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className={`${category.bgColor} ${category.textColor} hover:scale-105 transition-transform border-0`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl md:text-2xl">
                  <Sparkles className="w-6 h-6 text-primary" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="flex flex-col items-center text-center p-4 rounded-xl bg-secondary/30 hover:bg-primary/10 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      viewport={{ once: false }}
                    >
                      <div className="text-3xl mb-2">
                        {typeof skill.icon === "string" ? skill.icon : <skill.icon className="w-6 h-6 text-primary" />}
                      </div>
                      <span className="text-xs sm:text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
