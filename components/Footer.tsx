import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Muhammad Moiz Riaz. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ranamoiz9792"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammadmoizriaz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:ranamoiz9792@gmail.com"
              className="text-muted-foreground hover:text-foreground hover:scale-110 transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
