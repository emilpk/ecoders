import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Download, Star } from "lucide-react"

const products = [
  {
    title: "React Component Library Starter",
    description:
      "A comprehensive starter template for building and publishing React component libraries with TypeScript, Storybook, and automated testing.",
    price: "$29",
    category: "Digital Product",
    features: [
      "TypeScript configuration",
      "Storybook integration",
      "Jest & React Testing Library setup",
      "Automated CI/CD pipeline",
      "NPM publishing workflow",
      "Documentation templates",
    ],
    downloads: "150+",
    rating: 4.8,
    status: "Available",
  },
]

const upcomingProducts = [
  {
    title: "Next.js SaaS Boilerplate",
    description: "Complete SaaS starter with authentication, payments, dashboard, and deployment configuration.",
    expectedPrice: "$99",
    category: "Coming Soon",
    features: [
      "Authentication with NextAuth",
      "Stripe payment integration",
      "Admin dashboard",
      "Multi-tenant architecture",
      "Email templates",
      "Deployment guides",
    ],
    releaseDate: "Q2 2025",
  },
  {
    title: "Web Developer's Toolkit",
    description: "A collection of utilities, code snippets, and templates for modern web development.",
    expectedPrice: "$49",
    category: "Coming Soon",
    features: [
      "Code snippet library",
      "Project templates",
      "Development utilities",
      "Best practices guide",
      "Performance optimization tips",
      "SEO checklists",
    ],
    releaseDate: "Q3 2025",
  },
]

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Digital Products</h1>
            <p className="text-xl text-gray-600">Tools and resources to accelerate your development workflow</p>
          </div>

          {/* Available Products */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Available Now</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow border-2 border-pink-200">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className="bg-green-100 text-green-800">{product.status}</Badge>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-pink-600">{product.price}</div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                          {product.rating} ({product.downloads} downloads)
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{product.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-sm text-gray-900 mb-2">What's Included:</h4>
                      <ul className="space-y-1">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-pink-600 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1 bg-pink-600 hover:bg-pink-700">
                        <Download className="h-4 w-4 mr-2" />
                        Purchase
                      </Button>
                      <Button variant="outline" size="icon">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Coming Soon Products */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Coming Soon</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {upcomingProducts.map((product, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow border-2 border-purple-200">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="border-purple-300 text-purple-700">
                        {product.category}
                      </Badge>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-purple-600">{product.expectedPrice}</div>
                        <div className="text-sm text-gray-500">Expected: {product.releaseDate}</div>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{product.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-sm text-gray-900 mb-2">Planned Features:</h4>
                      <ul className="space-y-1">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                            <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="outline" className="w-full border-purple-300 text-purple-700 hover:bg-purple-50">
                      Notify Me When Available
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <Card className="p-8 bg-gradient-to-r from-pink-100 to-purple-100">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
              <p className="text-gray-700 mb-6">
                Be the first to know about new product releases, updates, and exclusive developer resources.
              </p>
              <div className="flex max-w-md mx-auto gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <Button className="bg-pink-600 hover:bg-pink-700">Subscribe</Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
