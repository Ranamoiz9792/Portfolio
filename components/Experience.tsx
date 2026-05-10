"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, Calendar, BookOpen, Building2, ExternalLink } from "lucide-react"

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  const experiences = [
    {
      type: "work",
      icon: Briefcase,
      title: "Associate Developer",
      company: "Gravitas Technology",
      location: "Rawalpindi, Pakistan",
      period: "May 2025 - Present",
      color: "from-blue-500 to-cyan-500",
      description: [
        "Gained hands-on experience in full-stack development and coding practices",
        "Assisted in application development, deployment, and basic DevOps workflows",
        "Collaborated with team members on software development and maintenance tasks",
        "Implemented new features and improved application performance",
      ],
      technologies: ["React", "Next.js", "TypeScript", "PostgreSQL", "DevOps"],
    },
    {
      type: "work",
      icon: Briefcase,
      title: "AI/ML Intern",
      company: "CorTechSols Pvt. Ltd.",
      location: "Rawalpindi, Pakistan",
      period: "December 2024 - February 2025",
      color: "from-green-500 to-emerald-500",
      description: [
        "Gained hands-on experience in the field of Artificial Intelligence",
        "Acquired valuable skills and knowledge through teamwork",
        "Contributed to learning and development opportunities in ML and AI",
        "Worked on real-world AI projects and research initiatives",
      ],
      technologies: ["Machine Learning", "Python", "Computer Vision", "NLP"],
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "BS Computer Science",
      company: "Pir Mehr Ali Shah Arid Agriculture University",
      location: "Rawalpindi, Pakistan",
      period: "August 2018 - March 2025",
      color: "from-purple-500 to-pink-500",
      description: [
        "Bachelor of Science in Computer Science with focus on AI and software development",
        "Specialized coursework in Machine Learning, Computer Vision, and Web Development",
        "Completed comprehensive training in Computer Vision and ML algorithms",
      ],
      technologies: [],
    },
    {
      type: "publication",
      icon: BookOpen,
      title: "Published Research",
      company: "International Journal of Computer Science and Mobile Computing",
      location: "Vol. 14, Issue 1",
      period: "2025",
      color: "from-yellow-500 to-orange-500",
      url: "https://doi.org/10.47760/ijcsmc.2025.v14i01.007",
      description: [
        "Co-authored publication: 'Enhancing organizational efficiency: A cloud-based automation solution'",
        "Contributed to research on cloud computing and organizational automation",
        "Published alongside M.A. Basharat, Z.U. Abideen, N. Noor, and S. Zar",
      ],
      technologies: ["Cloud Computing", "Automation", "Research"],
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
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  }

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-secondary/20" />

      <motion.div
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/5 blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-accent/5 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Experience & Education
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary -translate-x-1/2 opacity-20" />

          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="space-y-8 md:space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative"
              >
                <motion.div
                  className="hidden md:block absolute left-1/2 top-8 w-4 h-4 rounded-full bg-primary -translate-x-1/2 z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  whileHover={{ scale: 1.5 }}
                />

                <motion.div
                  className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-full md:w-5/12">
                    {exp.url ? (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 h-full cursor-pointer group">
                          <motion.div
                            className={`h-1.5 bg-gradient-to-r ${exp.color}`}
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                          />
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4 mb-4">
                              <motion.div
                                className={`p-3 rounded-xl bg-gradient-to-br ${exp.color} flex-shrink-0`}
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                              >
                                <exp.icon className="w-6 h-6 text-white" />
                              </motion.div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <motion.h3
                                    className="text-xl font-bold group-hover:text-primary transition-colors"
                                    whileHover={{ x: 5 }}
                                  >
                                    {exp.title}
                                  </motion.h3>
                                  <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                                </div>
                                <p className="text-primary font-medium mb-1">{exp.company}</p>
                                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="w-3.5 h-3.5" />
                                    {exp.period}
                                  </span>
                                  <span className="hidden sm:inline">•</span>
                                  <span className="hidden sm:inline flex items-center gap-1">
                                    <Building2 className="w-3.5 h-3.5" />
                                    {exp.location}
                                  </span>
                                </div>
                              </div>
                            </div>

                        {exp.description.length > 0 && (
                          <ul className="space-y-2 mb-4">
                            {exp.description.map((item, i) => (
                              <motion.li
                                key={i}
                                className="text-sm text-muted-foreground flex items-start"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                                viewport={{ once: false }}
                              >
                                <motion.span
                                  className="text-primary mr-2 flex-shrink-0"
                                  animate={{
                                    scale: [1, 1.2, 1],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                  }}
                                >
                                  •
                                </motion.span>
                                <span>{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        )}

                        {exp.technologies.length > 0 && (
                          <motion.div
                            className="flex flex-wrap gap-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                          >
                            {exp.technologies.map((tech) => (
                              <motion.div
                                key={tech}
                                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                                transition={{ duration: 0.3 }}
                              >
                                <Badge
                                  variant="secondary"
                                  className="text-xs px-3 py-1 bg-primary/10 hover:bg-primary/20 transition-colors"
                                >
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </CardContent>
                    </Card>
                  </a>
                    ) : (
                      <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 h-full">
                        <motion.div
                          className={`h-1.5 bg-gradient-to-r ${exp.color}`}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        />
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4 mb-4">
                            <motion.div
                              className={`p-3 rounded-xl bg-gradient-to-br ${exp.color} flex-shrink-0`}
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                            >
                              <exp.icon className="w-6 h-6 text-white" />
                            </motion.div>
                            <div className="flex-1 min-w-0">
                              <motion.h3
                                className="text-xl font-bold mb-1"
                                whileHover={{ x: 5 }}
                              >
                                {exp.title}
                              </motion.h3>
                              <p className="text-primary font-medium mb-1">{exp.company}</p>
                              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3.5 h-3.5" />
                                  {exp.period}
                                </span>
                                <span className="hidden sm:inline">•</span>
                                <span className="hidden sm:inline flex items-center gap-1">
                                  <Building2 className="w-3.5 h-3.5" />
                                  {exp.location}
                                </span>
                              </div>
                            </div>
                          </div>

                        {exp.description.length > 0 && (
                          <ul className="space-y-2 mb-4">
                            {exp.description.map((item, i) => (
                              <motion.li
                                key={i}
                                className="text-sm text-muted-foreground flex items-start"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                                viewport={{ once: false }}
                              >
                                <motion.span
                                  className="text-primary mr-2 flex-shrink-0"
                                  animate={{
                                    scale: [1, 1.2, 1],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                  }}
                                >
                                  •
                                </motion.span>
                                <span>{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        )}

                        {exp.technologies.length > 0 && (
                          <motion.div
                            className="flex flex-wrap gap-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                          >
                            {exp.technologies.map((tech) => (
                              <motion.div
                                key={tech}
                                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                                transition={{ duration: 0.3 }}
                              >
                                <Badge
                                  variant="secondary"
                                  className="text-xs px-3 py-1 bg-primary/10 hover:bg-primary/20 transition-colors"
                                >
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </CardContent>
                    </Card>
                    )}
                  </div>

                  <div className="hidden md:block w-2/12" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
