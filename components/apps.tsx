import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Calculator, Palette, Code, FileText } from "lucide-react"

const apps = [
  {
    title: "Color Palette Generator",
    description:
      "Generate beautiful color palettes for your web projects with accessibility checks and export options.",
    icon: Palette,
    category: "Design Tool",
    status: "Live",
    users: "2.5K+",
    features: ["Accessibility Checker", "Export to CSS/SCSS", "Palette History"],
  },
  {
    title: "CSS Grid Generator",
    description: "Visual CSS Grid generator with live preview and code export. Perfect for rapid prototyping.",
    icon: Code,
    category: "Developer Tool",
    status: "Live",
    users: "1.8K+",
    features: ["Visual Editor", "Responsive Preview", "Code Export"],
  },
  {
    title: "Unit Converter Pro",
    description: "Comprehensive unit converter for developers - pixels, ems, rems, percentages, and more.",
    icon: Calculator,
    category: "Utility",
    status: "Live",
    users: "950+",
    features: ["Multiple Units", "Batch Conversion", "History"],
  },
  {
    title: "Markdown Editor",
    description: "Clean, distraction-free markdown editor with live preview and export options.",
    icon: FileText,
    category: "Productivity",
    status: "Coming Soon",
    users: "N/A",
    features: ["Live Preview", "Export Options", "Syntax Highlighting"],
  },
]

export function Apps() {
  return (
    <section className="py-20 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Free Developer Tools</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, useful applications that solve everyday problems for developers and designers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {apps.map((app, index) => {
            const IconComponent = app.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full w-fit">
                    <IconComponent className="h-8 w-8 text-pink-600" />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <Badge
                      variant={app.status === "Live" ? "default" : "secondary"}
                      className={app.status === "Live" ? "bg-green-100 text-green-800" : ""}
                    >
                      {app.status}
                    </Badge>
                    {app.status === "Live" && <span className="text-sm text-gray-500">{app.users} users</span>}
                  </div>
                  <CardTitle className="text-lg">{app.title}</CardTitle>
                  <Badge variant="outline" className="text-xs w-fit mx-auto">
                    {app.category}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{app.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-xs text-gray-900 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {app.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-xs text-gray-600 flex items-center">
                          <div className="w-1 h-1 bg-pink-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    size="sm"
                    className="w-full"
                    variant={app.status === "Live" ? "default" : "outline"}
                    disabled={app.status !== "Live"}
                  >
                    {app.status === "Live" ? (
                      <>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Try It Free
                      </>
                    ) : (
                      "Coming Soon"
                    )}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Have an Idea for a Tool?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              I'm always looking to build useful tools that solve real problems. If you have an idea for a simple app
              that could help developers, let me know!
            </p>
            <Button className="bg-pink-600 hover:bg-pink-700">Suggest a Tool</Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
