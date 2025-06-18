import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Apps } from "@/components/apps";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Header />
      <main>
        <Hero />
        <Skills />
        {/* <Projects /> */}
        {/* <Apps /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
