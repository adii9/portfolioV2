import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays } from "lucide-react"

const posts = [
  {
    title: "Building Scalable Documentation",
    description: "Learn how to create and maintain documentation that grows with your project",
    date: "Feb 1, 2024",
    readTime: "5 min read",
  },
  {
    title: "Community Management Best Practices",
    description: "Essential tips for managing and growing developer communities",
    date: "Jan 28, 2024",
    readTime: "7 min read",
  },
  {
    title: "Technical Writing Tips",
    description: "Improve your technical writing skills with these proven strategies",
    date: "Jan 25, 2024",
    readTime: "6 min read",
  },
]

export function BlogPosts() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.title} className="group cursor-pointer hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CalendarDays className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

