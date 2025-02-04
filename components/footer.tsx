import { Github, Linkedin, FileText, X } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About</h3>
            <p className="text-sm text-muted-foreground">
              Full Stack Developer specializing in scalable software solutions and team leadership.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">aditya360@live.com</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Education</h3>
            <p className="text-sm text-muted-foreground">
              B.Tech in Computer Science
              <br />
              Sikkim Manipal Institute of Technology
              <br />
              2016 - 2020
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
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
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Aditya Mathur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

