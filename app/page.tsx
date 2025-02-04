import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { FeaturedWork } from "@/components/featured-work"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-12">
        <section id="about" className="py-20">
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-1">
              <span className="text-sm text-muted-foreground">Full Stack Developer</span>
            </div>
          </div>

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

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get in touch
            </Button>
            <Link href="/aditya_mathur_resume.pdf" download>
              <Button size="lg" variant="outline">
                Download Resume →
              </Button>
            </Link>
          </div>
        </section>

        <Experience />
        <FeaturedWork />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

