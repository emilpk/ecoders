import { createFileRoute } from '@tanstack/react-router'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/products')({
  head: () => ({
    meta: [
      { title: 'Digital Products | ecoders.dev' },
      { name: 'description', content: 'Tools and resources to accelerate your development workflow.' },
      { property: 'og:title', content: 'Digital Products - Emil Krautmann' },
      { property: 'og:description', content: 'Tools and resources to accelerate your development workflow' },
      { property: 'og:url', content: 'https://ecoders.dev/products' },
      { property: 'og:type', content: 'website' },
    ],
  }),
  component: Products,
})

function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Digital Products</h1>
            <p className="text-xl text-gray-600">
              Tools and resources to accelerate your development workflow
            </p>
            <div>
              <Badge className="bg-green-100 text-green-800">Coming soon!</Badge>
            </div>
          </div>

          <div className="mb-16" />

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
    </div>
  )
}
