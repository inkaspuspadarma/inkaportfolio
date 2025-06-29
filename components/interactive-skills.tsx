"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  Users,
  Target,
  Brain,
  Building2,
  TrendingUp,
  Settings,
  MessageSquare,
  Code,
  Lightbulb,
} from "lucide-react"

const skills = [
  {
    name: "UX Research & Design",
    level: 90,
    icon: Users,
    color: "from-purple-500 to-pink-500",
    description: "User-centered design thinking, prototyping, usability testing",
  },
  {
    name: "Business Analysis",
    level: 95,
    icon: BarChart3,
    color: "from-blue-500 to-cyan-500",
    description: "Process optimization, requirements analysis, stakeholder mapping",
  },
  {
    name: "Project Management",
    level: 88,
    icon: Target,
    color: "from-green-500 to-emerald-500",
    description: "CAPM certified, cross-functional team leadership, agile methodologies",
  },
  {
    name: "Data Analytics & AI",
    level: 85,
    icon: Brain,
    color: "from-orange-500 to-red-500",
    description: "IBM Granite AI, Python, sentiment analysis, machine learning",
  },
  {
    name: "Enterprise Architecture",
    level: 82,
    icon: Building2,
    color: "from-teal-500 to-blue-500",
    description: "TOGAF framework, microservices design, system integration",
  },
  {
    name: "Product Strategy",
    level: 87,
    icon: TrendingUp,
    color: "from-indigo-500 to-purple-500",
    description: "Market research, go-to-market strategy, competitive analysis",
  },
  {
    name: "Process Optimization",
    level: 90,
    icon: Settings,
    color: "from-yellow-500 to-orange-500",
    description: "Workflow redesign, automation, efficiency improvement",
  },
  {
    name: "Stakeholder Management",
    level: 92,
    icon: MessageSquare,
    color: "from-pink-500 to-rose-500",
    description: "Communication, relationship building, requirement gathering",
  },
  {
    name: "Python Programming",
    level: 78,
    icon: Code,
    color: "from-emerald-500 to-teal-500",
    description: "Data analysis, Streamlit, automation, API integration",
  },
  {
    name: "Strategic Planning",
    level: 89,
    icon: Lightbulb,
    color: "from-violet-500 to-purple-500",
    description: "Business planning, roadmap development, innovation strategy",
  },
]

export function InteractiveSkills() {
  const [animatedLevels, setAnimatedLevels] = useState<number[]>(new Array(skills.length).fill(0))
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      skills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedLevels((prev) => {
            const newLevels = [...prev]
            newLevels[index] = skill.level
            return newLevels
          })
        }, index * 200)
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {skills.map((skill, index) => {
        const Icon = skill.icon
        return (
          <Card
            key={index}
            className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 ${
              hoveredSkill === index ? "ring-2 ring-purple-400" : ""
            }`}
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-1">{skill.name}</h3>
                  <div className="flex items-center gap-2">
                    <Progress value={animatedLevels[index]} className="flex-1 h-2" />
                    <Badge
                      variant="secondary"
                      className={`bg-gradient-to-r ${skill.color} text-white border-0 text-xs`}
                    >
                      {animatedLevels[index]}%
                    </Badge>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{skill.description}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
