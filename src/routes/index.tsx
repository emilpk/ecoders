import { createFileRoute } from '@tanstack/react-router'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Skills } from '@/components/skills'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Emil Krautmann - Senior Web Developer & Digital Entrepreneur | ecoders.dev' },
      { name: 'description', content: 'Senior web developer with 27+ years of experience. Specializing in React, Next.js, and modern web technologies.' },
      { name: 'keywords', content: 'web developer, React, Next.js, remote work, digital products, apps, consulting' },
      { property: 'og:title', content: 'Emil Krautmann - Senior Web Developer' },
      { property: 'og:description', content: 'Senior web developer with 27+ years of experience' },
      { property: 'og:url', content: 'https://ecoders.dev' },
      { property: 'og:type', content: 'website' },
    ],
  }),
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* <Header /> */}
      <main>
        <Hero />
        <Skills />
        <Contact />
      </main>
      {/* <Footer /> */}
    </div>
  )
}
