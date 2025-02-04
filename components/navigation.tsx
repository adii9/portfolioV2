"use client"

import Link from "next/link"
import { Github, Linkedin, FileText, Moon, Sun, X } from "lucide-react"
import { useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const id = target.getAttribute("href")?.slice(1)
      if (id) {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    }

    const links = document.querySelectorAll('nav a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", handleScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll)
      })
    }
  }, [])

  return (
    <nav className="flex items-center justify-between p-6 sticky top-0 bg-background/80 backdrop-blur-sm z-10">
      <div className="text-2xl font-bold text-primary">Aditya Mathur</div>
      <div className="hidden md:flex items-center space-x-6">
        <Link href="#about" className="text-muted-foreground hover:text-foreground">
          about
        </Link>
        <Link href="#experience" className="text-muted-foreground hover:text-foreground">
          experience
        </Link>
        <Link href="#projects" className="text-muted-foreground hover:text-foreground">
          projects
        </Link>
        <Link href="#skills" className="text-muted-foreground hover:text-foreground">
          skills
        </Link>
        <Link href="#contact" className="text-muted-foreground hover:text-foreground">
          contact
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="ml-4"
        >
          {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
        <Link href="https://github.com/adii9" className="text-muted-foreground hover:text-foreground" target="_blank" rel="noopener noreferrer">
          <Github className="h-5 w-5" />
        </Link>
        <Link href="https://www.linkedin.com/in/aditya-mathur-52322b16a/" className="text-muted-foreground hover:text-foreground" target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-5 w-5" />
        </Link>
        <Link href="https://x.com/adii_mathur" className="text-muted-foreground hover:text-foreground" target="_blank" rel="noopener noreferrer">
          <X className="h-5 w-5" />
        </Link>
      </div>
    </nav>
  )
}

