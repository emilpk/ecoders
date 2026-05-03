import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  MessageCircle,
  Calendar,
  MapPin,
  Clock,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import myInfo from "@/data/my-info.json";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Available for remote projects, consulting, and ongoing maintenance.
            Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-5 w-5 text-pink-600 mr-2" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <a
                    href={`mailto:${myInfo.email}`}
                    className="text-pink-600 hover:text-pink-700 transition-colors"
                  >
                    {myInfo.email}
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    Remote (Available Worldwide)
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Availability
                  </h4>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    UTC+8 (Western Australia Time)
                  </div>
                  <Badge className="bg-green-100 text-green-800">
                    Available for new projects
                  </Badge>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Connect</h4>
                  <div className="flex space-x-3">
                    <a
                      href={`${myInfo.socials.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="outline">
                        <Github className="h-4 w-4" />
                      </Button>
                    </a>
                    <a
                      href={`${myInfo.socials.linkedIn}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="outline">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </a>
                    {/* <Button size="sm" variant="outline">
                      <Twitter className="h-4 w-4" />
                    </Button> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          {/* <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Start a Conversation</CardTitle>
                <p className="text-gray-600">
                  Tell me about your project and let's discuss how I can help.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Your company (optional)"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                      <option value="">Select project type</option>
                      <option value="new-website">New Website</option>
                      <option value="web-app">Web Application</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="maintenance">Maintenance & Updates</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="over-50k">$50,000+</option>
                      <option value="discuss">Let's discuss</option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-pink-600 hover:bg-pink-700"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>*/}
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <Calendar className="h-12 w-12 text-pink-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Schedule a Call
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Book a free 30-minute consultation to discuss your project
            </p>
            <Button variant="outline" size="sm">
              <ExternalLink className="h-4 w-4 mr-2" />
              Book Call
            </Button>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <ExternalLink className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Read My Blog
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Check out my latest articles on web development and technology
            </p>
            <a
              href={`${myInfo.blogs.hashnode}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Visit Blog
              </Button>
            </a>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Quick Question?
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Have a quick question? Send me a direct message
            </p>
            <a href={`mailto:${myInfo.email}?subject=Quick Question`}>
              <Button variant="outline" size="sm">
                <Mail className="h-4 w-4 mr-2" />
                Quick Email
              </Button>
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
}
