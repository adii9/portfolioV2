import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Meld",
    description:
      "Developed a responsive, cross-platform React Native app for Meld, enhancing user engagement on both iOS and Android devices.",
    tags: ["React Native", "iOS", "Android", "Cross-platform"],
    link: "#",
  },
  {
    title: "CraftFlow",
    description:
      "Developed a web app to streamline inventory and order management, replacing inefficient WhatsApp and Excel processes for a furniture manufacturing plant.",
    tags: ["Web Development", "Inventory Management", "Process Optimization"],
    link: "#",
  },
  {
    title: "Breast Cancer Detection",
    description: "Developed a CNN for breast cancer detection using the Breakhis dataset, achieving 95.33% accuracy.",
    tags: ["Machine Learning", "CNN", "Healthcare", "Python"],
    link: "#",
  },
]

export function FeaturedWork() {
  return (
    <section className="py-20" id="projects">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="group hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

