import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"

const featuredProjects = [
  {
    title: "E-Commerce Platform Redesign",
    description:
      "Complete overhaul of a legacy e-commerce platform with modern React architecture, resulting in 40% increase in conversion rates.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    category: "Full-Stack Development",
    impact: "40% ↑ Conversion Rate",
  },
  {
    title: "Healthcare Management System",
    description:
      "Built a comprehensive patient management system for healthcare providers with appointment scheduling and billing integration.",
    technologies: ["React", "Node.js", "PostgreSQL", "Express"],
    category: "Enterprise Application",
    impact: "50+ Healthcare Professionals",
  },
  {
    title: "Real Estate CRM Platform",
    description:
      "Custom CRM solution for real estate agents with lead management, property listings, and automated follow-up systems.",
    technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
    category: "CRM Development",
    impact: "35% ↑ Agent Productivity",
  },
]

export function Projects() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recent work showcasing modern web development and successful business outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                  <span className="text-sm font-semibold text-green-600">{project.impact}</span>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-pink-300 text-pink-700 hover:bg-pink-50">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
