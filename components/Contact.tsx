"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MessageCircle, MapPin, Download, Linkedin, Github } from "lucide-react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })
  const [copied, setCopied] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ranamoiz9792@gmail.com",
      href: "mailto:ranamoiz9792@gmail.com",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      iconColor: "text-blue-500",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+92 310 8339792",
      href: "https://wa.me/923108339792",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      iconColor: "text-green-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Islamabad, Pakistan",
      href: null,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      iconColor: "text-purple-500",
    },
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/muhammadmoizriaz",
      color: "hover:bg-blue-500 hover:border-blue-500",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/ranamoiz9792",
      color: "hover:bg-purple-500 hover:border-purple-500",
      gradient: "from-purple-500 to-purple-600",
    },
  ]

  const downloadCV = () => {
    const link = document.createElement("a")
    link.href = "/cv.pdf"
    link.download = "Muhammad_Moiz_Riaz_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-background to-secondary/30" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for opportunities, collaborations, or just to say hi!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href || undefined}
                target={item.href?.includes("wa.me") ? "_blank" : undefined}
                rel={item.href?.includes("wa.me") ? "noopener noreferrer" : undefined}
                className="block"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: false }}
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 overflow-hidden group">
                  <motion.div
                    className={`h-1 bg-gradient-to-r ${item.color}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                  <CardContent className="p-6">
                    <motion.div
                      className="flex flex-col items-center text-center gap-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        className={`p-4 rounded-2xl ${item.bgColor} group-hover:scale-110 transition-transform duration-300`}
                        animate={{
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.5,
                        }}
                      >
                        <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                      </motion.div>
                      <div className="flex-1 min-w-0 w-full">
                        <p className="text-sm text-muted-foreground mb-2 font-medium">
                          {item.label}
                        </p>
                        {item.href ? (
                          <motion.span
                            className="font-semibold hover:text-primary transition-colors text-sm sm:text-base block"
                            whileHover={{ x: 5 }}
                          >
                            {item.value}
                          </motion.span>
                        ) : (
                          <p className="font-semibold text-sm sm:text-base">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 overflow-hidden">
              <motion.div
                className="h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
              />
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">
                      Download My CV
                    </h3>
                    <p className="text-muted-foreground max-w-md">
                      Get a detailed overview of my experience, skills, publications, and qualifications
                    </p>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      onClick={downloadCV}
                      className="min-w-[200px] h-14 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      {copied ? "Downloading..." : "Download CV"}
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground mb-6">
              Connect with me on social media
            </p>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                  whileTap={{ scale: 0.95 }}
                  viewport={{ once: false }}
                >
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-background border-2 border-border flex items-center justify-center text-muted-foreground transition-all duration-300 shadow-lg ${social.color} group-hover:shadow-2xl group-hover:shadow-primary/20`}
                    whileHover={{
                      rotate: [0, -5, 5, -5, 0],
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <social.icon className="w-7 h-7" />
                  </motion.div>
                  <motion.div
                    className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r ${social.gradient} text-white text-xs font-medium rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}
                    whileHover={{ y: -5 }}
                  >
                    {social.name}
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
