import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, ExternalLink } from "lucide-react";
import Image from "next/image";
import myInfo from "@/data/my-info.json";
import Link from "next/link";

export function Hero() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-6 bg-pink-100 text-pink-800 hover:bg-pink-200">
              Available for Remote Projects
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Senior Web Developer &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                {" "}
                Digital Entrepreneur
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              With 27+ years of experience crafting exceptional web experiences,
              I help businesses build modern, scalable applications while
              creating digital products that solve real problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="projects">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a
                href={`${myInfo.socials.linkedIn}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-300 text-purple-700 hover:bg-purple-50"
                >
                  <ExternalLink className="h-4 w-4" />
                  View My LinkedIn Profile
                </Button>
              </a>

              {/* <Button
                size="lg"
                variant="outline"
                className="border-purple-300 text-purple-700 hover:bg-purple-50"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button> */}
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Available for new projects</span>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                <a
                  href={`${myInfo.blogs.hashnode}`}
                  className="hover:text-pink-600 transition-colors"
                >
                  Read my blog
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <Image
                src={`${myInfo.avatar}`}
                alt={`${myInfo.name}`}
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
