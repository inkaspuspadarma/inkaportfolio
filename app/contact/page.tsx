"use client"
import { Button } from "@/components/ui/button"
import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import {
  ArrowLeft,
  Mail,
  MapPin,
  Linkedin,
  Github,
  Calendar,
  MessageCircle,
  Send,
  Copy,
  CheckCircle,
  User,
} from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const copyEmail = () => {
    navigator.clipboard.writeText("inkasharatupuspadarma@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || "New Contact from Portfolio")
    const body = encodeURIComponent(
      `Hi Inka,

My name is ${formData.name} and I'm reaching out from your portfolio website.

${formData.message}

Best regards,
${formData.name}
${formData.email}`,
    )

    const mailtoLink = `mailto:inkasharatupuspadarma@gmail.com?subject=${subject}&body=${body}`
    window.location.href = mailtoLink
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ThemeToggle />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.1%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-white">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>

            <div className="text-center">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-12 w-12 text-white" />
              </div>

              <h1 className="text-5xl font-bold mb-6">Let's Start a Conversation</h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Ready to collaborate on innovative projects? I'd love to hear about your ideas and discuss how we can
                create something amazing together.
              </p>
            </div>
          </div>
        </div>

        {/* Artistic Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" fill="none" className="w-full h-auto">
            <path
              d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
              fill="currentColor"
              className="text-gray-50 dark:text-gray-900"
            />
          </svg>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Send me a message and I'll get back to you soon
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-purple-200 dark:border-purple-800 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-purple-800 dark:text-purple-200 text-2xl">
                    <Send className="h-6 w-6" />
                    Send Me a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Your Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            className="pl-10 border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Your Email *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@example.com"
                            className="pl-10 border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        className="border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, ideas, or how we can collaborate..."
                        rows={6}
                        className="border-purple-200 focus:border-purple-500 focus:ring-purple-500 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      size="lg"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Direct Email */}
                <Card className="border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-blue-800 dark:text-blue-200">
                      <Mail className="h-6 w-6" />
                      Direct Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <Mail className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Email me at</p>
                            <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              inkasharatupuspadarma@gmail.com
                            </p>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" onClick={copyEmail} className="bg-white/50 hover:bg-white">
                          {copied ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4 text-blue-500" />
                          )}
                        </Button>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Prefer to email directly? Click copy and send me a message anytime.
                    </p>
                  </CardContent>
                </Card>

                {/* Professional Networks */}
                <Card className="border-teal-200 dark:border-teal-800 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-teal-800 dark:text-teal-200">
                      <Linkedin className="h-6 w-6" />
                      Professional Networks
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <a
                        href="https://www.linkedin.com/in/inkasharatupuspadarma/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button
                          variant="outline"
                          className="w-full justify-start bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/20 border-blue-200 hover:border-blue-300"
                        >
                          <Linkedin className="h-4 w-4 mr-2 text-blue-600" />
                          <span className="text-blue-700 dark:text-blue-300">Connect on LinkedIn</span>
                        </Button>
                      </a>
                      <a
                        href="https://github.com/inkaspuspadarma"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button
                          variant="outline"
                          className="w-full justify-start bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 border-gray-200 hover:border-gray-300"
                        >
                          <Github className="h-4 w-4 mr-2 text-gray-700 dark:text-gray-300" />
                          <span className="text-gray-700 dark:text-gray-300">Follow on GitHub</span>
                        </Button>
                      </a>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Connect with me on professional platforms for updates and networking.
                    </p>
                  </CardContent>
                </Card>

                {/* Quick Info */}
                <div className="grid grid-cols-1 gap-4">
                  <Card className="text-center border-green-200 dark:border-green-800 hover:shadow-md transition-all">
                    <CardContent className="p-4">
                      <MapPin className="h-6 w-6 text-green-600 mx-auto mb-2" />
                      <h3 className="font-semibold text-gray-800 dark:text-white text-sm mb-1">Location</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-xs">Bandung & Jakarta, Indonesia</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center border-orange-200 dark:border-orange-800 hover:shadow-md transition-all">
                    <CardContent className="p-4">
                      <Calendar className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                      <h3 className="font-semibold text-gray-800 dark:text-white text-sm mb-1">Availability</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-xs">Open for opportunities</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center border-purple-200 dark:border-purple-800 hover:shadow-md transition-all">
                    <CardContent className="p-4">
                      <MessageCircle className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                      <h3 className="font-semibold text-gray-800 dark:text-white text-sm mb-1">Response Time</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-xs">Within 24 hours</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">What to Expect</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Here's how I approach new collaborations</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Initial Discussion</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  We'll discuss your project goals, requirements, and how I can contribute to your success.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Strategic Planning</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  I'll analyze your needs and propose a strategic approach with clear timelines and deliverables.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Collaborative Execution</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  We'll work together to bring your vision to life with regular updates and transparent communication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.1%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Something Great?</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Whether you have a specific project in mind or just want to explore possibilities, I'm here to help turn
              your ideas into reality.
            </p>
            <a href="mailto:inkasharatupuspadarma@gmail.com?subject=Let's Collaborate&body=Hi Inka, I'm interested in discussing a potential collaboration...">
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-pink-50 shadow-lg hover:shadow-xl transition-all"
              >
                <Mail className="h-5 w-5 mr-2" />
                Let's Get Started
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400">© 2025 Inka Sharatu Puspadarma. Crafted with passion and innovation.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
