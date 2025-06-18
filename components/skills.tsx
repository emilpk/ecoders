import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Cloud,
  Smartphone,
  Palette,
  Zap,
  Shield,
  Computer,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    color: "text-pink-600",
    skills: [
      "React",
      "Next.js",
      "React Router 7",
      "TypeScript",
      "JavaScript",
      "Angular",
      "Tailwind CSS",
      "SASS/SCSS",
      "HTML5",
      "ColdFusion",
      "WordPress",
    ],
  },
  {
    title: "Backend Development",
    icon: Database,
    color: "text-purple-600",
    skills: ["Node.js", "Python", "PHP", "Express.js", "FastAPI"],
  },
  {
    title: "Database & Storage",
    icon: Database,
    color: "text-blue-600",
    skills: [
      "AWS DynamoDB",
      "AWS OpenSearch",
      "Elasticsearch",
      "MSSQL",
      "MySQL",
      "Oracle",
      "PostgreSQL",
      "Supabase",
      "SQLite",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "text-green-600",
    skills: [
      "AWS",
      "Vercel",
      "Netlify",
      "Azure",
      "Docker",
      "CI/CD",
      "GitHub",
      "Bitbucket",
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "text-orange-600",
    skills: ["Progressive Web Apps", "Responsive Design"],
  },
  {
    title: "Design & UX",
    icon: Palette,
    color: "text-red-600",
    skills: [
      "Figma",
      "StoryBook",
      "UI Component Libraries",
      "Accessibility (WCAG)",
    ],
  },
  {
    title: "AI / Machine Learning",
    icon: Computer,
    color: "text-red-600",
    skills: [
      "AWS Bedrock",
      "AI/ML Integration",
      "MCPs / Tools",
      "RAG",
      "LLMs",
      "AWS Rekognition",
      "AWS Polly",
      "AWS Transcribe",
      "AWS Textract",
      "AWS Comprehend",
    ],
  },
  {
    title: "Performance & SEO",
    icon: Zap,
    color: "text-yellow-600",
    skills: [
      "Web Performance",
      "SEO Optimization",
      "Core Web Vitals",
      "Analytics",
    ],
  },
  {
    title: "Security & Best Practices",
    icon: Shield,
    color: "text-indigo-600",
    skills: [
      "Web Security",
      "Authentication",
      "GDPR Compliance",
      "Code Review",
    ],
  },
];

export function Skills() {
  return (
    <section className="py-20 bg-white/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit built over 27 years of web development
            experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <IconComponent
                      className={`h-8 w-8 ${category.color} mr-3`}
                    />
                    <h3 className="text-lg font-semibold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              27+ Years of Experience
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              From the early days of table-based layouts to modern React
              applications, I've evolved with the web. My experience spans
              multiple technologies, frameworks, and industry best practices.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-pink-100 text-pink-800 px-4 py-2">
                Legacy System Migration
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 px-4 py-2">
                Modern Architecture
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
                Team Leadership
              </Badge>
              <Badge className="bg-green-100 text-green-800 px-4 py-2">
                Mentoring
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
