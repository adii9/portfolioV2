import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Technical Skills",
    skills: ["Debugging", "Query Optimization", "Performance Tuning", "Code Review", "System Architecture Analysis"],
  },
  {
    title: "Languages & Frameworks",
    skills: ["Python", "JavaScript", "React", "React Native", "Django"],
  },
]

export function Skills() {
  return (
    <section className="py-20" id="skills">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
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

