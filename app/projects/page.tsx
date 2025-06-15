import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform Redesign",
    description:
      "Complete overhaul of a legacy e-commerce platform, migrating from PHP to React/Next.js with improved performance and user experience.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    category: "Full-Stack Development",
    year: "2024",
    impact: "40% increase in conversion rate, 60% faster page load times",
  },
  {
    title: "Healthcare Management System",
    description:
      "Built a comprehensive patient management system for a healthcare provider, featuring appointment scheduling, patient records, and billing integration.",
    technologies: ["React", "Node.js", "PostgreSQL", "Express", "JWT"],
    category: "Enterprise Application",
    year: "2023",
    impact: "Streamlined operations for 50+ healthcare professionals",
  },
  {
    title: "Real Estate CRM Platform",
    description:
      "Developed a custom CRM solution for real estate agents with lead management, property listings, and automated follow-up systems.",
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "AWS"],
    category: "CRM Development",
    year: "2023",
    impact: "Increased agent productivity by 35%",
  },
  {
    title: "Financial Dashboard Application",
    description:
      "Created an interactive dashboard for financial data visualization with real-time updates and advanced analytics capabilities.",
    technologies: ["React", "D3.js", "Python", "FastAPI", "WebSocket"],
    category: "Data Visualization",
    year: "2022",
    impact: "Reduced report generation time from hours to minutes",
  },
  {
    title: "Learning Management System",
    description:
      "Built a comprehensive LMS for online education with video streaming, progress tracking, and interactive assessments.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AWS S3"],
    category: "EdTech",
    year: "2022",
    impact: "Served 10,000+ students across multiple courses",
  },
  {
    title: "Inventory Management System",
    description:
      "Developed a multi-location inventory system with barcode scanning, automated reordering, and detailed reporting.",
    technologies: ["Angular", "C#", ".NET Core", "SQL Server", "Azure"],
    category: "Enterprise Software",
    year: "2021",
    impact: "Reduced inventory discrepancies by 85%",
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h1>
            <p className="text-xl text-gray-600">A showcase of recent work and successful implementations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-900 mb-1">Impact:</h4>
                    <p className="text-sm text-green-600">{project.impact}</p>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="p-8 bg-gradient-to-r from-pink-100 to-purple-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>
              <p className="text-gray-700 mb-6">
                I'm available for new remote projects and would love to discuss how I can help bring your ideas to life.
              </p>
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                Get In Touch
              </Button>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
