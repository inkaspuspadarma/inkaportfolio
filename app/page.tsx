"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { InteractiveSkills } from "@/components/interactive-skills"
import Link from "next/link"
import {
  MapPin,
  Mail,
  Linkedin,
  Github,
  Calendar,
  Users,
  Heart,
  BarChart3,
  Target,
  MessageCircle,
  Award,
  ArrowRight,
} from "lucide-react"

export default function Portfolio() {
  const achievements = [
    { title: "Telkomsel Scholarship Awardee", icon: "🏆" },
    { title: "Winner of MyTelkomsel UX Case Challenge", icon: "🥇" },
    { title: "1st Place National Business Plan Competition", icon: "🚀" },
    { title: "4th Place National Business Model Competition", icon: "📊" },
    { title: "PPKO Funding Recipient for IoT Innovation", icon: "💡" },
    { title: "International Business Plan Competition Finalist", icon: "🌍" },
  ]

  const projects = [
    {
      id: "mytelkomsel-ux",
      title: "MyTelkomsel UX Case Study",
      category: "UX Research & Design Thinking",
      description:
        "Comprehensive UX case study for MyTelkomsel Super App transformation using design thinking approach. Addressed 63% negative ratings by redesigning homepage and prioritizing core user needs like quota check and package purchase.",
      image: "/images/mytelkomsel-ux-case-study.jpeg",
      tags: ["Design Thinking", "Figma", "User Research", "Prototyping"],
      gradient: "from-purple-500 via-pink-500 to-orange-500",
    },
    {
      id: "business-process-transformation",
      title: "Microservices Enterprise Architecture Design with AI-Powered OCR",
      category: "Enterprise Architecture & System Integration",
      description:
        "Led comprehensive enterprise architecture design using TOGAF framework, integrating AI-powered OCR and microservices for telecommunications complaint handling. Achieved 4.25/5 stakeholder validation score and created scalable solution improving operational efficiency.",
      image: "/images/ieee-logo.jpeg",
      tags: ["TOGAF", "Microservices", "OCR", "AI Integration"],
      gradient: "from-teal-500 via-cyan-500 to-blue-500",
    },
    {
      id: "customer-sentiment-analytics",
      title: "MyTelkomsel Sentiment Analysis Dashboard",
      category: "Data Analytics & AI Research",
      description:
        "AI-powered sentiment analysis using IBM Granite to analyze MyTelkomsel Super App transformation. Processed thousands of Google Play Store reviews, revealing 93% negative sentiment and providing actionable UX improvement recommendations.",
      image: "/images/mytelkomsel-sentiment-analysis.jpeg",
      tags: ["IBM Granite AI", "Python", "Streamlit", "NLP"],
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    },
    {
      id: "klinfield-agritech",
      title: "KlinField AgriTech Platform",
      category: "Product Strategy",
      description:
        "Winner of 1st Place National Business Plan Competition for AI-powered agricultural solution. Led strategic product development combining AI, IoT, and mobile platforms to revolutionize pest detection and crop management for Indonesian farmers.",
      image: "/images/klinfield-presentation.jpeg",
      tags: ["Product Strategy", "Market Research", "Stakeholder Management", "Go-to-Market"],
      gradient: "from-orange-500 via-red-500 to-pink-500",
    },
  ]

  const experiences = [
    {
      title: "Product Strategy Intern",
      company: "PT. Telekomunikasi Selular",
      period: "Jun 2025 - Present",
      description:
        "Leading product strategy initiatives and customer experience optimization for Indonesia's largest telecom operator.",
      current: true,
    },
    {
      title: "Customer Experience Analyst",
      company: "PT. Telekomunikasi Selular",
      period: "Sep 2024 - Dec 2024",
      description:
        "Analyzed customer feedback and implemented A/B testing frameworks to improve user satisfaction by 40%.",
      current: false,
    },
    {
      title: "Business Process Analyst",
      company: "PT. Telekomunikasi Indonesia",
      period: "Jul 2024 - Aug 2024",
      description:
        "Redesigned critical business processes and developed automated reporting systems for network operations.",
      current: false,
    },
    {
      title: "Practicum Assistant",
      company: "Telkom University",
      period: "Sep 2023 - Jan 2024",
      description:
        "Assisted in teaching business process modeling and information systems courses to undergraduate students.",
      current: false,
    },
  ]

  const certifications = [
    { name: "Google Project Management", issuer: "Google", year: "2025" },
    { name: "IBM Granite AI Classification", issuer: "IBM", year: "2025" },
    { name: "CAPM Certification", issuer: "PMI", year: "2024" },
    { name: "UX Design Fundamentals", issuer: "IBM", year: "2024" },
  ]

  const skills = [
    "Business Analyst",
    "Project Manager",
    "Product Strategy",
    "Process Optimization",
    "Stakeholder Management",
    "Data Analytics",
    "UX Research",
    "Strategic Planning",
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ThemeToggle />

      {/* Hero Section - Part 1: White/Light */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Profile Section */}
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-3xl">I</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-full px-4 py-2 mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-green-700 dark:text-green-300">Fresh Graduate - Available for Opportunities</span>
              </div>
            </div>

            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 bg-clip-text text-transparent dark:from-white dark:via-purple-200 dark:to-pink-200">
              Inka Sharatu Puspadarma
            </h1>
            <p className="text-2xl mb-6 text-purple-700 dark:text-purple-300 font-semibold">
              IT Strategic and Project Management
            </p>

            <p className="text-lg mb-8 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Crafting digital experiences through strategic insights and data-driven innovation. Specializing in
              customer experience optimization and business transformation.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Bandung & Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  inkasharatupuspadarma@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section - Part 2: Colorful */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.1%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-purple-700 hover:bg-pink-50 shadow-lg">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Discuss a Project
                </Button>
              </Link>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            <div className="flex justify-center gap-4">
              <a href="https://www.linkedin.com/in/inkasharatupuspadarma/" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </Button>
              </a>
              <a href="https://github.com/inkaspuspadarma" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent"
                >
                  <Github className="h-5 w-5 mr-2" />
                  GitHub
                </Button>
              </a>
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

      {/* About Me - Compact */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">What I Do</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Strategic solutions that drive digital transformation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="group hover:shadow-xl transition-all duration-300 border-purple-200 dark:border-purple-800 hover:scale-105 bg-gradient-to-br from-white to-purple-50/30 dark:from-gray-900 dark:to-purple-900/10">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg bg-gradient-to-r from-purple-800 to-pink-800 bg-clip-text text-transparent dark:from-purple-200 dark:to-pink-200">
                    Process Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                    Optimizing workflows and reducing costs by 35% through strategic process re-engineering.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-teal-200 dark:border-teal-800 hover:scale-105 bg-gradient-to-br from-white to-teal-50/30 dark:from-gray-900 dark:to-teal-900/10">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg bg-gradient-to-r from-teal-800 to-cyan-800 bg-clip-text text-transparent dark:from-teal-200 dark:to-cyan-200">
                    UX Research
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                    Improving user satisfaction by 40% through comprehensive research and testing.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 border-orange-200 dark:border-orange-800 hover:scale-105 bg-gradient-to-br from-white to-orange-50/30 dark:from-gray-900 dark:to-orange-900/10">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg bg-gradient-to-r from-orange-800 to-red-800 bg-clip-text text-transparent dark:from-orange-200 dark:to-red-200">
                    Project Management
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                    Leading cross-functional teams and digital transformation initiatives.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects - Clickable */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Work</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Strategic solutions that drive business transformation
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {projects.map((project, index) => (
                <Link key={index} href={`/projects/${project.id}`}>
                  <Card className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col">
                    <div
                      className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden flex-shrink-0`}
                    >
                      <div className="absolute inset-0 bg-black/20"></div>
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-white/90 text-gray-800 backdrop-blur-sm text-xs">
                          {project.category}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        <ArrowRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 min-h-[3.5rem] flex items-start">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-auto">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="outline"
                            className="text-xs border-purple-200 text-purple-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
                  9+
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Projects</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-xl">
                <div className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-1">
                  40%
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Efficiency</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl">
                <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-1">
                  20+
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Stakeholders</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl">
                <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-1">
                  6
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Awards</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Technical and strategic capabilities developed through hands-on experience
              </p>
            </div>

            <InteractiveSkills />
          </div>
        </div>
      </section>

      {/* Education & Experience - Full Background */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.05%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">My Journey</h2>
              <p className="text-xl text-purple-200">Education & Professional Experience</p>
            </div>

            {/* Education */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Education</h3>
              <Card className="bg-gray-800/50 backdrop-blur-sm border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 max-w-2xl mx-auto">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="h-5 w-5 text-yellow-400" />
                    <span className="text-yellow-400 font-medium">2021 - 2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Bachelor of Information Systems</h3>
                  <p className="text-purple-300 mb-4">Telkom University, Bandung</p>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">GPA: 3.86/4.00</Badge>
                    <Badge className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">Fresh Graduate</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Professional Experience */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Professional Experience</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {experiences.map((exp, index) => (
                  <Card
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm border-teal-500/30 hover:border-teal-400/50 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Calendar className="h-5 w-5 text-yellow-400" />
                        <span className="text-yellow-400 font-medium">{exp.period}</span>
                        {exp.current && (
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        )}
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">{exp.title}</h4>
                      <p className="text-teal-300 mb-3">{exp.company}</p>
                      <p className="text-gray-300 text-sm">{exp.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Certifications</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {certifications.map((cert, index) => (
                  <Card
                    key={index}
                    className="bg-gray-800/30 backdrop-blur-sm border-white/10 hover:bg-gray-800/50 transition-all duration-300"
                  >
                    <CardContent className="p-4 text-center">
                      <Award className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                      <h4 className="text-white font-semibold text-sm mb-1">{cert.name}</h4>
                      <p className="text-gray-400 text-xs">
                        {cert.issuer} • {cert.year}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Awards & Recognition</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {achievements.map((achievement, index) => (
                  <Card
                    key={index}
                    className="bg-gray-800/30 backdrop-blur-sm border-white/10 hover:bg-gray-800/50 transition-all duration-300"
                  >
                    <CardContent className="p-4 text-center">
                      <span className="text-2xl mb-2 block">{achievement.icon}</span>
                      <span className="text-white text-sm font-medium">{achievement.title}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.1%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="mb-8">
              <Heart className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h2 className="text-4xl font-bold mb-6">Let's Create Something Amazing</h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Ready to collaborate on innovative projects that drive meaningful impact through technology and
                strategic thinking.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-purple-700 hover:bg-pink-50 shadow-lg hover:shadow-xl transition-all"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Start a Conversation
                </Button>
              </Link>
              <a href="https://www.linkedin.com/in/inkasharatupuspadarma/" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  Connect Professionally
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400 mb-4">© 2025 Inka Sharatu Puspadarma. Crafted with passion and innovation.</p>
            <div className="flex justify-center gap-6">
              <a href="https://www.linkedin.com/in/inkasharatupuspadarma/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              </a>
              <a href="https://github.com/inkaspuspadarma" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
              </a>
              <a href="mailto:inkasharatupuspadarma@gmail.com">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
