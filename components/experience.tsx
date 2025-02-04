import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Tata Technologies",
    period: "Jan 2023 - Present",
    achievements: [
      "Led a team of developers in building a scalable logistics web application",
      "Successfully led development increasing user engagement by 42%",
      "Implemented microservices architecture",
      "Enhanced database performance by optimizing heavy SQL queries, reducing execution time by 60%",
      "Ensured ITGC compliance and optimized PostgreSQL performance",
    ],
  },
  {
    title: "Senior Software Developer",
    company: "Wipro Technologies",
    period: "Oct 2022 - Jan 2023",
    achievements: [
      "Designed and implemented robust solutions with React.js, React Native, and Python Django",
      "Led testing and bug-fixing efforts",
      "Implemented automated testing with GitHub Actions",
    ],
  },
  {
    title: "Software Developer",
    company: "Wipro Technologies",
    period: "Sep 2020 - Oct 2022",
    achievements: [
      "Contributed to backend and frontend development",
      "Built scalable applications with React.js and Python Django",
      "Participated in code reviews and team meetings",
    ],
  },
]

export function Experience() {
  return (
    <section className="py-20" id="experience">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <Card key={exp.title} className="group hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription>{exp.company}</CardDescription>
                  </div>
                  <Badge variant="outline">{exp.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

