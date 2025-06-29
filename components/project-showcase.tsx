"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Users, TrendingUp, Target, Lightbulb } from "lucide-react"

interface Project {
  title: string
  category: string
  period: string
  description: string
  impact: string[]
  technologies: string[]
  teamSize: number
  role: string
  outcomes: string
  image: string
}

export function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState(0)

  const projects: Project[] = [
    {
      title: "MyTelkomsel Sentiment Analysis Dashboard",
      category: "Data Analytics & Product Strategy",
      period: "Jun 2025 - Present",
      description:
        "Led the development of an AI-powered sentiment analysis system to transform customer feedback into actionable product insights for Indonesia's largest telecom operator.",
      impact: [
        "Analyzed 1,000+ customer reviews using IBM Granite AI",
        "Reduced feedback processing time by 75%",
        "Generated insights leading to 15% improvement in app ratings",
        "Enabled data-driven product decisions for 170M+ users",
      ],
      technologies: ["Python", "IBM Granite", "Streamlit", "Data Visualization", "NLP"],
      teamSize: 4,
      role: "Technical Lead & Product Analyst",
      outcomes:
        "Transformed customer feedback into strategic product roadmap, directly influencing feature prioritization for Q3-Q4 2025",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "KlinField: AI-Powered Agricultural Solution",
      category: "AI/IoT Product Development",
      period: "Sep 2024 – Dec 2024",
      description:
        "Spearheaded the development of an innovative agritech solution combining AI, IoT, and mobile platforms to revolutionize pest detection and crop management for Indonesian farmers.",
      impact: [
        "Developed YOLO-based pest detection with 92% accuracy",
        "Integrated drone technology for automated monitoring",
        "Created mobile platform serving 500+ farmers in pilot program",
        "Reduced crop loss by 30% in test regions",
      ],
      technologies: ["YOLO Algorithm", "IoT Integration", "Mobile Development", "Drone Technology", "Computer Vision"],
      teamSize: 6,
      role: "Product Manager & Technical Strategist",
      outcomes: "Secured PPKO funding from KEMENDIKBUDRISTEK and positioned for commercial launch in 2025",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Telkom Indonesia Network Optimization",
      category: "Business Process Re-engineering",
      period: "Jul 2024 – Aug 2024",
      description:
        "Redesigned critical business processes for Indonesia's national telecommunications infrastructure, focusing on network disruption management and automated reporting systems.",
      impact: [
        "Developed automated chatbot for disruption alerts",
        "Improved network issue reporting efficiency by 60%",
        "Created SOP reducing response time from 4 hours to 45 minutes",
        "Established KPI framework for network assurance team",
      ],
      technologies: ["Bizagi Modeller", "Process Automation", "Chatbot Development", "KPI Framework", "BPMN"],
      teamSize: 8,
      role: "Senior Business Process Analyst",
      outcomes:
        "Implemented across 34 regional offices, serving as template for national digital transformation initiative",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Customer Experience Transformation",
      category: "CX Strategy & Analytics",
      period: "Sep 2024 – Dec 2024",
      description:
        "Led comprehensive customer experience optimization initiative using advanced analytics and A/B testing to enhance digital touchpoints for 50M+ active users.",
      impact: [
        "Achieved 40% improvement in Net Promoter Score (tNPS)",
        "Implemented A/B testing framework across 12 customer journeys",
        "Developed Python automation tools for eCare processes",
        "Created persona-based communication strategies",
      ],
      technologies: ["A/B Testing", "Python", "Customer Analytics", "Journey Mapping", "Persona Development"],
      teamSize: 5,
      role: "Customer Experience Lead",
      outcomes:
        "Established new CX standards adopted company-wide, resulting in 25% reduction in customer service tickets",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Project Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <button
            key={index}
            onClick={() => setSelectedProject(index)}
            className={`p-4 rounded-lg text-left transition-all duration-300 ${
              selectedProject === index
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 text-blue-800 dark:text-blue-200"
            }`}
          >
            <h3 className="font-semibold text-sm mb-1">{project.title}</h3>
            <p className="text-xs opacity-80">{project.category}</p>
          </button>
        ))}
      </div>

      {/* Selected Project Details */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
            <div className="flex-1">
              <CardTitle className="text-2xl text-blue-800 dark:text-blue-200 mb-2">
                {projects[selectedProject].title}
              </CardTitle>
              <CardDescription className="text-lg text-blue-600 dark:text-blue-400 mb-4">
                {projects[selectedProject].category}
              </CardDescription>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {projects[selectedProject].description}
              </p>
            </div>
            <div className="lg:w-1/3">
              <img
                src={projects[selectedProject].image || "/placeholder.svg"}
                alt={projects[selectedProject].title}
                className="w-full h-48 object-cover rounded-lg border border-blue-200 dark:border-blue-800"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Project Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600 dark:text-gray-400">Team Size</p>
              <p className="text-xl font-bold text-blue-800 dark:text-blue-200">
                {projects[selectedProject].teamSize} People
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
              <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600 dark:text-gray-400">My Role</p>
              <p className="text-sm font-semibold text-blue-800 dark:text-blue-200">{projects[selectedProject].role}</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
              <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-sm text-gray-600 dark:text-gray-400">Duration</p>
              <p className="text-sm font-semibold text-blue-800 dark:text-blue-200">
                {projects[selectedProject].period}
              </p>
            </div>
          </div>

          {/* Key Impact */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-blue-600" />
              Key Impact & Achievements
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {projects[selectedProject].impact.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Technologies & Tools</h4>
            <div className="flex flex-wrap gap-2">
              {projects[selectedProject].technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="border-blue-300 text-blue-700 dark:text-blue-300">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">Strategic Outcomes</h4>
            <p className="text-gray-700 dark:text-gray-300">{projects[selectedProject].outcomes}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <ExternalLink className="h-4 w-4 mr-2" />
              View Live Project
            </Button>
            <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50 bg-transparent">
              <Github className="h-4 w-4 mr-2" />
              View Documentation
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
