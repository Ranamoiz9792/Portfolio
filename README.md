# Muhammad Moiz Riaz - Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- 🌓 Dark/Light theme toggle
- 📱 Fully responsive design
- ✨ Smooth animations with Framer Motion
- 🎨 Modern UI with shadcn/ui components
- 🚀 Optimized for performance
- 📤 CV download functionality

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Theme**: next-themes
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Experience.tsx      # Experience section
│   ├── Projects.tsx        # Projects section
│   ├── Contact.tsx         # Contact section
│   └── Footer.tsx          # Footer
├── lib/
│   └── utils.ts            # Utility functions
└── public/
    └── cv.pdf              # CV for download
```

## Deployment

This project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

## License

© 2024 Muhammad Moiz Riaz. All rights reserved.
