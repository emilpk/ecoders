import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Heart, Lightbulb, PenTool } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Emil</h1>
            <p className="text-xl text-gray-600">Passionate developer, entrepreneur, and lifelong learner</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src="/emil-avatar.jpeg"
                alt="Emil Krautmann"
                width={400}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Hello, I'm Emil Krautmann</h2>
              <p className="text-lg text-gray-700 mb-6">
                With over 27 years in web development, I've witnessed and contributed to the incredible evolution of the
                web. From the early days of static HTML to today's sophisticated React applications, I've been
                passionate about crafting digital experiences that make a difference.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Beyond coding, I'm an entrepreneur at heart. I love sharing knowledge through blogging, creating digital
                products that solve real problems, and building simple yet powerful tools that anyone can use for free.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-pink-100 text-pink-800">
                  27+ Years Experience
                </Badge>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                  Entrepreneur
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  Blogger
                </Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Product Creator
                </Badge>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Code className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Love of Coding</h3>
                <p className="text-gray-600">
                  Every line of code is an opportunity to solve problems and create something meaningful.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Lightbulb className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">AI Enthusiast</h3>
                <p className="text-gray-600">
                  Fascinated by AI's potential to transform how we build and interact with technology.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <PenTool className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Writing</h3>
                <p className="text-gray-600">
                  Sharing insights and experiences through blogging to help fellow developers grow.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-600">
                  Building tools and products that serve the developer community and beyond.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">The Early Days</h4>
                <p className="text-gray-700">
                  Started my journey in web development in the late 90s, when the web was still finding its identity.
                  I've been fortunate to grow alongside the industry, adapting to new technologies and methodologies.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Professional Growth</h4>
                <p className="text-gray-700">
                  Over the years, I've worked on diverse projects ranging from small business websites to
                  enterprise-level applications. Each project taught me something new and reinforced my passion for
                  clean, efficient code.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Entrepreneurial Spirit</h4>
                <p className="text-gray-700">
                  Recently, I've embraced the solopreneur path, combining my technical expertise with business acumen to
                  create digital products, write about technology, and build tools that make developers' lives easier.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
