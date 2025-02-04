"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { FeaturedWork } from "@/components/featured-work"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  const handleScrollToContact = () => {
    const contactElement = document.getElementById("contact")
    if (contactElement) {
      contactElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-12">
        <section id="about" className="py-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text">
            Building scalable
            <br />
            software solutions
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            Full Stack Developer with a proven track record in leading teams to deliver scalable and high-quality
            software solutions. Skilled in optimizing performance, ensuring seamless integration and user experience.
            Adept at mentoring team members and driving projects to successful completion.
          </p>
``
          <div className="flex flex-wrap gap-4">
            {/* Smooth scroll trigger */}
            <button
              onClick={handleScrollToContact}
              className="text-muted-foreground hover:text-foreground bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg text-lg"
            >
              Get in touch
            </button>
          </div>
        </section>

        <Experience />
        <FeaturedWork />
        <Skills />
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  )
}